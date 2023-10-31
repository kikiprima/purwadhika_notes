// 1 .Build
function showConsole(){
    console.log('Hello!, World!')   
}

// 2. Cell
showConsole()

Penjumlahan()
Penjumlahan()
Penjumlahan()
function Penjumlahan(){
    console.log(1+1)
}

// Function Expression : Function yang dimasukan kedalam variable
const Pengurangan = function(){ // function () -> Annoymous Function
    console.log(5-1)
}
Pengurangan()
Pengurangan()

// Arrow Function
const Perkalian = () => { // tanda => menggantikan function 
    const num1 = 5*10+1000/20
    const num2 = 10*10
    console.log(num1 * num2)
}
Perkalian()

// Function with parameter
const Pembagian = (num1 , num2) => {
    console.log(num1 / num2)
}
Pembagian(200 , 5) // 200 & 5 disebut argument

function perkalian(num1, num2){
    console.log(num1 * num2)
}
perkalian(1000,3)

// Function with return
const Penjumlahan1 = (num1,num2) => {
    return num1 + num2
}
console.log(Penjumlahan1(3,3))

const Penjumlahan2 = (num1 , num2) => {
    console.log(num1 + num2)
}
Penjumlahan2(2,3)
console.log(Penjumlahan1(1,2) * Penjumlahan1(3,3))


// Function with rest parameters
const showNumber = (a, b, c, ...manyMore) => {
    console.log(manyMore)
}
showNumber(1,2,3,4,5,6,7,8,9,10)

// Function with default parameter
const welcomingName = (name = 'User') => {
    console.log(`Welcome, ${name}!`)
}
welcomingName('Kiki')
welcomingName()

// RECURSIVE FUNCTION =  selalu memanggil functionnya sendiri
const countDown = (num3) => {
    console.log(num3)
    num3--
    
    if(num3 > 0){
        return countDown(num3)
    }
    return num3
}
console.log(countDown(5))

// Closure function: inner function yang dapat mengakses variable dari outer function
const greeting = () => {
    const name = 'Kiki'
    const showGreeting = () => {
        console.log(` Welcome, ${name}`)
    }
}
greeting()

// Truthy falsy javascript : nilai non boolean yang di konversikan menjadi nilai boolean

// Falsy : 0, '' , null , undefined, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

//Truthy
console.log(Boolean(1))
console.log(Boolean('a'))

// CASE Validasi inputan dari user,apabila kosong maka munculkan pesan error,
// apabila inputan data makan munculkan pesan succes
const input = 'a'
if(input === ''){
    console.log('Error')
}else{
    console.log('Success')
}
if (input){ // Apabila inpuatannya ada, maka dia success kalo ga ada maka dia error
    console.log('Success')
}else{
    console.log('Error')
}

// Case. Buatlah validasi input dengan ketentuan




