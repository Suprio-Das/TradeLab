import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './Utils/DB.js';
import AuthRoutes from './Router/AuthRouter.js';
import TradeRoutes from './Router/TradeRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
const allowedOrigins = [
    "http://localhost:5173",
    "https://tradelab-a8936.web.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS: " + origin));
    },
    credentials: true
}));

// Database Connection
ConnectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

// ====================== App Routes =========================
app.use('/api/auth', AuthRoutes);
app.use('/api/trades', TradeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});