using System.Text.Json.Serialization;

namespace PiBulletinBoard.Data
{
    public class Transaction
    {
        public string Txid { get; set; } = "";
        public bool Verified { get; set; }
        [JsonPropertyName("_link")]
        public string Link { get; set; } = "";
    }
}