describe("Skip", () => {
  it("should skip the test", async () => {
    const shouldSkip = false;
    await expect(shouldSkip).toBeFalsy();
  });

  it.only("should run only this the test", async () => {
    const shouldSkip = true;
    await expect(shouldSkip).toBeTruthy();
  });
});

describe("Skip suite", () => {
  it("should skip the test", async () => {
    const shouldSkip = false;
    await expect(shouldSkip).toBeFalsy();
  });

  it("should skip the test too", async () => {
    const shouldSkip = true;
    await expect(shouldSkip).toBeTruthy();
  });
});
