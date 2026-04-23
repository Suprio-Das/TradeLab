import UserModel from "../Models/Users.js";

export const BuyTrade = async (req, res) => {
    try {
        try {
            const { userId, price, quantity } = req.body;

            const user = await UserModel.findOne({ userId: userId });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}