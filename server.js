const dotenv = require('dotenv');
const express = require('express');
const app = express();
const morgan = require('morgan');

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));



app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })