require("dotenv").config()
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

router.post("/retrive-checkout-session", async (req, res) => {
    const {id} = req.body;
    try {
        const session = await stripe.checkout.sessions.retrieve(id);
        session && session.id && res.status(200).json(session);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Something went wrong"})
    }
})

module.exports = router;