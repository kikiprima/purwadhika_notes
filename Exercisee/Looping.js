// LOOPING -> Perulangan
// console.log('Hello, World!')
// console.log('Hello, World!')
// console.log('Hello, World!')
// console.log('Hello, World!')
// console.log('Hello, World!')

// - While
/*
    while(condition){block of code}
*/
let start = 1 // 1----2>; 2---> 3; 3---->4
while(start <= 3){console.log('Hello, World!')// 1 <= 3? true --->2 <= 3? true --> 4 <= 3? false
start++} // 1x...2x....3x jadi dia mengulangi selama 3x karena 1 kurang lebih sama dengan 3

let initial = 1
while(initial < 6){console.log('Hai')
initial += 2}

/* do {
        Block of code
    }    while (condition)
*/
let angka = 1 // 1->2; 2->3; 3->4
do{
    console.log(angka)
    angka++
}while(angka <=3)

let angka2 = 100
do{
    console.log(angka2)
    angka2++
}while(angka2 <10)

// - For loop
/*
    for(start; condition; exitWay){
        Block of code
    }
*/
for(let i=1 ; i <=3; i++){
    console.log(i)
}

// Ex. Buatlah Console.log untuk menampilkan angka dari 10 -> 1
for(let i=10 ; i >=1; i--){console.log(i)}

// SCOPE
// var: Tidak mengenal  scope
// let & cont mengenal scope

// var
{
    var name = 'Raihan'
}
console.log(name)

// let&const
// - Declare di global scope, bisa diakses di local scope
// {
    // const number = 10
// }
{
    const point = 100
    {
        console.log(point)
        {
            console.log(point)
        }
    }
}
{
    {
        const discount=50
        console.log(discount)
        {
            const discount=40
            console.log(discount)
        }
    }
}

// Buatlah program untuk menampilkan setiap character yang ada didalam variable
// menggunakan console.log
// Ex. Input = Pwdk
//     Output =P
//             W
//             D
//             K

input = 'pwdk'
for(let i=0 ; i < input.length ; i++){
    console.log(input[i])
}
const input1 = 'SURABAYA'
console.log(input1[0])
console.log(input1[1])
console.log(input1[2])
console.log(input1[3])

for(let i = 0; i < input1.length; i++){
    console.log(input1[i])
}

// Buatlah program untuk menampilkan setiap angka pada sebuah data bertipe data number
// Ex . Input : 62857853331
//      Output : 6
//               2
//               8
//               dst

let input3 = 62857853331
input3 = input3.toString()

for(let i = 0; i < input3.length; i++){
    console.log(input3[i])

}
// PWDK kalo di liat dari index itu 0 1 2 3 
// kalo di length 1 2 3 4 ada 4 huruf




