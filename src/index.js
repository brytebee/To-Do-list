import './style.css';

const storeList = document.getElementById('list');

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

const sortedList = itemList.sort( function(a, c) { return a.index - c.index; });

const displaylist = () => {
  sortedList.forEach((item) => {
    const li = document.createElement('li');
    const text = `<div> <input class='form-check-input me-2' type='checkbox' value='' aria-label='...'>
    ${item.description}</div>`;
    li.classList.add('list-group-item');
    li.innerHTML = text;
    storeList.appendChild(li);
  });
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Clear all Completed';
  deleteButton.classList.add('list-group-item');
  deleteButton.classList.add('block');
  storeList.appendChild(deleteButton);
};

document.addEventListener('DOMContentLoaded', () => {
  displaylist();
});