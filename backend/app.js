const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/database');
const {readdirSync} = require('fs');
const app = express();

require('dotenv').config(); //To use the .env file

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors({

})); //To avoid problems accessing our server from a different domain

// Routes
readdirSync('./routes').map((r) => app.use('/api/v1', require(`./routes/${r}`)))

app.get('/', (req, res) => {
    res.send('Hello World');
})

const server = () => {
    //console.log(`Server is running on port ${PORT}`);
    connectDB() // Connect to the database
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
}

server();