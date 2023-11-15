// function celsiusKeFahrenheit(suhuCelcius)
//     let fahrenheit = (suhuCelcius * 9/5) + 32;
//     return fahrenheit
// let suhuCelcius = 60 ; c:\Users\USER\Documents\JCWD\Exercisee\Tugas.js
// let suhuFahrenheit = celsiusKeFahrenheit(suhuCelcius);
// console.log(suhuCelcius + "derajat Celcius sama dengan" + suhuFahrenheit + "derajat Fahrenheit")

// Even or ODD
const input = 25
if(input % 2 == 0){
    console.log(`${input} is Even`)
}else{
    console.log(input + 'is Odd')
}

// IS PRIME
// Bilangin yang habis dibagi 1 dan dirinya sendiri

const number = 11
let isPrime = true
for(let i=2 ; i<number; i++){
    if(number %i === 0 ){
        isPrime = false
    }
}
if(number === 1){
    console.log('Not Prime')}
else if(isPrime === true)
{console.log('is Prime')}
else{console.log('Not Prime')}



const stringNumber = '35912'
let isEven = false
for (let i=1 ; i<stringNumber.length;i++){
    if(stringNumber[i]% 2 == 0)
    {isEven = true}
console.log(stringNumber[i])
}
if(isEven == false){
    console.log('Theres no even number')}
else if (isEven == true){
    console.log('There is even number')
}

// Buatlah program untuk menentukan jumlah bilangan ganjil dna bilangan genap
// const stringNum = '33124'

const stringNum = '33124'
let totalEven = 0
let totalOdd = 0

for (let i=0 ; i<stringNum.length;i++){
    if(stringNum[i] % 2 == 0){
    console.log(stringNum[i])
    totalEven++}
else if(stringNum[i] % 2 == 1){
        console.log(stringNum[i])
    totalOdd++}
}
console.log('Total Even = ' + totalEven)
console.log('Total Odd = ' + totalOdd)

// SUM TOTAL N
const n = 10
let total = 0

for(let i=1 ; i <= n; i++){
    total +=i
}
console.log(total)

const m = 4
let totalFact = 1
for(let i=m ; i > 0 ; i--){
    totalFact = totalFact * i
}
console.log(totalFact)

// FIBONANCI
let o = 15
let firstFibo = 0
let secFibo = 1

for(let i = 2; i <= o ; i++){
let nextFibo = firstFibo + secFibo
firstFibo = secFibo
secFibo = nextFibo
}
console.log(secFibo)

let kata = 'malam'
let kataBalik = ''
for(let i = kata.length-1; i >= 0 ;i--){
   kataBalik += kata[i]}

if(kata === kataBalik) console.log('Palindrome')
if(kata !== kataBalik) console.log('Not Palindrome')
