const express = require("express");
const appRoutes = require("./routes/appRoutes");

const config = {
  port: process.env.PORT || 4000
};

const app = express();

app.get("/", function (req, res) {
  // Send a plain string using res.send();
  res.redirect("/posts");
});

app
  .set("view engine", "ejs")
  .set("views", "views")

  .use(express.static("static"))
  .use("/posts", appRoutes)

  .listen(config.port, function () {
    console.log(`Application started on port: ${config.port}`);
  });