const express = require("express");
const app = express();

// Define categorizeData function
const categorizeData = (data) => {
  const result = {
    is_success: true,
    user_id: "jashan_25112003",
    email: "jashan0669.be21@chitkara.edu.in",
    roll_number: "2110990669",
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
  };

  data.forEach((value) => {
    if (!isNaN(value)) {
      if (value % 2 === 0) {
        result.even_numbers.push(value);
      } else {
        result.odd_numbers.push(value);
      }
    } else if (
      typeof value === "string" &&
      value.length === 1 &&
      /^[a-zA-Z]$/.test(value)
    ) {
      result.alphabets.push(value.toUpperCase());
    }
  });

  return result; // Moved return statement inside the function
};

app.get("/", (req, res) => {
  res.send("api is running but your url is not /bfhl");
});

app.use(express.json()); // Moved express.json() middleware to the top

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: "Data must be an array" });
  }

  const responseData = categorizeData(data);
  res.json(responseData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`)); // Added arrow function to the console.log
