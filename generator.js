function luhnCheck (num) {
  let sum = 0;
  let digits = String(num)
    .split('')
    .reverse();

  for (var i = 0; i < digits.length; i++) {
    let digit = digits[i];
    digit = parseInt(digit, 10);
    if (i % 2) {
      digit *= 2;
    }
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
};

const DefaultIin = '424242';
const PlaceholderNumbers = '0123456789';

function generatePlaceholderNumbers(length) {
  let str = PlaceholderNumbers;

  while (str.length < length) {
    str += PlaceholderNumbers;
  }

  return str.slice(0, length);
}

export function generateCardNumber(prefill, length = 16) {
  if (!prefill) {
    prefill = DefaultIin;
  }

  const missingLength = length - prefill.length - 1;

  let cardNum = prefill + generatePlaceholderNumbers(missingLength);

  for (let i = 0; i <= 9; i++) {
    let _card = cardNum + i;

    if (luhnCheck(_card)) {
      return _card;
    }
  }
}


export function formatCardNumber (number) {
  number = number.replace(/\D/g, '');

  if (number.length === 16) {
    return number.replace(/(.{4})/g, '$1 ');
  } else {
    return number.replace(/(^.{4}|.{6})/g, '$1 ');
  }

  return number;
}