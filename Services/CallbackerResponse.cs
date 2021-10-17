using System;
using System.Text.Json;

namespace PiBulletinBoard.Services
{
    public class CallbackerResponse
    {
        public string[] arguments { get; private set; } = Array.Empty<string>();
        public CallbackerResponse(string[] arguments)
        {
            this.arguments = arguments;
        }
        public T? GetArg<T>(int i)
        {
            return JsonSerializer.Deserialize<T>(arguments[i]);
        }
    }
}