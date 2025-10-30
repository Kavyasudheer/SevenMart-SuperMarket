import credentials from '../test-data/credentials.json'
class Common {
  constructor(page) {
    this.page = page;
    this.$inputField = (name) => page.locator(`//input[@name="${name}"]`);
    this.$button = (text) =>
      page.locator(`//button[contains(text(),"${text}")]`);
    this.$link=(text) =>
      page.locator(`//a[contains(text(),"${text}")]`);
    this.$dropdownButton = (name) => page.locator(`//select[@name="${name}"]`);
    this.$tdata = (text) =>
      page.locator(`//td[contains(text(),"${text}")]`);
    this.$linkButton = (text) =>
      page.locator(`//a[contains(text(),"${text}")]`);
    this.$logo= (alt) => page.locator(`//img[@alt="${alt}"]`);
  }
  async launchUrl(){
    await this.page.goto(credentials.url)
  }
    async clickOnLink(linkName){
    await this.$link(linkName).click()
  }
}
module.exports = Common;

