// Object
// Key & Value -> Property
const user = {
    username : 'kikiprima' // username disebut key, 'kikiprima' disebut value
}
const student = new Object()

const productNameArr = ['Anggur','Jeruk']
const productPriceArr = [10000,15000]
const products1 = {
    name : 'Anggur',
    price : 10000
}
const products2 = {
    name : 'Jeruk',
    price : 15000
}

// CRUD (Creat,Read,Update & Delete)
// Creat
const campusPwd = {}
campusPwd.location = 'BSD'
campusPwd.building = 'GPO-09'
// console.log(campusPwd)

const programPwd = new Object() // {}
programPwd.name = 'Web Development'
programPwd.totalStudents = 9
// console.log(programPwd)

//Read
console.log(campusPwd.building)
console.log(programPwd.totalStudents)
console.log('>>>')
console.log(campusPwd['building'])
console.log(programPwd['totalStudents'])

//Update
const newData = {
    name : 'Marpaung' ,
    hobby : 'Programming'
}
newData.hobby = 'Futsal'
console.log  (newData)

// Delete
newData.hobby = ''
console.log(newData)
delete newData.hobby
console.log(newData)

//Method
//Function yang dimasukan ke dalam object
const myObj = {
    greeting: () => {
        console.log('Welcome,2602!')
    }, greeting1: function(){
        console.log('Hello')
    }
}
myObj.greeting()
myObj.greeting1()

// Accessing Key & For In Loop Objep
const studentData = {
    name: 'Imannuel',
    addres : 'BSD' ,
    program : 'WD'
}
console.log(Object.keys(studentData))

for(let key in studentData){
    console.log(key)
    console.log(studentData[key])
}
// Destructuring Asignment
// Destruct dari property object menjadi variable
const data = {
    name : 'Raihan',
    hobby : 'Study'
}
const {name,hobby} = data
console.log(name)
console.log(hobby)

// Spread Operator (...)
const studentProfile = {
    name: 'Udin',
    program: 'WD',
    years: '5'
}
const studentProfile1 = {...studentProfile, years :'2',hobby: 'manjat'}
console.log(studentProfile1)
//Mutable data asli akan berubah kalo

//Array of Object
const productsArr = [
    {name : 'Jeruk', price: 10000},
    {name: 'Anggur', price: 15000},
    {name:'Semangka',price: 20000}
]
for(let item of productsArr)
item.price = `Rp ${item.price.toLocaleString(`id-ID`)}`
console.log(productsArr)
// console.log(productsArr[0])
// console.log(productsArr[0].name)
for(let item of productsArr){
    console.log(item.name)
}
// tanda ? bisa untuk menghindari error , conditional chaining
/*
Case buatlah program untuk merubah price number menjadi price IDR dari data berikut :
[
    {name : 'Jeruk', price: 10000},
    {name :'Anggur', price: 15000},
    {name :'Semangka',price: 20000} 
]
*/
