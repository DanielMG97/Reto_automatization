const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

Given('I open the Sauce Demo login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('I login with {string} and {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should see the products page', async function () {
  this.inventoryPage = new InventoryPage(this.page);
  const visible = await this.inventoryPage.isVisible();
  expect(visible).to.be.true;
});

Then('I should see a locked out error message', async function () {
  const error = await this.loginPage.getError();
  expect(error).to.contain('locked out');
});
