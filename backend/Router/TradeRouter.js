import express from 'express'
import { BuyTrade, GetPortfolio, SellTrade, TradeHistory } from '../Controllers/TradeController.js';

const TradeRoutes = express.Router();

TradeRoutes.post('/buy', BuyTrade);
TradeRoutes.get('/portfolio', GetPortfolio)
TradeRoutes.post('/sell', SellTrade)
TradeRoutes.get('/history/:userId', TradeHistory)

export default TradeRoutes;