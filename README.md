### WEB Test Automation framework with WebDriverIO and Typescript
#### Tool Sets
- WEB Automation: WebDriverIO
- Test Runner: Mocha
- Language: Typescript
- Design Patterns: Page Object Model
- Reporting: Allure
  
#### How to Run Tests
- To run all tests in local : ```npm run test:local```
- To run all tests in dev : ```npm run test:dev```
- To Run specific spec file : ```npm wdio run --spec example.e2e.ts```
- To Run specific suite : ```npm wdio run  --suite exampleSuiteName```

#### How to check ESLint Rules
- run ```npm run lint```
- Current enforced rules
  - ```expect()``` calls must be prefixed with an ```await```
  - Don't allow ```browser.debug()``` statements
  - Don't allow ```browser.pause()``` statements
- If you want to enforce more stricter linting, use ```.eslintrc-standard-with-typescript.cjs```

#### Best practices
- While making changes to wdio.*.conf.ts , ensure to sync changes to all .conf.ts files to align the configurations across all environments
- Add examples inside ./examples directory if any new feature is added, so it will be easier for others to follow along
- Update Best practices section in README if you feel the information is obsolete or anything new has been introduced/reduced
- Add TODOs if you have any ideas to improve the framework and create an issue in GitHub for the same to track
- Use ```await browser.reloadSession()``` when you need a fresh browser session for each test. <br> Ideally this is a the most recommended approach but WDIO uses same browser session per spec file.

#### TODOs
- [ ] Add Best practices for writing tests and page objects
- [ ] Add Allure History report with github pages
