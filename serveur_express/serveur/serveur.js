const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use('/', express.static('../client/'));
app.use('/public', serveIndex('../')); // Question Laila Je comprends pas la différence entre les deux 
app.get('/', (req, res) => {
  console.log(res)
  res.send('Successful response.');
});

app.listen(8000, () => console.log('Example app is listening on port 8000.'));