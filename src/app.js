const express = require('express');
const privateBlockchain = require('private-blockchain');

const app = express();
const blockchain = new privateBlockchain.Blockchain();

const EMPTY_HEIGHT = -1;
const PORT = 8000;
const UNKNOWN_ERROR_MSG = 'Something bad happened ಥ_ಥ, see server logs';

const convertHeightToInt = (req, res, next) => {
  req.params.height = parseInt(req.params.height, 10);
  next();
};

app.get('/block/:height(\\d+)', convertHeightToInt, (req, res, next) => {
  const requestedHeight = req.params.height;

  blockchain.getBlockHeight()
    .then((lastBlockHeight) => {
      if (lastBlockHeight === EMPTY_HEIGHT) {
        next('ERROR: Blockchain is empty; add a block and try again.');
      } else if (requestedHeight < 0 || requestedHeight > lastBlockHeight) {
        next(`ERROR: Invalid block (${requestedHeight}) requested`);
      } else {
        return blockchain.getBlock(requestedHeight)
          .then(block => res.send(block));
      }
    })
    .catch((error) => {
      console.error(`ERROR: ${error}`);
      res.send(UNKNOWN_ERROR_MSG);
    });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
