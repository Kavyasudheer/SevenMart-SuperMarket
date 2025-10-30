import Common from "./common.js";

class LoginPage extends Common {
  constructor(page) {
    super(page);
    this.page = page;
    this.$logoButton = page.locator('//b[contains(text(),"7rmart supermarket")]');
    this.$rememberMeButton = page.locator('//label[contains(text(),"Remember Me")]');
    
  }
  async enterUserName(userName) {
    await this.$inputField("username").fill(userName);
  }
  async enterPassword(password) {
    await this.$inputField("password").fill(password);
  }
  async clickOnSignInButton() {
    await this.$button("Sign In").click();
  }
  async login(userName, password) {
    await this.enterUserName(userName);
    await this.enterPassword(password);
    await this.$rememberMeButton.click()
    await this.clickOnSignInButton();
  }
  async logoText(){
    return await this.$logoButton.innerText()
  }

async clickOnRememberMe(){
    await this.$inputField("remember_me").check()
}

}
module.exports = LoginPage;
