const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueBtn = '[data-test="continue"]';
    this.finishBtn = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
  }

  async fillCustomerInfo(firstName, lastName, postalCode) {
    await this.fill(this.firstName, firstName);
    await this.fill(this.lastName, lastName);
    await this.fill(this.postalCode, postalCode);
    await this.click(this.continueBtn);
  }

  async finish() {
    await this.click(this.finishBtn);
  }

  async isOrderComplete() {
    return this.isVisible(this.completeHeader);
  }
}

module.exports = CheckoutPage;
