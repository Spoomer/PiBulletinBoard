using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace PiBulletinBoard.Services
{

    public class JSCallbacker
    {
        private IJSRuntime _js;
        private DotNetObjectReference<JSCallbacker> _this;
        private Dictionary<string, Action<string[]>> _callbacks = new Dictionary<string, Action<string[]>>();

        public JSCallbacker(IJSRuntime JSRuntime)
        {
            _js = JSRuntime;
            _this = DotNetObjectReference.Create(this);
        }

        [JSInvokable]
        public void _Callback(string callbackId, string[] arguments)
        {
            if (_callbacks.TryGetValue(callbackId, out Action<string[]>? callback))
            {
                _callbacks.Remove(callbackId);
                callback(arguments);
            }
        }

        public async Task<JSResponse> InvokeJS<T>(string cmd, params object[] args)
        {
            JSResponse response = new();
            var t = new TaskCompletionSource<CallbackerResponse>();
            response.Response = await _InvokeJS<T>((string[] arguments) => {
                t.TrySetResult(new CallbackerResponse(arguments));
            }, cmd, args);
            response.CallbackerResponse = await t.Task;
            return response;
        }
        private async Task<string> _InvokeJS<T>(Action<string[]> callback, string cmd, object[] args)
        {
            string callbackId;
            do
            {
                callbackId = Guid.NewGuid().ToString();
            } while (_callbacks.ContainsKey(callbackId));
            _callbacks[callbackId] = callback;
            var result = await _js.InvokeAsync<T>("window._callbacker", new Object[] {_this, "_Callback", callbackId, cmd, JsonSerializer.Serialize(args)});
            return JsonSerializer.Serialize<T>(result);
        }
    }
}