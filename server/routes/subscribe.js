const express = require('express');
const router = express.Router();

const { Subscriber } = require('../models/Subscriber');

const { auth } = require('../middleware/auth');

router.post('/subscribeNumber', (req, res) => {
    Subscriber.find({"userTo": req.body.userTo})
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success: true, subscribeNumber :subscribe.length})
    })
});

router.post('/subscribed', (req, res) => {
    Subscriber.find({"userFrom": req.body.userFrom, "userTo": req.body.userTo})
    .exec((err, subscribed) => {
        if(err) return res.status(400).send(err);
        let result = false;
        if(subscribed.length !== 0) {
            result = true;
        }
        res.status(200).json({success: true, subscribed: result});
    })
});

module.exports = router;