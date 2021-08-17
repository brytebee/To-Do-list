import './style.css';

const itemList = [];
const storeList = document.getElementById('listItem');

document.getElementById("addBtn").addEventListener("click", function() {
  let item = document.getElementById('EnterItem').value;
  itemList.push(item)
  showItem();
});

// let removeIndex = storeList.children;

const showItem = () => {
  let itemTotal = itemList.length;
  let li = document.createElement('li');
  for (let i = 0; i < itemTotal; i++) {
    li.innerHTML = itemList[i];
    li.style.borderBottom = "thick solid #0000FF";
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Delete';
    li.appendChild(removeBtn);
  }
  storeList.appendChild(li);
}

// const removeItem = () => {
//   let newList = itemList.filter((id) = itemList.indexOf(id));
// }
