require('dotenv').config();

const exprass = require("express");
const app = exprass();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
