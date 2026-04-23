import express from 'express'
import { Signup } from '../Controllers/AuthController.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/signup', Signup);

export default AuthRoutes;