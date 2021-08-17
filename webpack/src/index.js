import './style.css';

const itemList = [];
const storeList = document.getElementById('listItem');

document.getElementById("addBtn").addEventListener("click", function() {
  let item = document.getElementById('EnterItem').value;
  itemList.push(item)
  console.log(itemList);
  showList();
});

const showList = () => {
  let itemTotal = itemList.length;
  let li = document.createElement('li');
  for (let i = 0; i < itemTotal; i++) {
    li.innerHTML = itemList[i];
  }
  storeList.appendChild(li);
}


