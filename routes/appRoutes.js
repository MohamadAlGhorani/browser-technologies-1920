const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require("dotenv").config();
const dataStapEen = [];
const dataStapTwee = [];
const verstuurdData = [];

router.get("/", function (req, res) {
  res.render("stapEen", {
    title: "Inloggen"
  });
});

router.get("/stap-twee", function (req, res) {
  console.log(req.query);
  let finalData = verstuurdData.filter(student => {
    if (student.user == req.query.studentNummer) {
      return true
    } else {
      return false
    }
  });
  if (finalData[0]) {
    res.render("alBezocht", {
      title: "Bedankt",
      data: finalData
    });
  } else {
    if (req.query.studentNummer) {
      dataStapEen.push(req.query);
    } else {
      dataStapTwee.push(req.query);
    }
    if (req.query.user || req.query.studentNummer) {
      console.log("user", dataStapEen);
      console.log("info", dataStapTwee);
      let infoData = dataStapTwee.filter(student => {
        if (req.query.studentNummer) {
          return student.user == req.query.studentNummer;
        } else {
          return student.user == req.query.user;
        }
      });
      console.log("daataaa", infoData);
      res.render("stapTwee", {
        title: "Enquete invullen",
        data: infoData,
        user: req.query.studentNummer
      });
    } else {
      res.render("stapEen", {
        title: "Inloggen"
      });
    }
  }
});

router.get("/stap-dree", function (req, res) {
  verstuurdData.push(req.query)
  console.log(verstuurdData)
  res.render("stapDree", {
    title: "Bedankt"
  });
});

module.exports = router;