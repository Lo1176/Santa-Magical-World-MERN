const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.DB_PORT || 5000;

const categoriesRoutes = require("./routes/categories");
// const toysRoutes = require("./routes/toys");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   console.log("bienvenue sur la page d'acceuil");
  res.send("Home");
});

app.use("/categories", categoriesRoutes);
// app.use("/toys", toysRoutes);

app.listen(port, () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_mongoose, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
});
