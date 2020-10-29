const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const path = require('path')


/*CONFIGURACION*/
/* establecer la carpeta views como carpeta de interfaces graficas */
app.set("views", path.join(__dirname, "views"));
/* configurar el motor de renderizado */
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",/* plantilla principal */
    layoutsDir: path.join(app.get("views"), "layouts"),/* carpeta de plantilla */
    partialsDir: path.join(app.get("views"), "partials"),/*carpeta de porciones de codigo */
    extname: ".hbs",/* extension de los archivos */
  })
);
/*seteamos el motor de renderizado */
app.set("view engine", ".hbs");

/*RUTEO*/

app.use(require('./routes/index.route.js'));




module.exports = app;