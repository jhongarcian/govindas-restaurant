require("dotenv").config();
const express = require("express");
const router = express.Router();
const { postReview } = require("../utils/queries");


router.post("/add-review", async (req, res) => {
    const { name, rating, comment } = req.body;

    const insertedReview = await postReview(name, rating, comment);

    console.log(insertedReview)
})

module.exports = router