using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PiBulletinBoard.Data
{
    public class PaymentData
    {
        public decimal Amount { get; set; }
        public string Memo { get; set; }="";
        public User Metadata { get; set; }=new();
    }
}