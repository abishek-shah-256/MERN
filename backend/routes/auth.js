import {SignUp, Login, Logout, Users, SingleUser, EditUser, DeleteUser} from '../controller/auth'
import { requireSignIn } from '../middlewares';

const express = require('express');
const router = express.Router();

router.post('/signUp',SignUp);
router.post('/login',Login);
router.get('/logout',Logout)

router.get('/users',requireSignIn,Users);
router.post('/singleUser',requireSignIn,SingleUser);
router.put('/editUser',requireSignIn,EditUser);
router.delete('/deleteUser',requireSignIn,DeleteUser)




module.exports = router
