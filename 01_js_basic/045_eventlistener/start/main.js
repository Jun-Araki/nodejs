const h1Element = document.querySelector('h1');

h1Element.textContent = "change"

const button = document.querySelector('button');

const textContent = (e) => {
  console.dir(e.target.textContent);
}

debugger
button.addEventListener('click', textContent)
