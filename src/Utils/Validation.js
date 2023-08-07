import moment from "moment";

export function EmailValidation(email) {
  let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailReg.test(email);
};

export function NameValidation(name) {
  let nameReg = /^[a-zA-Z]+[a-zA-Z.\s]+[\s]*$/;
  return !!nameReg.test(name);
};

export function PhoneValidation(phone) {
  return !!(phone.length > 10);
};

export function PasswordValidation(password) {
  return !!(password.length >= 6 && password.length <= 20);
};

export function CardNumberValidation(cardNum) {
  var cardNumber = cardNum.replace(/\s/g, '')
  // let cardNumReg = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/;
  // return !!cardNumReg.test(cardNum);

  //Mastercard credit card validation regex
  var MastercardReg = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/

  //American Express credit card validation regex
  var AmericanExpressReg = /^3[47][0-9]{13}$/

  //Visa credit card validation regex
  var VisaReg = /^4[0-9]{12}(?:[0-9]{3})?$/

  //Discover credit card validation regex
  var DiscoverReg = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/

  //Maestro credit card validation regex
  var MaestroReg = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/

  //JCB credit card validation regex
  var JCBReg = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/

  //Diner’s Club credit card validation regex
  var DinerReg = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/

  if (
    MastercardReg.test(cardNumber) ||
    AmericanExpressReg.test(cardNumber) ||
    VisaReg.test(cardNumber) ||
    DiscoverReg.test(cardNumber) ||
    MaestroReg.test(cardNumber) ||
    JCBReg.test(cardNumber) ||
    DinerReg.test(cardNumber)
  )
    return true
  return false
};

export function CardExpDateValidation(expDate) {

  let cardExpDateReg = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (cardExpDateReg.test(expDate)) {
    var currentYear = moment(new Date()).year()
    var currentMonth = moment(new Date()).month() + 1
    var expYear = Number(`20${expDate.split("/")[1]}`)
    var expMonth = Number(`${expDate.split("/")[0]}`)
    if (expYear > currentYear) {
      return true
    } else if (expYear === currentYear) {
      if (expMonth >= currentMonth)
        return true
      return false
    } else {
      return false
    }
  }
  return false;
};

export function CvcValidation(cvc) {
  let cvcReg = /^[0-9]{3,4}$/;
  return !!cvcReg.test(cvc);
};

export function ZipCodeValidation(zipcode) {
  return !!(zipcode.length > 4 && zipcode.length < 7);
};