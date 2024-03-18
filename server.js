//-------------------------------
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("api is running but your url is not /bfhl");
});
app.get("/bfhl", (req, res) => {
  const data = {
    is_success: true,
    user_id: "jashan",
    email: "jashan0669.be21@chitkara.edu.in",
    roll_number: "2110990669",
  };
  res.json(data);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
