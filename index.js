let countEl = document.getElementById("count-el");
let saveUl = document.getElementById("save-ul");
let count = 0;

function increase() {
  count += 1;
  countEl.textContent = count;
}

function decrease() {
  if (count > 0) {
    count -= 1;
    countEl.textContent = count;
  }
}

function save() {}

function del() {}
