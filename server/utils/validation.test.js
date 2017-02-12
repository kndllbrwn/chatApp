const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', () =>{
    it('should reject non-string values', () => {
        res = isRealString(12);

        expect(res).toBe(false);
    });

    it('should reject strings with only spaces', () => {
        res = isRealString('   ');

        expect(res).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        res = isRealString(' fdfd');

        expect(res).toBe(true);
    });
});