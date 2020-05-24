const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anni0911:fuehrer007@cluster0-dwsf6.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    {useNewUrlParser : true, useUnifiedTopology : true}).then(() => {
        console.log("DB connected");
    }).catch((err) => {
        console.error(err);
    });

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(5000);