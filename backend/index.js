require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoutes.js"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
