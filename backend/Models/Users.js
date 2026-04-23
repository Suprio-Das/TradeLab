import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 10000
    },
    position: {
        entryPrice: Number,
        quantity: Number,
    }
}, { timestamps: true })

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;