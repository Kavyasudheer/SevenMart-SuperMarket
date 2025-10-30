import Common from "./common.js";

class ManageContactPage extends Common {
  constructor(page) {
    super(page);
    this.page = page;
      this.$manageContact = page.locator(
      '(//p[contains(text(),"Manage Contact")])[1]'
    ); 
    this.$phone = page.locator('(//td)[1]');
    this.$email = page.locator('(//td)[2]');
    this.$address = page.locator('(//td)[3]');;
  }
   async manageContact() {
    await this.$manageContact.click();

  }
  async getPhone() {
    await this.manageContact()
    return await this.$phone.innerText();

  }
  async getEmail() {
    await this.manageContact()
    return await this.$email.innerText();

  }
  async getAddress() {
    await this.manageContact()
    return await this.$address.innerText();

  }
 
}
module.exports = ManageContactPage;
