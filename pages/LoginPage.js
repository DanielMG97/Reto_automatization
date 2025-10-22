const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://www.saucedemo.com/';
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.errorSelector = '[data-test="error"]';
  }

  async open() {
    await this.navigate(this.url);
  }

  async login(user, pass) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginBtn);
  }

  async getError() {
    return this.textContent(this.errorSelector);
  }
}

module.exports = LoginPage;
