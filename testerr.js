// const dataSiswa = {
//     name: "Amel",
//     umur: 22,
//     noHP : [0811233 , "0812345"]
// }
// console.log(dataSiswa.name)
// console.log(dataSiswa.nohp)

// let std1 = "gelora bung"
// std += "senayan"
// std = "JIS"

// console.log(std)

// do {
//     let poin = 70
//     poin +=1
//     poin--

// }while(poin<=80)

// console.log(poin)

let noAtrian = [11,12,13,14,15,]
noAtrian.push(123)
noAtrian.sort()

console.log(noAtrian)

function cetakTiket(tiket, callback){
    return callback(tiket)

}
cetakTiket('Kereta','Print')

console.log(String(2320) === "2320")

let printKuy = "Selamat"
if("0" != "nol"){
    printKuy += "Apa Hayo?"
}
console.log(printKuy)


// let UppercaseStr = (txt) =>{
//     let text = txt
//     return text
// }
// UppercaseStr("ya")
// console.log(text)


let kelas = '2200jcwd'
// kelas = Number(kelas)
kelas = String(kelas)
console.log(kelas)


let clothing = [ "asd","bcd","zxc"]
clothing.splice(1,0,"re","be")
// clothing.shift()
console.log(clothing)


let klub = "persib"
let std = "glbs"
if(!klub && !std){
    console.log("data tidak lengkap")
}else if(klub && !std){
    console.log("data kurang lengkap")
}else if(!klub && std){
    console.log("data masih kurang lengkap")
}else{
    console.log("data lengkap")
}

function cetakTiket (tiket, callback){
    return callback(tiket)
}
cetakTiket('Kereta', Print)