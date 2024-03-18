//-------------------------------
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("api is running but your url is not /bfhl");
});
app.get("/bfhl", (req, res) => {
  res.send("WELCOME TO BFHL \n JASHAN_2110990669");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
