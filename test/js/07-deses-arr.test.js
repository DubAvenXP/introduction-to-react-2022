import { getArray } from "../../src/js/07-deses-arr";

describe("Test in 07-deses-arr", () => {
    test("should return a string and number", () => {
        const myArray = getArray();

        // expect(Array.isArray(myArray)).toBe(true);
        expect(myArray).toEqual(expect.any(Array));
        
        const [letters, numbers] = myArray;

        expect(letters).toBe("ABC");
        expect(numbers).toBe(123);

        expect(typeof letters).toBe("string");
        expect(typeof numbers).toBe("number");

        expect(letters).toEqual(expect.any(String))
    });
});
