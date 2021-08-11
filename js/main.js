const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    //Create the item
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("itemInput");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let doneButton = document.createElement("button");
    doneButton.innerHTML = "DONE";
    doneButton.classList.add("doneButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(doneButton);
    itemBox.appendChild(removeButton);

    // doneButton.addEventListener("click", () => this.edit(input));
    doneButton.addEventListener("click", function () {
      input.style.textDecoration = "line-through";
    });

    doneButton.addEventListener("dblclick", function () {
      input.style.textDecoration = "none";
    });

    removeButton.addEventListener("click", () => this.remove(itemBox));
  }
  // edit(input) {
  //   input.disabled = !input.disabled;
  // }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
