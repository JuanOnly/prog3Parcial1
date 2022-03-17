/* Instalacino del miniframework */
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

// Puerto acupar
app.listen(port, () => {
  console.log("Listening to port: ", port);
});

// Connexion con BD mongo
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected with mongo"))
  .catch((error) => console.log(error));

const userSchemaRoutes = require("./routes/user_routes");
app.use(express.json());
app.use("/", userSchemaRoutes);
