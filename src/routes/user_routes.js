const express = require("express");
const userSchema = require("../models/user");
const route = express.Router();

// Crear la ruta para creacion de usuarios
route.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// listar los usuarios existentes
route.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// filtro
route.get("/users/filter/:ByRef", (req, res) => {
  const { ByRef } = req.params;
  userSchema
    .find({ "Droid.specifications.version": ByRef })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Mostrar info de usuario especifico
route.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un usuario especifico
route.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Editar un recurso especifico
route.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { User, Password, Access, Droid } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { User, Password, Access, Droid } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = route;
