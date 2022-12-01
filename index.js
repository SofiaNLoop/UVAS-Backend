const express = require ('express');
const connect_DB = require('./config/db_config.js'); // Call file connect

const app = express(); // Const 4 use express
connect_DB();
// const cors = require('cors');

// app.use(cors()); // config cors
app.use(express.json()); // read json body


app.use('/api/newuser', require('./Routes/Users')); // create new user, visualizer

app.listen(3000, () => {
    console.log("App running in: http://127.0.0.1:3000")
 });