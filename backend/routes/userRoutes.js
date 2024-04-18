import express from 'express'
import { userRegisterController } from '../controllers/userController.js';

const router = express.Router()

router.post('/register', userRegisterController);


export default router