import express from "express";
import cors from "cors";
import "./loadenvironment.mjs";
import "express-async-errors";
import api from "./routes/api.mjs";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", api);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
