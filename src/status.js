import { ourStore } from "./index";

export const status = () => {
    const checks = Object.values(document.getElementsByName('status'));
    checks.forEach((element, i) => {
        element.addEventListener('click', () => {
          if (element.checked) {
            ourStore[i].completed = true;
            (element.parentElement.style.textDecoration = 'underline line-through');
            alert('Task Completed!');
          } else {
            console.log(ourStore[i].completed = false);
            (element.parentElement.style.textDecoration = 'none');
            alert('Completed Task Cancelled!');
          }
        });
    });
}