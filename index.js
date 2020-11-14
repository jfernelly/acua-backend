// Modulos internos
const express = require("express");
const mongoose = require("mongoose");
// Modulos creados
const usuario = require("./routes/usuario");
//const auth = require("./routes/auth");
// App
const app = express();
app.use(express.json());
app.use("/api/usuario/", usuario);
//app.use("/api/auth/", auth);

// Pruerto de ejecucion
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Port conection: " + port));
// Registro en Mongo
mongoose
  .connect("mongodb://localhost/acua", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB conection : ON"))
  .catch((error) => console.log("DB conection: OFF"));

/* 
26-10
{
    "nombre": "Jose",
    "apellido": "Jimenez",
    "tipoDocumento": "CC",
    "numeroDocumento": "72275057",
    "departamento": "Bogotá",
    "ciudad": "Bogotá",
    "direccion": "Suba",
    "telefono": "3166598450",
    "correo": "jf@mail.com",
    "pass": "1234",
} 
*/