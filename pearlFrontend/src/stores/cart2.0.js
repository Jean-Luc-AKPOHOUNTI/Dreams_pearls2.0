/**
 * Store Pinia pour la gestion du panier d'achat (Version Composition API)
 * Ce store gère l'état global du panier, incluant les articles, les quantités et les calculs
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // ===== ÉTAT (STATE) =====
  /**
   * Liste des articles dans le panier
   * Chaque article contient :
   * - name: string (nom unique du produit)
   * - price: number (prix unitaire)
   * - quantity: number (quantité dans le panier)
   * - src: string (URL de l'image du produit)
   */
  const items = ref([])

  /**
   * Total général du panier
   * Note: Cette valeur est redondante car nous avons cartTotal
   * mais elle est maintenue pour la compatibilité
   */
  const total = ref(0)

  // ===== (COMPUTED) =====
  /**
   * Calcule le montant total du panier
   * @returns {number} La somme de (prix × quantité) pour chaque article
   * @example
   * // Si le panier contient :
   * // - 2 articles à 100€
   * // - 1 article à 50€
   * // cartTotal retournera 250
   */
  const cartTotal = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  /**
   * Calcule le nombre total d'articles dans le panier
   * @returns {number} La somme des quantités de tous les articles
   * @example
   * // Si le panier contient :
   * // - 2 articles avec quantité 3
   * // - 1 article avec quantité 2
   * // cartItemsCount retournera 5
   */
  const cartItemsCount = computed(() => {
    return items.value.reduce((count, item) => count + item.quantity, 0)
  })

  // ===== ACTIONS =====
  /**
   * Ajoute un produit au panier ou incrémente sa quantité
   * @param {Object} product - Le produit à ajouter
   * @param {string} product.name - Nom unique du produit
   * @param {number} product.price - Prix unitaire du produit
   * @param {string} product.src - URL de l'image du produit
   * @example
   * addToCart({
   *   name: 'Collier Or',
   *   price: 100,
   *   src: '/images/collier.jpg'
   * })
   */
  function addToCart(product) {
    // 1. Recherche dans le tableau items.value
    const existingItem = items.value.find(item => item.name === product.name)
    
    if (existingItem) {
        // 2a. Si le produit existe : incrémentation
        existingItem.quantity++
    } else {
        // 2b. Si le produit n'existe pas : création
        items.value.push({
            ...product,  // Copie toutes les propriétés (name, price, src)
            quantity: 1  // Initialise la quantité à 1
        })
    }
  }

  /**
   * Supprime complètement un produit du panier
   * @param {string} productName - Le nom du produit à supprimer
   * @returns {boolean} true si le produit a été supprimé, false sinon
   * @example
   * removeFromCart('Collier Or')
   * // Supprime le produit 'Collier Or' du panier, quelle que soit sa quantité
   */
  function removeFromCart(productName) {
    // 1. Recherche de l'index dans le tableau
    const index = items.value.findIndex(item => item.name === productName)
    if (index > -1) {
        // 2. Suppression à l'index trouvé
        items.value.splice(index, 1)
    }
  }

  /**
   * Met à jour la quantité d'un produit dans le panier
   * @param {string} productName - Le nom du produit à mettre à jour
   * @param {number} quantity - La nouvelle quantité (doit être > 0)
   * @returns {boolean} true si la quantité a été mise à jour, false sinon
   * @throws {Error} Si la quantité est négative ou nulle
   * @example
   * updateQuantity('Collier Or', 3)
   * // Met la quantité du 'Collier Or' à 3
   */
  function updateQuantity(productName, quantity) {
    // 1. Validation de la quantité
    if (quantity <= 0) {
        throw new Error('La quantité doit être supérieure à 0')
    }

    // 2. Recherche du produit
    const item = items.value.find(item => item.name === productName)
    if (item) {
        // 3. Mise à jour de la quantité
        item.quantity = quantity
    }
  }

  /**
   * Vide complètement le panier
   * Réinitialise la liste des articles et le total
   * @returns {void}
   * @example
   * clearCart()
   * // Supprime tous les articles du panier
   */
  function clearCart() {
    // 1. Réinitialisation du tableau
    items.value = []
    // 2. Réinitialisation du total
    total.value = 0
  }

  // Retourne toutes les propriétés et méthodes du store
  return {
    // État
    items,
    total,
    // Getters
    cartTotal,
    cartItemsCount,
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}) 