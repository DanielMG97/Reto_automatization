const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

Given('I am logged in as {string}', async function (username) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
  await this.loginPage.login(username, 'secret_sauce');
  this.inventoryPage = new InventoryPage(this.page);
  // espera pequeña para garantizar carga
  await this.page.waitForLoadState('networkidle');
});

When('I add the product {string} to the cart', async function (productName) {
  await this.inventoryPage.addProductToCart(productName);
});

Then('the cart should contain {int} item', async function (expected) {
  const count = await this.inventoryPage.getCartCount();
  expect(count).to.equal(expected);
});

Then('the cart page should show {string}', async function (productName) {
  const cartPage = new CartPage(this.page);
  await this.inventoryPage.goToCart();
  const items = await cartPage.getCartItems();
  expect(items).to.include(productName);
});
