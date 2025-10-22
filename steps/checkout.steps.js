const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

Given('I have added {string} to the cart', async function (productName) {
 
  if (!this.inventoryPage) {
    this.inventoryPage = new InventoryPage(this.page);
  }
  await this.inventoryPage.addProductToCart(productName);
});

When('I proceed to checkout with firstName {string} lastName {string} postalCode {string}', async function (firstName, lastName, postalCode) {
  const cartPage = new CartPage(this.page);
  await this.inventoryPage.goToCart();
  await cartPage.proceedToCheckout();
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.fillCustomerInfo(firstName, lastName, postalCode);
  await this.checkoutPage.finish();
});

Then('I should see the order confirmation page', async function () {
  const isComplete = await this.checkoutPage.isOrderComplete();
  expect(isComplete).to.be.true;
});
