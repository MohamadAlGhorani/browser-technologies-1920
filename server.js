const express = require("express");
const appRoutes = require("./routes/appRoutes");

const config = {
  port: process.env.PORT || 4000
};

const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mohamad:Emma.123@cluster0-1de5c.azure.mongodb.net/browserT?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifidTopology: true
});
client.connect(err => {
  const collection = client.db("browserT").collection("users");
  // perform actions on the collection object
  app.get("/", function (req, res) {
    // Send a plain string using res.send();
    res.redirect("/stappen");
  });

  app
    .set("view engine", "ejs")
    .set("views", "views")

    .use(express.static("static"))
    .use("/stappen", appRoutes)

    .listen(config.port, function () {
      console.log(`Application started on port: ${config.port}`);
    });

});