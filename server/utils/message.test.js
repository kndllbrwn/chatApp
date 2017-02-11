var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var name = 'ken';
        var text = 'Hello world';
        
        var res = generateMessage(name, text);

        expect(res.from).toBe(name);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');
    });
});