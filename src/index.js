import './style.css';
import status from './status.js';

const itemList = [
  {
    completed: false,
    description: 'Creae HTML file',
    index: 5,
  },
  {
    completed: false,
    description: 'Add CSS style',
    index: 7,
  },
  {
    completed: false,
    description: 'Bootstrapify elements',
    index: 3,
  },
  {
    completed: false,
    description: 'Clean up code',
    index: 78,
  },
  {
    completed: false,
    description: 'Make Submission',
    index: 300,
  },
];

/* eslint-disable */
const sortedList = itemList.sort(function (a, b) { 
  return a.index - b.index; 
});
/* eslint-enable */

if (!localStorage.getItem('storedItem')) {
  window.localStorage.setItem('storedItem', JSON.stringify(sortedList));
}

const populate = () => {
  let ourStore;
  const list = document.getElementById('list');
  if (localStorage.getItem('storedItem')) {
    ourStore = JSON.parse(localStorage.getItem('storedItem'));
  }
  ourStore.forEach((element, i) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    if (element.completed) {
      (div.style.textDecoration = 'underline line-through');
    } else {
      (div.style.textDecoration = 'none');
    }
    checkbox.type = 'checkbox';
    checkbox.name = 'status';
    checkbox.id = `id${i}`;
    checkbox.value = 'value';
    checkbox.checked = element.completed;
    div.append(checkbox);
    span.innerText = element.description;
    div.appendChild(span);
    list.appendChild(div);
  });
};

populate();
status();