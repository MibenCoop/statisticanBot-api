import express from "express";
import Admin from "../models/Admin";

const router = express.Router();

router.post('/setAdmin', function (req, res) {
    const { username, id } = req.body.msg.chat;
    const admin = new Admin({ chatId: id, username});
    Admin.find({chatId: id, username})
    .then(user => {
        if (user.length === 0) {
            admin.save()
                .then(answer => res.status(200).json({answer: "Administrator access obtained"}))
                .catch(err => res.status(400).json({ errors: "Server error"}))
        }
        else { 
            const error = "You already have Administrator access"
            throw error
        }
    }).catch(err => res.status(400).json({errors: err}))
});

router.post('/getAdmin', function (req, res) {
    const { username, id } = req.body.msg.chat;
    Admin.find({chatId: id, username})
        .then( user => {
            if (user.length === 0) 
                res.status(400).json({admin: false, answer: "You don't have administrator rights"})
            if (user.length === 1)
                res.status(200).json({admin:true, answer: "You already have Administrator access"})
        })
        .catch(err => res.status(400).json({errors: "Server error"}))
})

export default router;