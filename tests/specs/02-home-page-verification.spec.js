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
});

test.beforeEach(async () => {
  await loginPage.launchUrl();
  await loginPage.login(credentials.userName, credentials.password);
});

test("HomePage Verification", async () => {
  expect(await homePage.getProfileName()).toContain("Admin");
  await expect(homePage.$profileName).toBeVisible();
  await expect(homePage.$logo("AdminLTE Logo")).toBeVisible();
  expect(await homePage.adminlogo()).toContain("7rmart supermarket");
});

test("Admin Users Count Verification", async () => {
  await expect(homePage.$adminUserNumber).toBeVisible();
  expect(await homePage.getAdminNumbers()).not.toBeNull();
  expect(await homePage.getAdminNumbers()).toBeGreaterThanOrEqual(11000);
});

test("Manage Contact Count Verification", async () => {
  await expect(homePage.$manageContactNumber).toBeVisible();
  expect(await homePage.getManageContactNumbers()).not.toBeNull();
  expect(await homePage.getManageContactNumbers()).toBeGreaterThanOrEqual(1);
});
