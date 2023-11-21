import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  public get btnLogout() {
    return $("span=Logout");
  }

  public open() {
    return super.open("/");
  }
}

export default new HomePage();
