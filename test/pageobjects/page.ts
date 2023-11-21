import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  public open(path: string) {
    return browser.url(`${path}`);
  }

  public getUrl() {
    return browser.getUrl();
  }
}
