const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtenir tous les produits
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM produits');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// Obtenir un produit par ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM produits WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// Créer un produit
router.post('/', async (req, res) => {
  const { nom, quantite } = req.body;
  try {
    const [result] = await db.query('INSERT INTO produits (nom, quantite) VALUES (?, ?)', [nom, quantite]);
    res.status(201).json({ id: result.insertId, nom, quantite });
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de la création', error: err });
  }
});

// Mettre à jour un produit
router.put('/:id', async (req, res) => {
  const { nom, quantite } = req.body;
  try {
    const [result] = await db.query('UPDATE produits SET nom = ?, quantite = ? WHERE id = ?', [nom, quantite, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json({ id: req.params.id, nom, quantite });
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de la modification', error: err });
  }
});

// Supprimer un produit
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM produits WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json({ message: 'Produit supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: err });
  }
});

module.exports = router; 