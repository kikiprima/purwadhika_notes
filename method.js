//   method
// shortcut untuk manupulasi data

// 1. string built-in method
// .lenght -> untuk menghitung jumlah karakter
const paragraph = 'abcdefghijklmnopqrstu'
console.log(paragraph.length)

// .slice -> untuk memotong
const text = 'Hello, World!'
console.log(text.slice(2, 4))

// .substring -> apabila parameter index pertamanya > dari parameter index kedua, makan akan dilakukan switch
const nama = '12345678'
console.log (nama.substring(5,2)) // Dimulai index ke-2, sampai index ke-5 (index ke 5 not include)

//  .toUpperCase & .toLowerCase
const fullname = 'Defryan'
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())

// 2. Number Built-in Method
// - .toString -> Mengkonversi dari number menjadi string
const phoneNumber = 6281385536326
console.log(phoneNumber.toString().slice(0,5))
// console.log(phoneNumber.toString().slice(phoneNumber.toString.length-4(phoneNumber.toString).length)

// - Math Round -> pembulatan sesuai aturan matematika
console.log(Math.round(1.4))
console.log(Math.round(1.5))
// - Math Ceil -> Pembulatan ke atas
console.log(Math.ceil(1.2))
// - Match Floor -> pembulatan ke bawah
console.log(Math.floor (1.9))



