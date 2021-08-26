const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const express = require("express");
const cars = require('./Cars')
const path = require("path");
const app = express();
const port = 3000;

// Init middleware
/* app.use(logger); */

//Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: 'primary' }));
app.set("view engine", "handlebars");

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Index route
app.get('/', (req, res) => res.render('index', {
    title: "Car app",
    cars
}));

// Static folder - not in use
/* app.use(express.static(path.join(__dirname, "public"))); */

// Cars API Routes
app.use("/api/cars", require("./routes/api/cars"));

app.listen(port, () =>
  console.log(`Server is live and running on localhost:${port}`)
);
