import express from 'express';
import { creatUser,getUser, updateUser, deleteUser, getSuser } from '../controller/userController.js';
const routers = express.Router();

routers.post('/creatUser',creatUser);
routers.get('/getUser',getUser);
routers.get("/read/:id",getSuser);
routers.put('/updateUser/:id',updateUser);
routers.delete('/deleteUser/:id',deleteUser)

export default routers;
