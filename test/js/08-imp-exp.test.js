import { getHeroById, getHerosByOwner } from "../../src/js/08-imp-exp";

describe("Test in 08-imp-exp", () => {
    test("getHeroById should return a hero by ID", () => {
        const id = 1;
        const hero = getHeroById(id);

        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC",
        });
    });

    test("getHeroById should return undefined if hero does not exist", () => {
        const id = 10;
        const hero = getHeroById(id);

        // expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
    });

    test("getHeroesByOwner should return an array with DC heroes", () => {
        const owner = "DC";
        const heroes = getHerosByOwner(owner);

        expect(heroes).toEqual(expect.any(Array));
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: "Batman", owner: "DC" },
            { id: 3, name: "Superman", owner: "DC" },
            { id: 4, name: "Flash", owner: "DC" },
        ]);
    });

    test("getHeroesByOwner should return an array with Marvel heroes", () => {
        const owner = "Marvel";
        const heroes = getHerosByOwner(owner);

        expect(heroes).toEqual(expect.any(Array));
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: "Spiderman", owner: "Marvel"},
            { id: 5, name: "Wolverine", owner: "Marvel"},
        ]);
    });
});
