const logger = require("./middleware/logger");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Init middleware
/* app.use(logger); */

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Cars API Routes
app.use('/api/cars', require('./routes/api/cars'));

app.listen(port, () =>
  console.log(`Server is live and running on localhost:${port}`)
);