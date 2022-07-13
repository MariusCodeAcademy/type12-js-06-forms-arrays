'use strict';
console.log('form');

// 1 nusitaikyt i elementus kuriuos naudosim
const userFormEl = document.getElementById('userForm');
console.log('userFormEl ===', userFormEl);

// uzdeti formai ivykio submit pasiklausyma
userFormEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  // 2. nusitaike i forma mes sustabdom josissiuntima su restartu
  // event.preventDefault(); sustabdyti numatytaji veiksma
  event.preventDefault();
  console.log('Submit js is in control');
}

// 3. pereme formos issiuntimo eventa mes pasiimam ivesetties laukur reiksmes
