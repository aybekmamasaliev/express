const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routeUser = require("./routes/route");
const routeReviews = require("./routes/reviews");
const routeOrder = require("./routes/orders");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://aibek:1q2w3e4r@cluster0.cnmrppi.mongodb.net/",
    { useNewUrlParser: true },
    (err) => {
      console.log("ok");
      
      console.log({ fucking_database: err });
    }
  );

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/user", routeUser);

app.use("/reviews", routeReviews);

app.use("/orders", routeOrder);

app.listen(3050, () => {
  console.log("connected");
});
