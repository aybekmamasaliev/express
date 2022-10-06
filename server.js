const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routeUser = require("./routes/route");
const routeReviews = require("./routes/reviews");
const routeOrder = require("./routes/orders");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    console.log("ok");
  }
);

app.get("/api", (req, res) => {
  res.send("working");
});

app.use("/api/user", routeUser);

app.use("/api/reviews", routeReviews);

app.use("/api/orders", routeOrder);

app.listen(3050, () => {
  console.log("connected");
});
