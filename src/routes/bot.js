import express from "express";
import Message from "../models/Message";

const router = express.Router();

router.get('/', function (req, res) {
    Message.find()
        .then(messages => {
            res.status(200).json( {messages} )
        })
        .catch(err => res.status(400).json({errors: "Error"}))
});

router.post('/', function (req, res) {
    const { date, text } = req.body.msg;
    const { username, id } = req.body.msg.chat;
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