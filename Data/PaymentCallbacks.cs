using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.JSInterop;
using PiBulletinBoard.Api;

namespace PiBulletinBoard.Data
{
    public class PaymentCallbacks
    {
        private readonly ApiRequest _apiRequest;
        public PaymentCallbacks(ApiRequest apiRequest)
        {
            _apiRequest = apiRequest;
        }
        [JSInvokable("serverApproval")]
        public async Task<Payment> OnReadyForServerApproval(string paymentId)
        {
            return await _apiRequest.PostApprovedPayment(paymentId);
        }
        [JSInvokable("serverCompletion")]
        public async Task<Payment> OnReadyForServerCompletion(string paymentId, string txid)
        {
            return await _apiRequest.PostCompletePayment(paymentId,txid);
        }
        [JSInvokable("cancel")]
        public void OnCancel(string paymentId)
        {
            Console.WriteLine("Payment cancelled");
        }
        [JSInvokable("error")]
        public void OnError(string error, Payment payment)
        {
            Console.WriteLine("Error");
        }


    }
}