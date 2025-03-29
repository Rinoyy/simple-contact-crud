let GetAllcontacts = JSON.parse(localStorage.getItem("contacts")) || {};
let lastId = 0;

console.log(GetAllcontacts);

function addData(event) {
  event.preventDefault();

  let group = document.getElementById("group").value;
  let id = addId(group) + 1;

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  if (!GetAllcontacts[group]) {
    GetAllcontacts[group] = [];
  }

  GetAllcontacts[group].push({ id, username, email, number, group });
  localStorage.setItem("contacts", JSON.stringify(GetAllcontacts));
  window.location.reload();
}

function addId(group) {
  let filterGroup = GetAllcontacts[group] || [];

  if (filterGroup.length > 0) {
    let lastContact = filterGroup.at(-1).id;
    return Number(lastContact);
  } else {
    return 0;
  }
}

// localStorage.clear()

function GetData() {
  let GetAllcontacts = JSON.parse(localStorage.getItem("contacts")) || {};
  let tableBody = document.getElementById("contact-list");
  tableBody.innerHTML = "";

  for (let group in GetAllcontacts) {
    GetAllcontacts[group].forEach((contact) => {
      let row = `<tr>
        <td>${contact.id}</td>
        <td>${contact.username}</td>
        <td>${contact.email}</td>
        <td>${contact.number}</td>
        <td>${contact.group}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
}

// localStorage.clear();
GetData()








