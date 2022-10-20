describe("Test about <DemoComponent/>", () => {
    test("This test is always pass", () => {
        // 1. Initialize
        const message1 = "Hello World";

        // 2. Stimulus
        const message2 = message1.trim();

        // 3. Observe
        expect(message1).toBe(message2);
    });
});
