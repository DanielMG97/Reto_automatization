const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = '.cart_list .inventory_item_name';
    this.checkoutBtn = '[data-test="checkout"]';
  }

  async getCartItems() {
    return this.page.$$eval(this.cartItems, items => items.map(i => i.textContent.trim()));
  }

  async proceedToCheckout() {
    await this.click(this.checkoutBtn);
  }
}

module.exports = CartPage;
