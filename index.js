let GetAllcontacts = JSON.parse(localStorage.getItem("contacts")) || [];
let lastId = 0;

function addData(event) {
  event.preventDefault();

  let id = addId() + 1 ;

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  let new_contact = [id, username, email, number];

  //push degan tujuan untuk data lama dan baru tetap tidak hilang
  GetAllcontacts.push(new_contact);

  //setItem menambahkan data
  localStorage.setItem("contacts", JSON.stringify(GetAllcontacts));

  window.location.reload(); //   console.log(GetAllcontacts);
}

// localStorage.clear()
// console.log(lastId);

console.log(GetAllcontacts);


function addId(){

  if (GetAllcontacts.length > 0) {
    let lastContact = GetAllcontacts.at(-1);
    let GetlastId = lastContact[0]; 
    return GetlastId;
    
  }else {
    return 0;

  }  
}



// Logika

// -Ambil data dari inputan
// -masukkan kedalam let bungkus pakai array
// -ambil seluruh data dengan tujuan untuk simpan data karna ketika kita tambahkan lagi data lama akan hilang
//  dari data yang sudah kita ambil dan tampung didalam variable.
// - kita push hasil inputan kedalam variable select data sementara dengan tujuan akan kita push uang
// - kita log variable sementara (masih dipikirin)
