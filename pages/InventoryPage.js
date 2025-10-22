const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryList = '.inventory_list';
    this.addToCartBtn = (productName) =>
      `//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]//button`;
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
  }

  async isVisible() {
    return super.isVisible(this.inventoryList); // ✅ corregido
  }

  async addProductToCart(productName) {
    await this.click(this.addToCartBtn(productName));
  }

  async getCartCount() {
    if (await this.page.$(this.cartBadge) === null) return 0;
    const text = await this.textContent(this.cartBadge);
    return parseInt(text, 10);
  }

  async goToCart() {
    await this.click(this.cartLink);
  }
}

module.exports = InventoryPage;
