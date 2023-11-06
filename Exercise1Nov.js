//Search String
const searchString = (str, strForReplace) => {
    return str.replace(strForReplace, '')
}
console.log(searchString('Hello World', 'ell'))




//UPPERCASE FIRST CHARACTER
const upperFirstChar = (str)=>{
    let result = ''
    for (let i=0;i < str.length; i++){
        if(i === 0 || str[i-1] === ' '){
            result += str[i].toUpperCase()
        }else{
            result += str[i]
        }
    }
    return result
}
console.log(upperFirstChar('hello world kiki'))

const swapCase = (str) => {
    let result = ''
    for(let i=0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()) result += str[i].toLowerCase()
        if(str[i] === str[i].toLowerCase()) result += str[i].toUpperCase()
    }
return result
}
console.log(swapCase('JcWd'))

const findA = (str) => {
    let result = ''
    for(let item of str){
        item.toLowerCase() === 'a'? result += '*' : result += item
    }
    return result
}
console.log(findA('An apple'))

let fizzBuzz = (str) => {
    let result = ''
    for(let i=1 ; i<=str;i++){
        if(i % 3 == 0 && i % 5 == 0){
            result += 'fizzbuzz'
        }else if (i % 3 == 0){
            result += 'fizz'
        }else if(i % 5 ==0){
            result += 'buzz'
        }else(result +=i)
    }
    return result
}
console.log(fizzBuzz(15))


const calculatedBMI = (weight,height) => {
    const bmi = weight / Math.pow(height,2)
        if(bmi <= 18.5){
            result = 'less weigth'
        }else if (bmi >= 18.5&&24.9){
            result = 'ideal'
        }else if(bmi >= 25.0&&29.9){
            result = 'over weight'
        }else if(bmi >=30.0&&39.9){
            result = 'very overweight'
        }else if(bmi >= 39.9){
            result = 'obesity'
        }
    return result
}
console.log(calculatedBMI(120,1.85))

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumber = numbers.filter(numbers => numbers % 2 === 0 )

console.log(evenNumber)

const deleteOddNumber = (arr) => {
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 !== 0)
        arr.splice(i,1)
    }
    return arr
}
console.log(deleteOddNumber([1,2,3,4,5,6,7,8,9,10]))

const arr = ["apple", "banana", "cherry", "date"];
let str = "";

if (arr.length === 1) {
  str = arr[0];
} else if (arr.length === 2) {
  str = arr.join(" and ");
} else {
  str = arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1]
}
console.log(str)

