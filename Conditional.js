// CONDITIONAL STATEMENT
// Pengkondisian

// If
/* if (condition) {// Apabila condition terpenuhi , maka akan menjalankan black of code}


*/

const pointStudent = 80
if(pointStudent > 70){console.log('Student Lulus')}
if('abc' == 'Abc'){console.log('Sama')}// false

// if - else --> else sebagai default output apabila conditonal terpenuhi

if(80 < 80){console.log('Running')}
else{console.log('Error')}

// if - else If - Else
const nilaiSiswa = 75
if(nilaiSiswa > 90){console.log('Lulus Baik')}
else if(nilaiSiswa > 74){console.log('Lulus Bagus')}
else{console.log('Tidak Lulus')}

const nilaiSiswa1 = 71
if(nilaiSiswa1 > 90){console.log('Lulus Baik')}
else if(nilaiSiswa1 > 74){console.log('Lulus Bagus')}
else if(nilaiSiswa1 > 70){console.log('Lulus')}
else{console.log('Tidak Lulus')}


// Ternary Operator
/*
    condition? Block of code if condition === true : block of code if condition === false
*/
// Ex. Saya ingin menvalidasi panjang input dari form user dengan 2 kondisi, apabila
// jumlah karakter > 19 ----> Register Failed
// jumlah karakter <20 ---> Register Success
const formUser = 'kikiprima@gmail.com'
if(formUser.length > 19){console.log('Register Failed')}
else{console.log('Register Success')}

formUser.length > 19? console.log('Register Failed') : console.log('Register Success') // Ternary Operator

const point = 70
point > 90?
console.log('Nilai Anda Baik') : 
point >70? console.log('Nilai Anda Cukup') : 
console.log('Nilai Anda Kurang')