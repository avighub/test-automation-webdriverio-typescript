import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";

describe("Login", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("Katharina_Bernier", "s3cret");

    expect(await HomePage.isLogoutButtonDisplayed()).toBeTrue();
  });

  it("should not be able to login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("invalid_username", "invalid_password");

    expect(await LoginPage.isInvalidCredentialsErrorDisplayed()).toBeTrue();
  });
});
