import bcrypt from 'bcrypt'
import {User} from '../model/User.js'
import jwt from 'jsonwebtoken'

export const signup = async(req, res) => {
    try {
        const {username,email,password} = req.body

        //check if some data missing 
        
        if(!username || !email || !password){
            return res.status(400).json({message:"Some fields are missing"})
        }

        // check if user is already exists
        const isUserAlreadyExist = await User.findOne({email})

        if(isUserAlreadyExist){
            return res.status(400).json({message:"User Already has an Account"})
        }else{
            
            // Hash the password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password,salt)

            //Genrate JWT token
            const token = jwt.sign({email},"superSceret",{expiresIn:"365d"} )

            // Create user in database
            await User.create({
                username,
                email,
                password:hashedPassword,
                token,
                role:"user"
            })
            return res.status(201).json({message:"User created sucessfully"})

        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
    }
}
export const login = async(req, res) => {


}

