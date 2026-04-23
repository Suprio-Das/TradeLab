import UserModel from "../Models/Users.js";

export const BuyTrade = async (req, res) => {
    try {
        try {
            const { userId, price, quantity } = req.body;

            const user = await UserModel.findOne({ userId: userId });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            if (user.position && user.position.entryPrice) {
                return res.status(400).json({ message: "Position already open" });
            }

            const cost = price * quantity;

            if (user.balance < cost) {
                return res.status(400).json({ message: "Insufficient balance" });
            }

            user.balance -= cost;

            user.position = {
                entryPrice: price,
                quantity
            };

            await user.save();

            res.json({
                message: "Buy successful",
                user
            });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

export const GetPortfolio = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await UserModel.findOne({ userId: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const portfolio = {
            balance: user.balance,
            quantity: user.position.quantity
        }

        return res.status(200).json({ success: true, portfolio })
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}