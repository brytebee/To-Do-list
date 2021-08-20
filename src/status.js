

const status = () => {
    const checks = Object.values(document.getElementsByName('status'));
    
    checks.forEach(element => {
        element.addEventListener('click', () => {
          if (element.checked) {
            element.parentElement.style.textDecoration = 'underline line-through';
          } else {
            element.parentElement.style.textDecoration = 'none';
          }
        });
    });
}

export { status };