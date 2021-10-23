using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PiBulletinBoard.Data
{
    public class AuthResult
    {
        public string AccessToken { get; set; } ="";
        public User User { get; set; } = new();
    }
}