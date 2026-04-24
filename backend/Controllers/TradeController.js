import TradeModel from "../Models/Trade.js";
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

export const SellTrade = async (req, res) => {
    try {
        const { userId, price } = req.body;

        const user = await UserModel.findOne({ userId: userId });

        if (!user || !user.position) {
            return res.status(400).json({ message: "No active position" });
        }

        const { entryPrice, quantity } = user.position;

        const profit = (price - entryPrice) * quantity;
        const total = entryPrice * quantity;

        await TradeModel.create({
            userId,
            entryPrice,
            exitPrice: price,
            quantity,
            total,
            profit,
        });

        user.balance += profit;
        user.position = null;

        await user.save();

        res.json({
            message: "Sell successful",
            profit,
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const GetPortfolio = async (req, res) => {
    try {

        const user = await UserModel.findOne({ userId: req.params.userId });
        const trade = await TradeModel.findOne({ userId: req.params.userId });
        if (!trade || !user) {
            return res.status(404).json({ message: "User or Trade not found" })
        }

        const portfolio = {
            balance: user.balance,
            quantity: trade.quantity,
            profit: trade.profit
        }

        return res.status(200).json({ success: true, portfolio })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const TradeHistory = async (req, res) => {
    try {
        const trades = await TradeModel
            .find({ userId: req.params.userId })
            .sort({ createdAt: -1 });

        res.json(trades);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}