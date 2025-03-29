let GetAllcontacts = JSON.parse(localStorage.getItem("contacts")) || {};
let lastId = 0;

function addData(event) {
  event.preventDefault();

  let id = addId() + 1;

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let group = document.getElementById("group").value;

  // let new_contact = [id, username, email, number, group];

  if (!GetAllcontacts[group]) {
    GetAllcontacts[group] = [];
  }

  //push degan tujuan untuk data lama dan baru tetap tidak hilang
  GetAllcontacts[group].push({ username, email, number, group  });

  //setItem menambahkan data
  localStorage.setItem("contacts", JSON.stringify(GetAllcontacts));

  window.location.reload(); //   console.log(GetAllcontacts);
}



console.log(GetAllcontacts);

function addId() {
  if (GetAllcontacts.length > 0) {
    let lastContact = GetAllcontacts.at(-1)[0];
    let GetlastId = lastContact;
    return GetlastId;
  } else {
    return 0;
  }
}

// Logika Tambah data

// -Ambil data dari inputan
// -masukkan kedalam let bungkus pakai array
// -ambil seluruh data dengan tujuan untuk simpan data karna ketika kita tambahkan lagi data lama akan hilang
//  dari data yang sudah kita ambil dan tampung didalam variable.
// - kita push hasil inputan kedalam variable select data sementara dengan tujuan akan kita push uang

// Logika addID

// - karna kita sudah tampung datanya kedalam variable GetAllcontacts
// - ketika  if (GetAllcontacts.length > 0) {  berarti sudah ada isinya akan jalankan logika untuk ambil id terakhir nya
//  dengan tujuan untuk kirim ke fungsi addData + 1
// - pada blok kode if  kita ambil .at(-1) berarti kita ambil array terakhir lalu kita [0]  dengan arti ambil value pertama.
// - setelah itu kita inisialisasi dari variable lastContact kedalam GetlastId
// - karna GetlastId sudah punya data yaitu id terakhir dari kontak maka kita return datanya agar ketika sebuah fungsi fi panggil
//   sudah mempunyai data.

// Logika untuk grouping data
