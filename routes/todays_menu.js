require("dotenv").config();
const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const { TwitterApi } = require("twitter-api-v2");
const { storeInputData, deletePreviousMenuData, getTodayMenuData } = require("../utils/queries");

router.use(bodyParser.json({ limit: "10mb"}));
router.use(bodyParser.urlencoded({ extended: true, limit: "10mb"}));

// Twitter cn
const client = new TwitterApi({
    appKey: process.env.APPKEY,
    appSecret: process.env.APPSECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCSESSTOKENSECRET,
    bearerToken: process.env.BEARERTOKEN
});

// Twitter access to read and write
const rwClient = client.readWrite;

// Handle the storage and name of the file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage, limits: {fieldSize: 10 * 1024 * 1024 }});

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// POST tweet

router.post("/upload", upload.single("image"), async (req, res) => {
    const incommingObj = req.body
    try {
        // images section
        const imageFileName = req.file.filename;
        const imageFilePath = path.join( "./uploads/", imageFileName);
        const imageFilePathToDelete = path.join("./", imageFilePath);
        // text section 
        const data = req.body;
        const inputList = Object.values(data);
        const textToDisplay = inputList.join("\n");
        if(imageFileName && imageFilePath) {
            mediaTweet(imageFilePath, textToDisplay);
            fs.unlink(imageFilePathToDelete, (error) => {
                if(error) return
            })
        };
        const insertedId = await storeInputData(incommingObj);
        await deletePreviousMenuData(insertedId - 1);
    
        res.status(200).json({message: "Tweet Posted"})
    } catch (error) {
        res.status(500).json({error: "Try again latter"})
    }
});

// Get todays menu 

router.get("/today-menu", async (req, res) => {
    try {   
        const menuData = await getTodayMenuData();
        
        if(menuData) {
            const menuList = Object.values(menuData)
            res.json(menuList);
        } else {
            res.status(404).json({ error: "Menu data not found" });
        }
    } catch (error) {
        console.error("Error retrieving today's menu:", error);
        res.status(500).json({ error: "Internal server error" });
    };
});

const mediaTweet = async (image_path, tweet_text) => {
    try {
        const mediaId = await client.v1.uploadMedia(image_path);

        await rwClient.v2.tweet({
            text: tweet_text,
            media: { media_ids: [mediaId] },
        })
    } catch (error) {
        console.error(e)
    };
};



module.exports = router