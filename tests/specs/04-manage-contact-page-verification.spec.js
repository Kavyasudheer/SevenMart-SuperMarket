import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login-page.js";
import credentials from "../test-data/credentials.json";
import ManageContactPage from "../page-objects/manage-contact-page.js";

let page, context, loginPage, manageContactPage;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  manageContactPage = new ManageContactPage(page);
});

test.beforeEach(async () => {
  await loginPage.launchUrl();
  await loginPage.login(credentials.userName, credentials.password);
});
test("Manage Contact Verification", async () => {
  expect(await manageContactPage.getPhone()).not.toBeNull();
  expect(await manageContactPage.getPhone()).toHaveLength(11);
  expect(await manageContactPage.getEmail()).not.toBeNull();
  expect(await manageContactPage.getAddress()).not.toBeNull();
});
