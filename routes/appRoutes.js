const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require("dotenv").config();
const dataStapEen = [];
const dataStapTwee = [];
console.log(dataStapTwee);

router.get("/", function(req, res) {
  res.render("stapEen", {
    title: "home",
    data: dataStapEen
  });
});

router.get("/stap-twee", function(req, res) {
  console.log(req.query);
  if (req.query.studentNummer) {
    dataStapEen.push(req.query);
  } else {
    dataStapTwee.push(req.query);
  }
  console.log("user", dataStapEen);
  console.log("info", dataStapTwee);
  let infoData = dataStapTwee.filter(student => {
    return student.user == req.query.studentNummer;
  });
  console.log("daataaa", infoData);
  res.render("stapTwee", {
    title: "enquete stap twee",
    data: infoData,
    user: req.query.studentNummer
  });
});

router.get("/stap-dree", function(req, res) {
  res.render("stapDree", {
    title: "enquete stap twee"
  });
});

module.exports = router;
