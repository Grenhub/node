const express = require ('express')
const path = require ('path')
const app = express();
const port = 3000;

/* app.get('/', (req, res) => {

}) */

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server is live and running on localhost:${port}`))