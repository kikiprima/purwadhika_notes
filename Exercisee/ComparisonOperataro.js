// Comparison operator / operator pembanding
// >, >=,<,<=,==,===,!=,!==
// Akan menghasilkan value berupa nilai bolean (true/false)

console.log(10 > 5) // true
console.log(10 > 10) // false
console.log(5 <= 5) // true
console.log(10 != 10) // false
console.log(5 != 3) // true

// - == -> hanya mengecek valuenya saja
// - === -> mengecek value dan juga tipe datanya
console.log(5 == '5') //true
console.log(3 === '3') //false

console.log(5 !== 3)

// ##### ADDTIONAL ####
// Incerement & Decrement
let number = 3
number = number + 1 // 4
console.log(number +1) // 4
number++ // Increment
console.log(number) // 5

let point = 5
point++
console.log(point) //6

let value = 100
value + 1 // skip
value++ // 101
console.log(value)

let nilai = 100
nilai += 100
console.log(nilai) // 200

let discount = 10
discount *= 2 // 20
console.log(discount) //

// String special concate
let name1 = 'aboy'
let name2 = 'senpai'
console.log(name1 + name2)
console.log(name1 - name2) // hanya bisa ditambah yang lain tidak bisa

let name3 = 'raihan'
let points = 100
console.log(name3 + points) // apabila string+number = concate digabungin selainnya ikut rumus MTK

let num1 = 100
num1++ // 101
num1 += '2' //1012
console.log(num1)

let num2 = '10'
num2++ // number 11
num2 += '1' // 11+'1' = '111'
console.log(num2)

let num3 = 100
num3 *= 3 // Number 300
num3 += 5 // Number 305
console.log(num3)

let num4= '63'
num4 -= 1
console.log(num4)
