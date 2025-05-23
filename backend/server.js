const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Import des routes
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API Dream Pearl fonctionne !');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 