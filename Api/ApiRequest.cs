using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using PiBulletinBoard.Data;

namespace PiBulletinBoard.Api
{
    public class ApiRequest
    {
        public string BaseUrl { get; set; }
        public string TestBaseUrl { get; set; }
        public ApiHelper Apihelper { get; set; }
        public ApiRequest(IConfiguration configuration, ApiHelper apiHelper)
        {
            BaseUrl = configuration.GetValue<string>("ApiUrl");
            TestBaseUrl = configuration.GetValue<string>("ApiTestUrl");
            Apihelper = apiHelper;
        }

        public async Task<Message> GetMessageFromPayments(string paymentId)
        {
            Message result = new Message();
            Payment payment = await GetPaymentAsync(paymentId);
            if (payment == default(Payment)) return result;
            result.FromKey = payment.UserUid;
            result.MessageText = payment.Memo;
            DateTime.TryParse(payment.CreatedAt, out DateTime creationDate);
            result.TimeStamp = creationDate;
            User user = await GetUser(payment.UserUid);
            result.FromName = user.Username;
            return result;
        }
        public async Task<Payment> GetPaymentAsync(string paymentId)
        {
            string url = $"{BaseUrl}/payments/{paymentId}";
            using (HttpResponseMessage message = await Apihelper.ApiClient.GetAsync(url))
            {
                if (message.IsSuccessStatusCode)
                {
                    Payment? payment = await message.Content.ReadFromJsonAsync<Payment>();
                    if (payment is null) payment = new Payment();
                    return payment;
                }
                else return new Payment();
            }
        }
        public async Task<Payment> PostApprovedPayment(string paymentId)
        {
            string url = $"{BaseUrl}/payments/{paymentId}/approve";
            using (HttpResponseMessage message = await Apihelper.ApiClient.PostAsync(url, new StringContent("")))
            {
                if (message.IsSuccessStatusCode)
                {
                    Payment? payment = await message.Content.ReadFromJsonAsync<Payment>();
                    if (payment is null) payment = new Payment();
                    return payment;
                }
                else return new Payment();
            }
        }
        public async Task<Payment> PostCompletePayment(string paymentId, string txid)
        {
            string url = $"{BaseUrl}/payments/{paymentId}/complete";
            HttpContent body = new FormUrlEncodedContent(
                        new List<KeyValuePair<string?, string?>>()
                        {new KeyValuePair<string?,string?>("txid",txid)});

            using (HttpResponseMessage message = await Apihelper.ApiClient.PostAsync(url, body))
            {
                if (message.IsSuccessStatusCode)
                {
                    Payment? payment = await message.Content.ReadFromJsonAsync<Payment>();
                    if (payment is null) payment = new Payment();
                    return payment;
                }
                else return new Payment();
            }
        }
        public async Task<User> GetUser(string accessToken)
        {
            string url = $"{BaseUrl}/me";
            HttpRequestMessage message = new HttpRequestMessage(HttpMethod.Get, url);
            message.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            using (HttpResponseMessage responseMessage = await Apihelper.ApiClient.SendAsync(message))
            {
                if (responseMessage.IsSuccessStatusCode)
                {
                    User? user = await responseMessage.Content.ReadFromJsonAsync<User>();
                    if (user is null) user = new User();
                    return user;
                }
                else return new User();
            }

        }
        public async Task<Transactions> GetTransactionsAsync(string userId)
        {
            string url = $"{TestBaseUrl}/accounts/{userId}/transactions";
            HttpRequestMessage message = new HttpRequestMessage(HttpMethod.Get, url);
            using (HttpResponseMessage responseMessage = await Apihelper.ApiClient.SendAsync(message))
            {
                Transactions? transactions = await responseMessage.Content.ReadFromJsonAsync<Transactions>();
                if (transactions is null) transactions = new ();
                return transactions;
            }
        }
    }
}