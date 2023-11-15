// data types / tipe data
// primitive : string,number,null,undefined,Booelan
// Non-Primtive: array&object

// - string -> tipe data yang ditandai dengan '',"", or ``
const campuspwd1 = 'BSD'
const campuspwd2 = "JKT"
const campuspwd3 = `BGR`
console.log(typeof campuspwd1)
console.log(typeof campuspwd2)
console.log(typeof campuspwd3)

const number = '100'
console.log(typeof number)

// string literal -> untuk mempermudah kita dalam menyisipkan syntax JS di
const name = 'Defryan'
const hobby = 'Belajar'
console.log('My Name is ' +name+ ', My Hobby is ' +hobby)
console.log(`My Name is ${name}, My Hobby is ${hobby}`)

// - number
const point = 100
const num = 0.1
console.log(typeof num)

// - Booelan -> Tipe data yang hanya bernilai true & false
const isGraduated = true
const isMarried = false
console.log(typeof isGraduated)
console.log(typeof isMarried)

// - Null
const angka = null

// - Undefined
let angka1
console.log(typeof angka)
console.log(typeof angka1)

// - Date
const now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getFullYear())
