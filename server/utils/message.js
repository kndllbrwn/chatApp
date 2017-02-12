const moment = require('moment');

var generateMessage = (from, text) => {
    obj = {
        from,
        text,
        createdAt: moment().valueOf()
    };
    console.log(obj);
    return obj;
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = {generateMessage, generateLocationMessage};