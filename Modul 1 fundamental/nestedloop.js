// Nested loop
for(let i= 1; i<= 5 ; i++){
    console.log(`Looping i=${i}`)
}












/* 
    * * *
    * * *
    * * *
*/

let pattern01 = ''
for (let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        pattern01 += '* '
    }
    pattern01 += '\n'
}
console.log(pattern01)
let pattern02 = ''
for (let i=1;i<=3;i++){
    for(let j=1;j<=5;j++){
        pattern02 += '* '
    }
    pattern02 += '\n'
}
console.log(pattern02)
//
let pattern03= ''
for(let i=1;i<=5; i++){
    for(let j=1;j<=i;j++){
        pattern03 += '* '
    }
    pattern03 += '\n'
}
console.log(pattern03)


//
let pattern04 = ''
for(let i = 5 ; i >= 1 ; i--){
for(let j=i; j>=1 ; j--){
    pattern04 += '* '
}
    pattern04 += '\n'
}
console.log(pattern04)
