var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

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

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        var name = 'ken';
        var latitude = '123';
        var longitude = '456';        
        
        var res = generateLocationMessage(name, latitude, longitude);

        expect(res.from).toBe(name);
        expect(res.url).toBe('https://www.google.com/maps?q=123,456');
    });
});