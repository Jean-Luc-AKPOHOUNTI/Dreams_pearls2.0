/**
 * Store Pinia pour la gestion du panier d'achat
 * Ce store gère l'état global du panier, incluant les articles, les quantités et les calculs
 */

// Import de la fonction defineStore de Pinia pour créer un store
import { defineStore } from 'pinia'

// Création du store 'cart' pour gérer l'état du panier
export const useCartStore = defineStore('cart', {
  /**
   * État initial du store
   * Contient les données de base du panier
   */
  state: () => ({
    items: [], // Liste des articles dans le panier
    total: 0   // Total du panier
  }),

  /**
   * Getters pour calculer des valeurs dérivées de l'état
   * Ces fonctions sont réactives et se mettent à jour automatiquement
   */
  getters: {
    /**
     * Calcule le total du panier
     * @param {Object} state - L'état actuel du store
     * @returns {number} Le montant total du panier
     * @example
     * // Si le panier contient 2 articles à 100€ et 1 article à 50€
     * cartTotal // retourne 250
     */
    cartTotal: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    /**
     * Calcule le nombre total d'articles dans le panier
     * @param {Object} state - L'état actuel du store
     * @returns {number} Le nombre total d'articles (somme des quantités)
     * @example
     * // Si le panier contient 2 articles avec quantité 3 et 1 article avec quantité 2
     * cartItemsCount // retourne 5
     */
    cartItemsCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0)
    }
  },

  /**
   * Actions pour modifier l'état du store
   * Ces méthodes permettent d'interagir avec le panier
   */
  actions: {
    /**
     * Ajoute un produit au panier ou incrémente sa quantité
     * @param {Object} product - Le produit à ajouter
     * @param {string} product.name - Le nom unique du produit
     * @param {number} product.price - Le prix du produit
     * @param {string} product.src - L'URL de l'image du produit
     * @example
     * addToCart({ name: 'Collier1', price: 100, src: 'image.jpg' })
     * // Si le produit n'existe pas, il est ajouté avec quantité 1
     * // S'il existe déjà, sa quantité est incrémentée
     */
    addToCart(product) {
      const existingItem = this.items.find(item => item.name === product.name)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }
    },

    /**
     * Supprime un produit du panier
     * @param {string} productName - Le nom du produit à supprimer
     * @returns {boolean} true si le produit a été supprimé, false sinon
     * @example
     * removeFromCart('Collier1')
     * // Supprime complètement le produit du panier, quelle que soit sa quantité
     */
    removeFromCart(productName) {
      const index = this.items.findIndex(item => item.name === productName)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    /**
     * Met à jour la quantité d'un produit dans le panier
     * @param {string} productName - Le nom du produit à mettre à jour
     * @param {number} quantity - La nouvelle quantité (doit être > 0)
     * @returns {boolean} true si la quantité a été mise à jour, false sinon
     * @throws {Error} Si la quantité est négative ou nulle
     * @example
     * updateQuantity('Collier1', 3)
     * // Met la quantité du produit à 3
     */
    updateQuantity(productName, quantity) {
      const item = this.items.find(item => item.name === productName)
      if (item) {
        item.quantity = quantity
      }
    },

    /**
     * Vide complètement le panier
     * Réinitialise la liste des articles et le total
     * @returns {void}
     * @example
     * clearCart()
     * // Supprime tous les articles du panier
     */
    clearCart() {
      this.items = []
      this.total = 0
    }
  }
}) 