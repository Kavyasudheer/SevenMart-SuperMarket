import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login-page.js";
import credentials from "../test-data/credentials.json";

let page, context, loginPage;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
});

test.beforeEach(async () => {
  await loginPage.launchUrl();
});

test("Verify Login Logo", async () => {
  await expect(loginPage.$logoButton).toBeVisible();
  expect(await loginPage.logoText()).toContain("7rmart supermarket");
  await expect(loginPage.$inputField("remember_me")).toBeChecked();
});

test("Verify Login Functionality", async () => {
  await loginPage.login(credentials.userName, credentials.password);
  await expect(loginPage.$linkButton(" Admin")).toBeVisible();
  
});
