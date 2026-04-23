import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    entryPrice: Number,
    exitPrice: Number,
    quantity: Number,
    total: Number,
    profit: Number,

}, { timestamps: true });

const TradeModel = mongoose.model("trades", TradeSchema);
export default TradeModel;