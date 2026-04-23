import { model } from "mongoose";
import UserModel from "../Models/Users.js";

export const Signup = async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log(name, email);

        if (!name || !email) {
            return res.status(404).json({ message: "Name or Email can not be empty" });
        }

        const user = await UserModel.create({ name, email });

        res.status(200).json({ success: true, message: 'User registered successful' });
    } catch (error) {
        console.log(error.message);
    }
}