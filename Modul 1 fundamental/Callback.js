const hello = () => {
    console.log ('hello')
}
function world (callback){
    console.log('world')
    callback()
}

world(hello)