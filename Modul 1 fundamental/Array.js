// ARRAY
// Tipe data yang dapat menampung tipe data lainnya

// ditandai dengan [] [...,...,....]
// dia kaya string pake index
//[index ke-0,index ke-1, index ke-2,dst]

//sebelum mengenal array biasa pake ini
const student1 = 'Raihan'
const student2 = 'Feri'
const student3 = 'Aboy'
// setelah mengenal array pake ini
const students = ['Raihan', 'Feri', 'Aboy']
// didalam array dia bisa menampung banyak data seperti string,number dll
const data = ['Abc',123,true,false,null,undefined]

// Create Read Update Delete (CRUD)
const campusPwd = ['BSD','JKT','BSD']

//Read
campusPwd // Memanggil semua array yg ada di campusPwd (BSD,JKT,BSD)
campusPwd[0] // memanggil 1 array yang ada di index 0 = bsd

// Update
let name = 'Ryan'
name = 'Defryan'

const studentsName = ['Kiki', 'Bulan' ,'Rahma']
studentsName[0] = 'Very'
console.log(studentsName)
studentsName[2] = 'Abed'
console.log(studentsName)
studentsName[3] = 'Karta'
console.log(studentsName)

//Delete
//kalo delete harus pake syntax 'delete'
delete studentsName[0]
console.log(studentsName)

//Method
// - Push = untuk menambahkan data di index paling akhir
const arrNumbers = [1,2,3]
arrNumbers.push(4,5,'123')
console.log(arrNumbers)

// - Unshift = untuk menambahkan data di index paling awal
arrNumbers.unshift(1,2,3)
console.log(arrNumbers)
// - Pop = Menghapus data di index paling akhir
const campusPwdNew = ['BSD','JKT']
campusPwdNew.pop()
console.log(campusPwdNew)


// - Shift = Menghapus data di index paling akhir
const arrRandom=[1,true,'ABC']
arrRandom.shift()
console.log(arrRandom)

// - Splice : bisa digunakan untuk menghapus atau menambah atau mengupdate data
// variableName.splice(index,howManyItemsToDelete,items)
//Menghapus using Splice
const programming = ['Pwk','Jav','SAV']
programming.splice(0,2)
console.log(programming)

//Menambah using Splice
const dataRandom = [1,true,'A']
dataRandom.splice(0,0,'B','D')
console.log(dataRandom)

const classPwd = ['JCWD','JKT48','KTL']
classPwd.splice(2,2)
console.log(classPwd)

// Add data dengan menggunakan data manual vs Splice
// Manual
const arrNumbersss = [1 ,2 ,3]
arrNumbersss[5]=10
console.log(arrNumbersss)


// Splice
const arrNumber1 = [1,2,3]
arrNumber1.splice(5,0,'ABC')
console.log(arrNumber1)






