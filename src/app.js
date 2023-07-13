const express = require('express');
const cors = require('cors');
const ProductManager = require('./ProductManager');

const app = express();
const productManager = new ProductManager();

app.use(cors());

app.get('/products', async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  try {
    const products = await productManager.getProducts();
    const limitedProducts = limit ? products.slice(0, limit) : products;
    res.json(limitedProducts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

app.get('/products/:pid', async (req, res) => {
  const productId = parseInt(req.params.pid);
  try {
    const product = await productManager.getProductById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
