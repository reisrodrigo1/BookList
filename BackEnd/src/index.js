const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const BookRoutes = require('./routes/BookRoutes');
server.use('/book', BookRoutes);

server.listen(3333, ()=>{
    console.log('API OK');
})