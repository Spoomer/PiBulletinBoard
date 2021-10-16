using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace PiBulletinBoard.Data
{
    public class Payment
    {
        public string Identifier { get; set; } = "";
        [JsonPropertyName("user_uid")]
        public string UserUid { get; set; } = "";
        public decimal Amount { get; set; }
        public string Memo { get; set; } = "";
        public Object Metadata { get; set; } =new();
        [JsonPropertyName("to_address")]
        public string ToAdress { get; set; } = "";
        [JsonPropertyName("created_at")]
        public string CreatedAt { get; set; } = "";
        public Status Status { get; set; } = new();
        public Transaction Transaction { get; set; } = new();
    }
}