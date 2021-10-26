const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser')

const server = express();
require('dotenv').config();

server.use(cors());

server.use(express.json());

server.use(bodyParser.json());

server.use("/", router);

server.use('/api', require('./routes'));

const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

server.get('*', (req, res, next) => {
  res.status(404).send('Page Does Not Exist')
});

server.use((error, req, res, next) => {
  console.error(error)
  res.send({error: 'You have encountered an error'})
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`server is running on ${PORT} ...`))