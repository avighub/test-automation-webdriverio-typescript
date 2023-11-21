import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  public get inputUsername() {
    return $('[name="username"]');
  }

  public get inputPassword() {
    return $("[name=password]");
  }

  public get btnSubmit() {
    return $("[data-test=signin-submit]");
  }

  public get msgInvalidCredentials() {
    return $("div=Username or password is invalid");
  }

  public open() {
    return super.open("/");
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
