import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";

describe("Login", () => {
  beforeEach(async () => {
    await browser.reloadSession(); // Because WebDriverIO by default does uses same browser session per spec file
    await LoginPage.open();
  });
  it("should login with valid credentials", async () => {
    // await LoginPage.open();

    await LoginPage.login("Katharina_Bernier", "s3cret");

    await expect(HomePage.btnLogout).toBeDisplayed();
  });

  it("should not be able to login with valid credentials", async () => {
    // await LoginPage.open();

    await LoginPage.login("invalid_username", "invalid_password");

    await expect(LoginPage.msgInvalidCredentials).toBeDisplayed();
  });
});
