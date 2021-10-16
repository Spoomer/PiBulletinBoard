using System;

namespace PiBulletinBoard.Data
{
    public class Message
    {
        public string MessageText { get; set; } = "";
        public string FromName { get; set; } = "";
        public string FromKey { get; set; } = "";
        public DateTime TimeStamp { get; set; }
    }
}