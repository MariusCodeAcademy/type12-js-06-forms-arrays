'use strict';
console.log('form');

// 1 nusitaikyt i elementus kuriuos naudosim
const userFormEl = document.getElementById('userForm');
console.log('userFormEl ===', userFormEl);
const usernameEl = document.getElementById('username');
const ageEl = document.getElementById('age');

// uzdeti formai ivykio submit pasiklausyma
userFormEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  // 2. nusitaike i forma mes sustabdom josissiuntima su restartu
  // event.preventDefault(); sustabdyti numatytaji veiksma
  event.preventDefault();
  console.log('Submit js is in control');
  // ageEl === <input type="number" id="age" name="age" placeholder="Your age">
  // kas ivesta i ageEl === ageEl.value
  const formAgeValue = ageEl.value;
  console.log('formAgeValue ===', formAgeValue);
  // usernameValue
  // pagaminti objekta kuriame butu username ir age su reikmem
}

// 3. pereme formos issiuntimo eventa mes pasiimam ivesetties laukur reiksmes
