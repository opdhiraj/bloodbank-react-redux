const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middleware

app.use(express.json()); // to handle json response
app.use(cors());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to Blood bank" });
});
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `node server running on  ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
  );
});
