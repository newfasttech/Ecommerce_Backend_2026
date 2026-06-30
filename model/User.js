import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        default: 'user'
    },
    token: {
        type: String,
        required: true
    },
    cart: {
        type: mongoose.Schema.ObjectId,
        ref: 'cart'
    }
})

export const User = mongoose.model('User', userSchema)
 