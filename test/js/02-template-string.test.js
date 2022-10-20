import { getGreeting } from "../../src/js/02-template-string";

describe("Test in 02-template-string", () => {
    test('should get a greet with "Hi Alejandro"', () => {
        
        const name = "Alejandro";
        const message = getGreeting(name)

        expect( message ).toBe(`Hi ${name}`)
    });
});
