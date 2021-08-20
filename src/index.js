import './style.css';
import { completed } from './status.js';

export const itemList = [
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

const populate = () => {
  const list = document.getElementById('list')
  sortedList.forEach((element, i) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const span = document.createElement('span')
    checkbox.type = 'checkbox';
    checkbox.name = 'status';
    checkbox.id = `id${i}`;
    checkbox.value = 'value';
    div.append(checkbox);
    span.innerText = element.description;
    div.appendChild(span);
    list.appendChild(div);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  populate();
  const checks = Object.values(document.getElementsByName('status'));
  checks.forEach(element => {
    element.addEventListener('click', () => {
      if (element.checked) {
        console.log(!completed());
      } else {
        console.log(completed());
      }
    });
  });
});
