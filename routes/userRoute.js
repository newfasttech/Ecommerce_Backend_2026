import express from "express";
const router = express.Router()
import {signup,login} from "../controller/userController.js"
import {User} from "../model/User.js"

router.post('/register',signup)
router.post('/login',login)

export default router