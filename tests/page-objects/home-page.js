import Common from "./common.js";

class HomePage extends Common {
  constructor(page) {
    super(page);
    this.page = page;
    this.$profileName = page.locator('//a[@class="d-block"]');
    this.$adminUserNumber = page.locator('(//div[@class="inner"]//h3)[1]');
  
    this.$manageContactNumber = page.locator('(//div[@class="inner"]//h3)[3]');
    this.$adminlogotext = page.locator(
      '//span[contains(text(),"7rmart supermarket")]'
    );
   
  }
  async getProfileName() {
    return await this.$profileName.textContent();
  }

  async adminlogo() {
    return await this.$adminlogotext.textContent();
  }
  async getAdminNumbers() {
    let adminnos = await this.$adminUserNumber.innerText();
    return Number(adminnos);
  }
  async getManageContactNumbers() {
    let contactnos = await this.$manageContactNumber.innerText();
    return Number(contactnos);
  }
}
module.exports = HomePage;
