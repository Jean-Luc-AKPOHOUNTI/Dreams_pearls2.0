const express = require('express');
const router = express.Router();
const db = require('../db');

// Créer un panier (optionnel)
router.post('/', async (req, res) => {
  const { user_id } = req.body;
  try {
    const [result] = await db.query('INSERT INTO cart (user_id) VALUES (?)', [user_id || null]);
    res.status(201).json({ cartId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création du panier', error: err });
  }
});

// Ajouter un produit au panier
router.post('/:cartId/items', async (req, res) => {
  const { produit_id, quantite } = req.body;
  try {
    // Vérifier si l'item existe déjà
    const [rows] = await db.query('SELECT * FROM cart_items WHERE cart_id = ? AND produit_id = ?', [req.params.cartId, produit_id]);
    if (rows.length > 0) {
      // Mettre à jour la quantité
      await db.query('UPDATE cart_items SET quantite = quantite + ? WHERE id = ?', [quantite, rows[0].id]);
      return res.json({ message: 'Quantité mise à jour' });
    }
    await db.query('INSERT INTO cart_items (cart_id, produit_id, quantite) VALUES (?, ?, ?)', [req.params.cartId, produit_id, quantite]);
    res.status(201).json({ message: 'Produit ajouté au panier' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout', error: err });
  }
});

// Voir le contenu du panier
router.get('/:cartId', async (req, res) => {
  try {
    const [items] = await db.query(`
      SELECT ci.id, ci.produit_id, p.nom, p.quantite AS stock, ci.quantite
      FROM cart_items ci
      JOIN produits p ON ci.produit_id = p.id
      WHERE ci.cart_id = ?
    `, [req.params.cartId]);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération du panier', error: err });
  }
});

// Modifier la quantité d'un produit
router.put('/:cartId/items/:itemId', async (req, res) => {
  const { quantite } = req.body;
  try {
    await db.query('UPDATE cart_items SET quantite = ? WHERE id = ? AND cart_id = ?', [quantite, req.params.itemId, req.params.cartId]);
    res.json({ message: 'Quantité modifiée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la modification', error: err });
  }
});

// Supprimer un produit du panier
router.delete('/:cartId/items/:itemId', async (req, res) => {
  try {
    await db.query('DELETE FROM cart_items WHERE id = ? AND cart_id = ?', [req.params.itemId, req.params.cartId]);
    res.json({ message: 'Produit supprimé du panier' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: err });
  }
});

// Vider le panier
router.delete('/:cartId', async (req, res) => {
  try {
    await db.query('DELETE FROM cart_items WHERE cart_id = ?', [req.params.cartId]);
    res.json({ message: 'Panier vidé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors du vidage', error: err });
  }
});

module.exports = router; 