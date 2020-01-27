import { generateCardNumber, formatCardNumber } from './generator.js';

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const prefill = document.querySelector('#leading').value;
  const length = parseInt(document.querySelector('#length').value) || 16;

  document.querySelector('#number').innerText = formatCardNumber(
    generateCardNumber(prefill, length)
  );
})