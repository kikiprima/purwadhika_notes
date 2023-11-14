// lowest highest

const getLowestHighestAvg = (arr)=> {
     const sortArr = arr.sort((a,b)=>a-b)
    const avg = arr.reduce((a,b) => a+b) / arr.length
    return `Lowest = ${sortArr[0]} Highest = ${sortArr[arr.length-1]}, Average = ${avg}`
}
console.log(getLowestHighestAvg([100,50,30,20,10,5,1]))

const separtesAnd = (arrTxt) => {
    let result = ''
    for(let i = 0; i < arrTxt.length;i++){
        if(i===arrTxt.length-1){
            result += ` and ${arrTxt[i]}`
        }else{
            result += `${arrTxt[i]},`
        }
        }
        return result
    }
    console.log(separtesAnd(['apple','banana','cherry','date']))
const sumInput = (input1,input2)=>{
    result =[]
    for(i=0 ; i<=input1.length-1;i++){
        result[i] = input1[i] + input2[i]
    }
    return result
}
    let input1 = [1,2,3,]
    let input2 = [3,2,1,]
    console.log(sumInput(input1,input2))
    