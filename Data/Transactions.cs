using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PiBulletinBoard.Data
{
    public class Transactions
    {
        [JsonPropertyName("_embedded")]
        public Embedded Embedded1 { get; set; } = new();

    }
    public class Embedded
    {
        public List<TransactionEntry> Records {get;set;} = new();
    }
    public class TransactionEntry
    {
        [JsonPropertyName("memo_type")]
        public string MemoType { get; set; } = "";
        public string Memo { get; set; } = "";
        [JsonPropertyName("created_at")]
        public string CreatedAt { get; set; } ="";
        [JsonPropertyName("source_account")]
        public string SourceAccount { get; set; } ="";
    }
}