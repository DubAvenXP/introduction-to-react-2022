import { getActiveUser, getUser } from "../../src/js/05-functions";

describe('Test in 05-functions', () => {
    test('getUser should return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // When we want to compare objects we can use toEqual or toStrictEqual
        // expect(testUser).toStrictEqual(user);
        expect(testUser).toEqual(user);
    })

    test('getActiveUser should return an object', () => {
        const testUser = {
            uid: 'ABC567',
            username: 'Alejandro'
        }

        const user = getActiveUser(testUser.username);

        expect(testUser).toEqual(user);
    })
})