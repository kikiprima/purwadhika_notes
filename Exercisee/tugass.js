// Case . Odd/Even Array
// Input : [1,4,5,8,10]
// Output :[Odd,Even,Odd,Even,Even]

const input = [1,4,5,8,10]
let output = []
for(let i=0; i < input.length ; i++){
 if(input[i] % 2 === 0){
    output.push('even')
 }else {output.push('odd')}
}
console.log(output)

const input1=[1,4,5,7,8,10]
let output1 = []
for (let item of input1){   // item itu bebas apa aja di tulisnya
    if(item % 2 ===0)output1.push('Even')
    if(item % 2 !==0)output1.push('Odd')
}
console.log(output)