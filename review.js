//variable untuk menampung data
let name = 'ryan'
name += 'defryan'// untuk mengubah ryan menjadi defryan pake sama dengna untuk menambah pake +=
// mutable itu ketika merubah isinya,imutable menambah isinya
// mutable copy by refrence & immutable copy by value
let campus = 'BSD'
let campus1 = campus
campus1 = 'JKT'
console.log(campus, campus1)
console.log(campus1)
//mutable
//immutable
let products = ['Anggur','Jeruk']// mutable
let products1 = products
let products2 = products1
products2[0] = 'Apel'
console.log(products)
console.log(products1)
console.log(products2)

//conditional selama pake else if dia harus pake nilainya kalo else doang dia langsung conditionalnya aja
// kalo array pake method.push buat masukin ke array kosong


const sumNumber = (array) => {
    let output = 0
    for(let i=0 ; i < array.length ; i++){
        if(typeof(array[i]) === 'number'){
            output += array[i]
        }
    }
    return output
}
console.log(sumNumber(["3",1,"string",null,false,undefined,2]))