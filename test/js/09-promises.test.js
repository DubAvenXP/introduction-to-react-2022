import { getHeroByIdAsync } from "../../src/js/09-promises";

describe("Test in 09-promises", () => {
    test("getHeroByIdAsync should return an async hero", (done) => {
        const id = 1;
        getHeroByIdAsync(id).then((hero) => {
            
            expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
            done();

        });
    });

    test("getHeroByIdAsync should return an error if the hero does not exist", (done) => {
        const id = 10;
        getHeroByIdAsync(id).then((hero) => {
            expect(hero).toBeFalsy();
            done();
        }).catch((error) => {
            expect(error).toBe("Hero not found");
            done();
        });
    });
});
