class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  async textContent(selector) {
    return this.page.textContent(selector);
  }

  async isVisible(selector) {
    return this.page.isVisible(selector);
  }
}

module.exports = BasePage;
