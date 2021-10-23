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
        public async Task OnReadyForServerApproval(string paymentId)
        {
            await _apiRequest.PostApprovedPayment(paymentId);
        }
        [JSInvokable("serverCompletion")]
        public async Task OnReadyForServerCompletion(string paymentId, string txid)
        {
            await _apiRequest.PostCompletePayment(paymentId);
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