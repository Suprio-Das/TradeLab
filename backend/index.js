import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './Utils/DB.js';
import AuthRoutes from './Router/AuthRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// Database Connection
ConnectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

// ====================== App Routes =========================
app.use('/api/auth', AuthRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});