const express = require('express');
const app = express();
const compression = require('compression');

app.use(compression())
app.use(express.static('build'));

const listener = app.listen(process.env.PORT || 5000, function () {
  // eslint-disable-next-line
  console.log(`Listening on port ${listener.address().port}`);
});
