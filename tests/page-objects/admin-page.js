import Common from "./common.js";

class AdminPage extends Common {
  constructor(page) {
    super(page);
    this.page = page;
    this.$successalert = page.locator(
      '//div[@class="alert alert-success alert-dismissible"]'
    );
    this.$moreInfoButton = page.locator('(//a[@class="small-box-footer"])[1]');
    this.$savePassword = page.locator('(//span[@class="badge bg-success"])[1]');
    this.$userStatus = page.locator("(//td//a//span)[1]");
    this.$delete = page.locator('(//i[@class="fas fa-trash-alt"])[1]');
    this.$deleteAlert = page.locator(
      '//div[@class="alert alert-success alert-dismissible"]'
    );
  }

  async createUser(userName, password, userType) {
    await this.$moreInfoButton.click();
    await this.$linkButton(" New").click();
    await this.$inputField("username").fill(userName);
    await this.$inputField("password").fill(password);
    await this.$dropdownButton("user_type").selectOption(userType);
    await this.$button("Save").click();
  }
  async deleteUser(page) {
    
    
    await this.page.once("dialog", async (dialog) => {
      await dialog.accept(); //accepts the alert button
    });
    await this.$delete.click();
  }
}
module.exports = AdminPage;
