let form = document.querySelector("form");

// import { showData } from "./showData.js";

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
  console.log(localStorage);
  console.log("hi");
  dataTR.innerHTML = ` <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>`;
  for (const [key, value] of Object.entries(localStorage)) {
    console.log(key, value);
    let data = document.createElement("tr"); // Create a <button> element
    data.innerHTML = `<td>${key} </td> <td> ${value} </td> <td> 
      <button id=${key} onclick='deleteItem(event)'>delete</button> </td>`; // Insert text
    dataTR.appendChild(data);
  }
  console.log("hi");
};

let deleteItem = (e) => {
  let id = e.target.id;
  delete localStorage[id];
  showData();
};

showData();
