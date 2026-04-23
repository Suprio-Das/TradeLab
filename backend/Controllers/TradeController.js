export const BuyTrade = async (req, res) => {
    try {
        console.log("Buy trades.")
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}