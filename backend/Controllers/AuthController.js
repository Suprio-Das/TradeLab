import { model } from "mongoose";
import UserModel from "../Models/Users.js";

export const Signup = async (req, res) => {
    try {
        const { name, email, uid } = req.body;

        const userId = uid;

        if (!name || !email || !userId) {
            return res.status(404).json({ message: "Name,Email and UID can not be empty" });
        }

        const user = await UserModel.create({ name, email, userId });

        res.status(200).json({ success: true, message: 'User registered successful' });
    } catch (error) {
        console.log(error.message);
    }
}