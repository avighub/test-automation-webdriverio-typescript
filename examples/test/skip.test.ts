describe("Skip", () => {
  it("should skip the test", async () => {
    const shouldSkip = false;
    await expect(shouldSkip).toBeFalse();
  });

  fit("should run only this the test", async () => {
    const shouldSkip = true;
    await expect(shouldSkip).toBeTrue();
  });
});

fdescribe("Skip suite", () => {
  it("should skip the test", async () => {
    const shouldSkip = false;
    await expect(shouldSkip).toBeFalse();
  });

  it("should skip the test too", async () => {
    const shouldSkip = true;
    await expect(shouldSkip).toBeTrue();
  });
});
