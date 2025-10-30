import Common from "./common.js";

class AdminPage extends Common {
  constructor(page) {
    super(page);
    this.page = page;
    this.$successalert=page.locator('//div[@class="alert alert-success alert-dismissible"]');
    this.$moreInfoButton = page.locator('(//a[@class="small-box-footer"])[1]');

    }

  async createUser(userName,password,userType){
    await this.$moreInfoButton.click();
    await this.$linkButton(" New").click()
    await this.$inputField("username").fill(userName);
    await this.$inputField("password").fill(password);
    await this.$dropdownButton("user_type").selectOption(userType);
    await this.$button("Save").click()

  }
  
}
module.exports = AdminPage;
