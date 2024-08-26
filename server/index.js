const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());

app.post("/upload", (req, res) => {
  setTimeout(() => {
    res.json({
      message: "File uploaded successfully",
    });
  }, 31 * 1000);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
