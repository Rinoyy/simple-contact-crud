Logika Tambah data

-Ambil data dari inputan
-masukkan kedalam let bungkus pakai array
-ambil seluruh data dengan tujuan untuk simpan data karna ketika kita tambahkan lagi data lama akan hilang
dari data yang sudah kita ambil dan tampung didalam variable.

- kita push hasil inputan kedalam variable select data sementara dengan tujuan akan kita push uang

Logika addID

- karna kita sudah tampung datanya kedalam variable GetAllcontacts
- ketika if (GetAllcontacts.length > 0) berarti sudah ada isinya akan jalankan logika untuk ambil id terakhir nya
  dengan tujuan untuk kirim ke fungsi addData + 1
- pada blok kode if kita ambil .at(-1) berarti kita ambil array terakhir lalu kita [0] dengan arti ambil value pertama.
- setelah itu kita inisialisasi dari variable lastContact kedalam GetlastId
- karna GetlastId sudah punya data yaitu id terakhir dari kontak maka kita return datanya agar ketika sebuah fungsi fi panggil
  sudah mempunyai data.

Logika untuk grouping data
