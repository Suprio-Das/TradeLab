import express from 'express'
import { BuyTrade, GetPortfolio, SellTrade } from '../Controllers/TradeController.js';

const TradeRoutes = express.Router();

TradeRoutes.post('/buy', BuyTrade);
TradeRoutes.get('/portfolio', GetPortfolio)
TradeRoutes.post('/sell', SellTrade)

export default TradeRoutes;