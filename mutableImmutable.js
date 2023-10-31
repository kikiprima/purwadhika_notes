// mutable vs immutable

// mutable : Non - primitive
// Variable yang value nya bisa berubah
let arr = [1, 2, 3]  
// [index-0, index-1, index-2,dst]
let newArr = arr
// newArr = [1, 2, 3
newArr[1] = 'A'
console.log(arr)
console.log(newArr)

// Spread Operator ...
let students = ['Kiki', 'Aboy', 'Immanuel']
let newStudents = [...students]
newStudents[2] = 'Didit'
console.log(students)
console.log(newStudents)

// Immutable : Primtive
// Variable yang value nya tidak bisa berubah
let name = 'Raihan'
let newName = name
// newName = 'raihan'
newName = 'Kiki'
// newName = 'Raihan' -> newName = 'Kiki'
console.log(name)
console.log(newName)
