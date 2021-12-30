import express from 'express';
import cors from 'cors';
import data from './data.js';
import config from './config';
import userRouter from './routers/userRouter'
const mongoose = require('mongoose');

mongoose.connect(config.MONGODB_URL).then(()=>console.log('connected to mongodb')).catch((err) => {console.log(err.reason)});

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

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
app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({ message: err.message });
});
app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});