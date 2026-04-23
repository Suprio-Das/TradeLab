import express from 'express'
import { BuyTrade } from '../Controllers/TradeController.js';

const TradeRoutes = express.Router();

TradeRoutes.post('/buy', BuyTrade);

export default TradeRoutes;