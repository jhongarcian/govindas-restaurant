require("dotenv").config();
const express = require("express");
const router = express.Router();
const { postReview, getReviewData } = require("../utils/queries");


router.post("/add-review", async (req, res) => {
    const { name, rating, comment } = req.body;
    try {
        await postReview(name, rating, comment);
        res.status(200).json({message: "Review added successfully"});
    } catch (error) {
        console.error("Error,", error);
        res.status(500).json({message: "Something went wrong"});
    };
});

router.get("/api/reviews", async (req, res) => {
    try {
        const review = await getReviewData();
        res.status(200).json(review);
    } catch (error) {
        console.error("Error fetching review:", error);
        res.status(500).json({erorr: "Something went wrong"});
    };
});

module.exports = router