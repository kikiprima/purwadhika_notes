import express, { Express , Request , Response} from "express";
import fs from 'fs'; // FS : File Sistem --> untuk reading file
import {read , write} from './utils/fs'


const app : Express = express();

//Langkah 1.2
app.use(express.json()) // Body Parser --> digunakan untuk mengambil data body from client
const port : number = 5000;
app.get('/', (req: Request, res: Response)=>{
    res.send('<h1>Welcome to Express +  Typescript API </h1>')
})
interface IUsers {
    id : number,
    username: string,
    email : string,
    password : string
}
// Get data user
app.get('/users' , (req: Request , res: Response) => {
   try {
     // Step-01 Reading File 'db.json"
    // JSON.parse digunakan untuk merubah format buffer menjadi object JS
    const {users}: {users: Array <IUsers>} = read ()

    // Step - 02 Sending to Client
    res.send({
        error : false,
        message : 'Get Users Success!',
        data : users
    })
   } catch (error) {
    console.log(error)
   }
})

//Post data user
app.post('/users', (req : Request, res: Response) => {
    try {
        
        
        // Step-01 Reading File db.json
        //Json.parse digunakan untuk merubah format buffer menjadi object JS

        const findAllUsers : {users: Array <IUsers>} = read()

        // Step-02 Get Resource Body from Client
        const data: IUsers = {id : findAllUsers.users.length+1, ...req.body}

        // Step-03 Push 'data' into 'users'
        findAllUsers.users.push(data)
        console.log(findAllUsers)

        // Step-04 Save 'users' into 'db.json'
       write(findAllUsers)
        
        //Step-05 Sending response to client
        res.send({
            error: false,
            message: 'Create User Success!',
            data : null
        })

    } catch (error) {
        console.log(error)
    }
})

app.put('/users/:id', (req : Request, res : Response) =>{
    try {
        // Step-01 Reading db.json
        const findAllUsers :{users: Array <IUsers>} = read()
        //Step-02 Get data From "req.body"
        const {id} = req.params
        const data : IUsers = req.body // Object

        // Step-03 Manipulate Data
        //FindAllUsers.users = [{0},{1}]
        findAllUsers.users.forEach((item, index) =>{
            if(item.id === Number(id)){
                findAllUsers.users[index] = {...data, id: item.id}
            }
        })
        
        write(findAllUsers)
        
        //Step-05 Sending response to client
        res.send({
            error: false,
            message: 'Update User Success!',
            data : null
        })
    } catch (error) {
        
    }
})

app.delete('/users/:id', (req : Request, res : Response)=>{
    try {
         // Step-01 Reading db.json
         const findAllUsers :{users: Array <IUsers>} = read()
         //Step-02 Get data From "req.body"
         const {id} = req.params
         
         //Step-03 Manipulate Data
         //findAllUsers.users = [{0},{1}]
         findAllUsers.users.forEach((item,index)=> {
            if(item.id === Number(id)) findAllUsers.users.splice(index,1)
         })
        
         //Step-04 Save Data Into db.json
         write(findAllUsers)
         //Step-05 Sending Response to Client
         res.send({
            error: false,
            message: 'Delete User Success!',
            data : null
        })

    } catch (error) {
        
    }
})

app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`)
})