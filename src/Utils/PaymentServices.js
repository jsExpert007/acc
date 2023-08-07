var braintree = require('braintree-web');

function braintainService(braintreeKey, cardInfo) {
  return new Promise((resolve, reject) => {
    braintree.client.create({
      authorization: braintreeKey
    }, function (err, client) {
      client.request({
        endpoint: 'payment_methods/credit_cards',
        method: 'post',
        data: {
          creditCard: {
            number: cardInfo.cardNumber,
            expirationDate: cardInfo.expDate,
            cvv: cardInfo.cvc,
            billingAddress: {
              postalCode: cardInfo.zipCode
            }
          }
        }
      }, function (err, response) {
        // Send response.creditCards[0].nonce to your server
        if(response && response.creditCards[0].nonce) {
            var nonce = response.creditCards[0].nonce;
            resolve(nonce);
        } else {
          reject(err)
        }
      });
    });
  })
}

export {
  braintainService
};
