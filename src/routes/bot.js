import express from "express";
import Message from "../models/Message";

const router = express.Router();

router.get('/', function (req, res) {
    console.log('/');
    res.send("api work");
});

router.post('/', function (req, res) {
    const { date, text } = req.body.msg;
    const { username, id } = req.body.msg.chat;
    console.log('post /bot', req.body );
    const msgData = new Message( { 
		chatId: id,
        username,
        text,
        date
        
     } );
     msgData.save();
    res.json({answer: "api work"});
});

export default router;