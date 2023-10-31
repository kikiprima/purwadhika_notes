// Class : blueprint untuk mencetak object dengan nama property yg sama
class Students{
    name = ''
    hobby = ''
    program = ''

constructor(name, hobby, program){
    this.name = name,
    this.hobby = hobby,
    this.program = program
}
}
const students1 = new Students('Kiki','Basket','WD')
const students2 = new Students('Prima','Berlari','DM')
console.log(students1)
console.log(students2)
const studentsArr = [
    new Students('Kiki','Basket','WD'),
    new Students('Prima', 'Berlari', 'DM')
]
console.log(studentsArr)

// Study case
// Disebuah supermakert terdapat beberapa kategori produk. Mulai dari buah, elektrionik dan pakaian
// Setiap kategori produk memiliki entitas yang berbeda beda,seperti produk name stock dll
// 1 jabarkan apa aja entitas yang dimiliki untuk masing masing kategori produk
// 2 buatkan class untuk mencetak entitas tersebut


class Buah{
    constructor(name,stock,satuan,price){
    this.name = name,
    this.stock = stock,
    this.satuan = satuan,
    this.price = price
}}
class Elektronik{
    constructor(name,stock,price){
    this.name = name,
    this.stock = stock,
    this.price = price
    }
}
class Pakaian{
    constructor(name,stock,price){
        this.name = name,
        this.stock = stock,
        this.price = price
    }
}
const buah1 = new Buah('Jeruk',15,1,15000)
console.log(buah1)

class Product{
    constructor(name,stock,price){
        this.name = name,
        this.stock = stock,
        this.price = price
    }
}
class Buah1 extends Product{
    constructor(name,stock,price,satuan){
    super(name,stock,price)
    this.satuan = satuan
    }
}
    

class Elektronik1 extends Product{
    constructor(name,stock,price,merk){
    super(name,stock,price)
    this.merk = merk
    }
}
class Pakaian1 extends Product{
    constructor(name,stock,price,merk,color){
        super(name,stock,price)
        this.merk = merk,
        this.color = color
    }}
const buah2 = new Buah1('Jeruk',15,15000,2)
console.log(buah2)
const elektrionik1 = new Elektronik1('Meja',1,2000000,'Olimpic')
console.log(elektrionik1)
const pakaian2 = new Pakaian1 ('Baju',1,150000,'Uniqlo','Merah')
console.log(pakaian2)

// Encapsulation : Proses pembungkusan data kedalam class
// Public Property
// Private Property

class Users{
    username = ''
    email = ''
    phoneNumber = ''
    #password = ''

    constructor(username,email,phoneNumber,password){
        this.username = username,
        this.email = email,
        this.phoneNumber = phoneNumber,
        this.#password = password
    }
}
const user1 = new Users('kikiprima','kikiprima15@gmail.com','08138553','kiki')
console.log(user1.password)