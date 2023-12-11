"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("./utils/fs");
const app = (0, express_1.default)();
//Langkah 1.2
app.use(express_1.default.json()); // Body Parser --> digunakan untuk mengambil data body from client
const port = 5000;
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express +  Typescript API </h1>');
});
// Get data user
app.get('/users', (req, res) => {
    try {
        // Step-01 Reading File 'db.json"
        // JSON.parse digunakan untuk merubah format buffer menjadi object JS
        const { users } = (0, fs_1.read)();
        // Step - 02 Sending to Client
        res.send({
            error: false,
            message: 'Get Users Success!',
            data: users
        });
    }
    catch (error) {
        console.log(error);
    }
});
//Post data user
app.post('/users', (req, res) => {
    try {
        // Step-01 Reading File db.json
        //Json.parse digunakan untuk merubah format buffer menjadi object JS
        const findAllUsers = (0, fs_1.read)();
        // Step-02 Get Resource Body from Client
        const data = Object.assign({ id: findAllUsers.users.length + 1 }, req.body);
        // Step-03 Push 'data' into 'users'
        findAllUsers.users.push(data);
        console.log(findAllUsers);
        // Step-04 Save 'users' into 'db.json'
        (0, fs_1.write)(findAllUsers);
        //Step-05 Sending response to client
        res.send({
            error: false,
            message: 'Create User Success!',
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
});
app.put('/users/:id', (req, res) => {
    try {
        // Step-01 Reading db.json
        const findAllUsers = (0, fs_1.read)();
        //Step-02 Get data From "req.body"
        const { id } = req.params;
        const data = req.body; // Object
        // Step-03 Manipulate Data
        //FindAllUsers.users = [{0},{1}]
        findAllUsers.users.forEach((item, index) => {
            if (item.id === Number(id)) {
                findAllUsers.users[index] = Object.assign(Object.assign({}, data), { id: item.id });
            }
        });
        (0, fs_1.write)(findAllUsers);
        //Step-05 Sending response to client
        res.send({
            error: false,
            message: 'Update User Success!',
            data: null
        });
    }
    catch (error) {
    }
});
app.delete('/users/:id', (req, res) => {
    try {
        // Step-01 Reading db.json
        const findAllUsers = (0, fs_1.read)();
        //Step-02 Get data From "req.body"
        const { id } = req.params;
        //Step-03 Manipulate Data
        //findAllUsers.users = [{0},{1}]
        findAllUsers.users.forEach((item, index) => {
            if (item.id === Number(id))
                findAllUsers.users.splice(index, 1);
        });
        //Step-04 Save Data Into db.json
        (0, fs_1.write)(findAllUsers);
        //Step-05 Sending Response to Client
        res.send({
            error: false,
            message: 'Delete User Success!',
            data: null
        });
    }
    catch (error) {
    }
});
app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`);
});
