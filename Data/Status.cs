using System.Text.Json.Serialization;

namespace PiBulletinBoard.Data
{
    public class Status
    {
        [JsonPropertyName("developer_approved")]
        public bool DeveloperApproved { get; set; }
        [JsonPropertyName("transaction_verified")]
        public bool TransactionVerified { get; set; }
        [JsonPropertyName("developer_completed")]
        public bool DeveloperCompleted { get; set; }
        public bool Cancelled { get; set; }
        [JsonPropertyName("user_cancelled")]
        public bool UserCancelled { get; set; }
    }
}