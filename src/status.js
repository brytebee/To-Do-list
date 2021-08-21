export default function status() {
  const ourStore = JSON.parse(localStorage.getItem('storedItem'));
  const checks = Object.values(document.getElementsByName('status'));
  checks.forEach((element, i) => {
    element.addEventListener('click', () => {
      if (element.checked) {
        ourStore[i].completed = true;
        (element.parentElement.style.textDecoration = 'underline line-through');
      } else {
        ourStore[i].completed = false;
        (element.parentElement.style.textDecoration = 'none');
      }
      window.localStorage.setItem('storedItem', JSON.stringify(ourStore));
    });
  });
}