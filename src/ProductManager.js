class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    addProduct(product) {
      const newProduct = {
        id: this.currentId,
        ...product
      };
      this.products.push(newProduct);
      this.currentId++;
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    updateProduct(id, updatedProduct) {
      const productIndex = this.products.findIndex(p => p.id === id);
      if (productIndex !== -1) {
        this.products[productIndex] = {
          id,
          ...updatedProduct
        };
        console.log("Producto actualizado:", this.products[productIndex]);
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    deleteProduct(id) {
      const productIndex = this.products.findIndex(p => p.id === id);
      if (productIndex !== -1) {
        const deletedProduct = this.products.splice(productIndex, 1)[0];
        console.log("Producto eliminado:", deletedProduct);
      } else {
        console.log("Producto no encontrado.");
      }
    }
  }
  
  module.exports = ProductManager;
  