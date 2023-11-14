
const length = 5
const width = 3
const rectangel = length*width
console.log(rectangel)

const parameter = ((length+width)*2)
console.log(parameter)

const radius = 5
const diamater = 2*radius
console.log(diamater)

const r = 5
const pi = 3.14
const keliling_lingkaran = 2*pi*r
console.log(keliling_lingkaran)

const area_circle = pi*(r*r)
console.log(area_circle)

const a = 80
const b = 65
const jumlah_sudut = 180
const c = jumlah_sudut-a-b
console.log(c)

const firstDate = new Date('2022-01-20').getTime()
const secondDate = new Date('2022-01-22').getTime()
console.log(firstDate)
console.log(secondDate)
const differentdate = (secondDate-firstDate)
console.log(differentdate/1000/3600/24)

const numberofdays = 400

const years = Math.floor(numberofdays / 365)
const month = Math.floor(numberofdays % 365 / 30)
const day = Math.floor(numberofdays % 365 % 30)
console.log(years)
console.log(month)
console.log(day)
console.log(`${years} years, ${month} month, ${day} day`)

const numberofdays2 = 366

const years1 = Math.floor(numberofdays2 / 365)
const month1 = Math.floor(numberofdays2 % 365 / 30)
const day1 = Math.floor(numberofdays2 % 365 % 30)
console.log(years1)
console.log(month1)
console.log(day1)
console.log(`${years1} years, ${month1} month, ${day1} day`)






