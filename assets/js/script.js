let form = document.querySelector("form");

let submitForm = (e) => {
  e.preventDefault();
  let key = e.target.querySelector("#key").value;
  let value = e.target.querySelector("#value").value;
  if (key == "" || value == "") {
    alert("please enter both values");
    return;
  }
  localStorage.setItem(key, value);
  showData();
};

form.addEventListener("submit", submitForm);

let dataTR = document.querySelector("table");

let showData = () => {
  dataTR.innerHTML = ` <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>`;
  for (const [key, value] of Object.entries(localStorage)) {
    let data = document.createElement("tr");
    data.innerHTML = `<td>${key} </td> <td> ${value} </td> <td> 
      <button id=${key} onclick='deleteItem(event)'>delete</button> </td>`;
    dataTR.appendChild(data);
  }
};

let deleteItem = (e) => {
  let id = e.target.id;
  delete localStorage[id];
  showData();
};

showData();
