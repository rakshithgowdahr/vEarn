const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
app.use(express.json());
const register = require("./route/register");
const login = require("./route/login");
const addmovie = require("./route/addmovie");
const getmovie = require("./route/getmovie");

const db = require("./config/keys").mongoURI;

// if (!config.get("jwtPrivateKeys")) {
//   console.log("FATAL ERROR: jwtPrivateKey not defined");
//   process.exit(1);
// }

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.sendfile("index.html", { root: __dirname });
});

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/addmovie", addmovie);
app.use("/api/getmovie", getmovie);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
