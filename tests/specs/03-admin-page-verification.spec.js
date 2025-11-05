import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login-page.js";
import credentials from "../test-data/credentials.json";
import createuser from "../test-data/createuser.json";
import AdminPage from "../page-objects/admin-page.js"

import { randomLetters } from "../helpers/index.js";
let page, context, loginPage, homePage, adminPage;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  adminPage = new AdminPage(page);
});

test.beforeEach(async () => {
  await loginPage.launchUrl();
  await loginPage.login(credentials.userName, credentials.password);
});
test("Create User Verification", async () => {
  let userName = `${createuser.userName} ${randomLetters(6)}`;
  await adminPage.createUser(userName, createuser.password, createuser.userType);
  await expect(adminPage.$tdata(userName)).toContainText(userName);
  await expect(adminPage.$successalert).toBeVisible();
  await expect(adminPage.$userStatus).toContainText('Active');
  await adminPage.deleteUser()
  await adminPage.deleteUser()
  await expect(adminPage.$deleteAlert).toContainText('User Deleted Successfully');
  
});

test("Delete User Verification", async () => {

await adminPage.deleteUser()
await expect(adminPage.$deleteAlert).toContainText('User Deleted Successfully');
});