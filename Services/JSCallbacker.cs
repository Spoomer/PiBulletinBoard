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
            if (_callbacks.TryGetValue(callbackId, out Action<string[]> callback))
            {
                _callbacks.Remove(callbackId);
                callback(arguments);
            }
        }

        public Task<CallbackerResponse> InvokeJS(string cmd, params object[] args)
        {
            var t = new TaskCompletionSource<CallbackerResponse>();
            _InvokeJS((string[] arguments) => {
                t.TrySetResult(new CallbackerResponse(arguments));
            }, cmd, args);
            return t.Task;
        }

        public void InvokeJS(Action<CallbackerResponse> callback, string cmd, params object[] args)
        {
            _InvokeJS((string[] arguments) => {
                callback(new CallbackerResponse(arguments));
            }, cmd, args);
        }

        private void _InvokeJS(Action<string[]> callback, string cmd, object[] args)
        {
            string callbackId;
            do
            {
                callbackId = Guid.NewGuid().ToString();
            } while (_callbacks.ContainsKey(callbackId));
            _callbacks[callbackId] = callback;
            _js.InvokeVoidAsync("window._callbacker", _this, "_Callback", callbackId, cmd, JsonSerializer.Serialize(args));
        }
    }
}