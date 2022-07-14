'use strict';
console.log('formLarge');

const cardEl = document.getElementById('card');
const h1El = document.querySelector('h1');
const veskInputEl = document.getElementById('ivesk');
const maleEl = document.getElementById('male');
const femaleEl = document.getElementById('female');
// const formEl = document.getElementById('userForm');
const formEl = document.forms.radioForm;
console.log('formEl ===', formEl);
// veskInputEl.value = 'Hello';

veskInputEl.addEventListener('input', (event) => {
  console.log('input ivyko');
  h1El.textContent = event.target.value;
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Js is in control');
  const obj = {};
  const genderPasirinkimas = maleEl.checked ? 'Male' : 'Female';
  console.log('genderPasirinkimas ===', genderPasirinkimas);
});
