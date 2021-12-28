import express from 'express';
import cors from 'cors';
import data from './data.js';
import config from './config';
import userRouter from './routers/userRouter'
const mongoose = require('mongoose');


mongoose.connect(config.MONGODB_URL).then(()=>console.log('connected to mongodb')).catch((err) => {console.log(err)});

const app = express();
app.use(cors());
app.use('/api/users', userRouter);
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});

app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});