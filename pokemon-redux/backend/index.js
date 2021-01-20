const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pokeRouter = require('./src/routes/pokeRoutes')();

const server = express();
const port = 4000;

server.use(cors());
server.use(morgan('dev'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/pokemons', pokeRouter);

server.listen(port, () => {
	console.log(`Server listening at port ${port}`);
});
