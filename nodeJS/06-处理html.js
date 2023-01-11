const fs = require('fs');
const path = require('path');

const regCss = ''

fs.readFile(path.join(__dirname, './file/test.html'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err);
    }
    let cssStr = dataStr.match(regCss)
})