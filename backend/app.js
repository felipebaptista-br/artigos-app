const { json } = require("express");
const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const articleRoute = require("./routes/routes");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(express.json())

// tudo que usar essa rota será direcionado para o todoRoute
app.use("/article", articleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
