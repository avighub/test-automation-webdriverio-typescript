import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  private get inputUsername() {
    return $('[name="username"]');
  }

  private get inputPassword() {
    return $("[name=password]");
  }

  private get btnSubmit() {
    return $("[data-test=signin-submit]");
  }

  private get msgInvalidCredentials() {
    return $('div=Username or password is invalid1');
  }

  public open() {
    return super.open("/");
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public async isInvalidCredentialsErrorDisplayed() {
    return this.msgInvalidCredentials.isDisplayed();
  }
}

export default new LoginPage();
