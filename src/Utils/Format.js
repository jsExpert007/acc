export function expDateFormat(value) {
  return value.replace(
    /[^0-9]/g, '' // To allow only numbers
  ).replace(
    /^([2-9])$/g, '0$1' // To handle 3 > 03
  ).replace(
    /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
  ).replace(
    /^0{1,}/g, '0' // To handle 00 > 0
  ).replace(
    /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
  );
};

export function cardNumberFormat(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,16}/g);
  // eslint-disable-next-line no-mixed-operators
  var match = matches && matches[0] || ''
  var parts = []

  var AmericanCardReg = new RegExp("^3[47]");
  if (value.match(AmericanCardReg) != null) {
    var new_number = value.replace(/\s/g, '').replace(/(\d{4})\s*(\d{6})?\s*(\d{5})?/, '$1 $2 $3').replace(/\s\s/g, ' ').trim()
    return new_number
  } else {
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }
};

export function GetCardType(cardNum) {
  var cardNumber = cardNum.replace(/\s/g, '')

  //Mastercard credit card validation regex
  var MastercardReg = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
  if (MastercardReg.test(cardNumber))
    return "Mastercard";

  //American Express credit card validation regex
  var AmericanExpressReg = /^3[47][0-9]{13}$/
  if (AmericanExpressReg.test(cardNumber))
    return "AMEX";

  //Visa credit card validation regex
  var VisaReg = /^4[0-9]{12}(?:[0-9]{3})?$/
  if (VisaReg.test(cardNumber))
    return "Visa";

  //Discover credit card validation regex
  var DiscoverReg = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/
  if (DiscoverReg.test(cardNumber))
    return "Discover";

  //Maestro credit card validation regex
  var MaestroReg = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/
  if (MaestroReg.test(cardNumber))
    return "Maestro";

  //JCB credit card validation regex
  var JCBReg = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
  if (JCBReg.test(cardNumber))
    return "JCB";

  //Diner’s Club credit card validation regex
  var DinerReg = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
  if (DinerReg.test(cardNumber))
    return "Diners - Carte Blanche";
  return "";
}