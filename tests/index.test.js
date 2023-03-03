const index = require('./index');

//Check character length

describe('Checking to make sure character length is less than 3 characters', () => {
    it('should throw an error if character length is greater than 3', () => {
        const characters = new Characters();
        const err = new Error (err);
        expect(characters.length).toBeLessThan(3);
    })
})