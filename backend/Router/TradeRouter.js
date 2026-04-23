import express from 'express'
import { BuyTrade, GetPortfolio } from '../Controllers/TradeController.js';

const TradeRoutes = express.Router();

TradeRoutes.post('/buy', BuyTrade);
TradeRoutes.get('/portfolio', GetPortfolio)

export default TradeRoutes;