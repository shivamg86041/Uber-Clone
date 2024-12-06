const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db/db");
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.use('/users', userRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})