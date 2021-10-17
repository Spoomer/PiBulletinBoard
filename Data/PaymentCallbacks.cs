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
        [JSInvokable("onReadyForServerApproval")]
        public async Task OnReadyForServerApproval(string paymentId)
        {
            await _apiRequest.PostApprovedPayment(paymentId);
        }
        [JSInvokable("onReadyForServerCompletion")]
        public async Task OnReadyForServerCompletion(string paymentId, string txid)
        {
            await _apiRequest.PostCompletePayment(paymentId);
        }
        [JSInvokable("onCancel")]
        public void OnCancel(string paymentId)
        {
            Console.WriteLine("Payment cancelled");
        }
        [JSInvokable("onError")]
        public void OnError(string error, Payment payment)
        {
            Console.WriteLine("Error");
        }


    }
}