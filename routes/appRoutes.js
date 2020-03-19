const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require("dotenv").config();
const dataStapEen = []
const dataStapTwee = []

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mohamad:<password>@cluster0-1de5c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    router.get("/", function (req, res) {
        res.render("stapEen", {
            title: "home",
            data: dataStapEen,
        });

    });

    router.get("/stap-twee", function (req, res) {
        //console.log(req.query)
        if (req.query.naam) {
            dataStapEen.push(req.query)
        }
        res.render("stapTwee", {
            title: "enquete stap twee",
            data: dataStapTwee,
        });
    });

    router.get("/stap-dree", function (req, res) {
        //console.log(req.query)
        if (req.query.docent) {
            dataStapTwee.push(req.query)
        }
        console.log(dataStapEen)
        res.render("stapDree", {
            title: "enquete stap twee"
        });

    });
});




module.exports = router;