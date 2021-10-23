using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace PiBulletinBoard.Api
{
    public class ApiHelper
    {
        public HttpClient ApiClient { get; set; }
        public string Key { get; set; } = "";

        public ApiHelper(IConfiguration configuration)
        {
            ReadKey(configuration.GetValue<string>("ApiKeyPath"));
            ApiClient = new();
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            ApiClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Key",Key);
        }
        
        void ReadKey(string path)
        {
            Key = File.ReadAllText(path);
        }
    }
}