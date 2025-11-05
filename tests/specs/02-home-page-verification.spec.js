import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login-page.js";
import credentials from "../test-data/credentials.json";
import HomePage from "../page-objects/home-page.js";
let page, context, loginPage, homePage;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.launchUrl();
  await loginPage.login(credentials.userName, credentials.password);
  await context.storageState({ path: "state.json" });
});

test.beforeEach(async ({ browser }) => {
  context = await browser.newContext({ storageState: "state.json" });
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  
});

test("HomePage Verification", async () => {
  await loginPage.launchUrl();
  expect(await homePage.getProfileName()).toContain("Admin");
  await expect(homePage.$profileName).toBeVisible();
  await expect(homePage.$logo("AdminLTE Logo")).toBeVisible();
  expect(await homePage.adminlogo()).toContain("7rmart supermarket");
});

test(" regression Admin Users Count Verification", async () => {
  await loginPage.launchUrl();
  await expect(homePage.$adminUserNumber).toBeVisible();
  expect(await homePage.getAdminNumbers()).not.toBeNull();
  expect(await homePage.getAdminNumbers()).toBeGreaterThanOrEqual(11000);
});

test("regression Manage Contact Count Verification", async () => {
  await loginPage.launchUrl();
  console.log("print")
  await expect(homePage.$manageContactNumber).toBeVisible();
  expect(await homePage.getManageContactNumbers()).not.toBeNull();
  expect(await homePage.getManageContactNumbers()).toBeGreaterThanOrEqual(1);
});
