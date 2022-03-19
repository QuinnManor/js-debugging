var label = document.querySelector('p');
var button = document.querySelector('button');

button.addEventListener('click', onClick);

function onClick() {
    if (isInputEmpty()) {
      label.textContent = "Apples!";
    }
    updateLabel();
  }

function isInputEmpty() {
    return true
}

function updateLabel() {
    var myName = "Apples";
    label.textContent = `${myName}!`;
}