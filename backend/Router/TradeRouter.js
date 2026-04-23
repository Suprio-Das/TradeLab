import express from 'express'
import { BuyTrade } from '../Controllers/TradeController';

const TradeRoutes = express.Router();

TradeRoutes.post('/buy', BuyTrade);

export default TradeRoutes;