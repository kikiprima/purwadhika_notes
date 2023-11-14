const numberofdays = 400

const years = Math.floor(numberofdays / 365)
const month = Math.floor(numberofdays % 365 / 30)
const day = Math.floor(numberofdays % 365 % 30)
console.log(years)
console.log(month)
console.log(day)
console.log(`${years} years, ${month} month, ${day} days`)