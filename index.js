const express = require('express');
const bodyParser = require("body-parser");
const DBConnection = require('./src/config/db.config')
const router = require('./src/routes/record.route')
const PORT = 8080;

// create express app
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Connecting to the database
DBConnection.connect(PORT).then(()=>{
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
}).catch(()=>{})

app.use('/',router);
app.use('*', (req, res) =>
    res.status(404).json({ code: 1, msg: 'Page not found' })
);

