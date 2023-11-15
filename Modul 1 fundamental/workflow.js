// Management System Admin

/*
Immanuel = PM & Buat data penyimpanan
Kiki = Function Home Page, Function Edit Product
Raihan = Function Login & Logout
Veri = Function Menampilkan Daftar Produk
Rahma = Function Add Produk
*/

class Users {
    constructor(id, username, password){
        this.id = id
        this.username = username
        this.password = password
    }
}

const databaseUsers = [
    new Users(1, "admin", "1234"),
    new Users(2, "user", "1234"),
]

class Products {
    constructor(id, productName, productPrice, productUnit){
        this.id = id
        this.productName = productName
        this.productPrice = productPrice
        this.productUnit = productUnit
    }
}

const databaseProducts = [
    new Products(1, "Mangga", 10000, "Kg"),
    new Products(2, "Jeruk", 15000, "Unit"),
]

/*
Data yang diperlukan
1. User Object (username(string), password(string)) ->
2. Produk (nama(string), price(number), satuan(string))
*/

// START LOGIN
// 1. Prompt ("Your Username : ")
        // 1) FITUR PROMPT
// 2. Prompt ("Password : ")
        // 1) FITUR PROMPT
    //  VALIDASI COCOKKAN DENGAN DATA USER
    // If error = Back to -> 1.
    // IF success = Go to -> 3
// END LOGIN

// START HOME PAGE
    // 3. BASE ROUTE -> HOME -> Prompt (Welcome admin ${nama admin})
        /*
            1) FITUR PROMPT (1. Nampilin nama admin// 2. Tampilin Daftar Fitur)
        */
// END HOME PAGE

// START LIST PRODUK
    //  1). List Product
            // 1) FITUR PROMPT (1. Nampilin Data Produk)
            // FUNCTION DATA PRODUK : VERI
// END LIST PRODUK

// START ADD PRODUK
    //  2). Add Product -> 1) Name. 2) Price
                // 1) Fitur Prompt (1. List Produk // 2. Input Nama Produk)
                    // If Product name sudah ada, Ulang input nama lagi
                // 2) Fitur Prompt (1. Input Produk Price)
                // 3) Fitur Prompt (1. Input Unit)
                // 4) Alert (1. Success)
// END ADD PRODUK
        
// START UPDATE PRODUK
    //  3). Update Product -> 1) Select Product. 2) Nama Product. 3). Price. 4) Unit
                // 1) Fitur Prompt (1. List Produk // 2. Input Update Produk)
                // 2) Fitur Prompt (1. Input New Product Name)
                // 3) Fitur Prompt (1. Input New Product Price)
                // 4) Fitur Prompt (1. Input New Product Unit)
                // 5) Alert (1. Success)
// END UPDATE PRODUK

// START DELETE PRODUK
//  4). Delete Product -> 1) Select Product
            // 1) Fitur Prompt (1. List Produk // 2. Nomor produk untuk dihapus)
            // 2) Alert (1. Success)
// END DELETE PRODUK

// START LOGOUT
    //  5). Logout 
// END  LOGOUT
