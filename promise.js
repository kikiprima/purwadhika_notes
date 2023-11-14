const tryPromise = new Promise((resolve, reject) => {
    let isSuccess = false
    if(isSuccess){
        resolve("success")
    }else{
        reject("error 500")
    }
})

tryPromise.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("finally")
})
