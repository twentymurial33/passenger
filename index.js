let countEl = document.getElementById("count-el");
let saveUl = document.getElementById("save-ul");
let count = 0;
let entries = [];

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

function renderEntries() {
  let entriesHTML = "";
  for (let i = 0; i < entries.length; i++) {
    entriesHTML += `
            <li>
                <span>${entries[i].count}</span>
                <span class="time-spn">(${entries[i].timestamp})</span>
            </li>
        `;
  }
  saveUl.innerHTML = entriesHTML;
}

function save() {
  let now = new Date();
  let timestamp = `${now.getHours()}:${now.getMinutes()}`;
  let countStr = `${count} (${timestamp}) - 
   `;
  let entryObj = {
    count: count,
    timestamp: timestamp,
  };
  entries.push(entryObj);
  renderEntries();
  countEl.textContent = 0;
  count = 0;
}

function del() {
  saveUl.textContent = "Previous entries:";
}
