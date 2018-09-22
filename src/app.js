const express = require('express');
const Blockchain = require('private-blockchain');

const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Private Blockchain Web Service'));
app.listen(port, () => console.log(`App listening on port ${port}!`));
