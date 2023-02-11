// ASYNCHRONOUS (NON-BLOCKING) "DI EKSEKUSI BERDASAR KAN WAKTU PROSES YANG PALING CEPAT"

let banguntidur = ["Cuci Muka", "Makan", "Mandi"];

console.log(banguntidur[0]);

setTimeout(() => {
  console.log(banguntidur[1]);
}, 500); // tunda selama 500 miliseconds

console.log(banguntidur[2]);

/* ----------
Output :
Cuci Muka ( parameter urutan Ke 1)
Mandi ( parameter urutan Ke 3)
Makan ( parameter urutan Ke 2)
------------*/