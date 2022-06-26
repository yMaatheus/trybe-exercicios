const fs = require('fs');

const writeFile = (fileName, content) => {
    if (!fileName) {
        throw new Error('file is undefined');
    }
    if (!content) {
        throw new Error('content is undefined');
    }
    if (typeof fileName !== 'string') {
        throw new Error('file is invalid');
    }
    fs.writeFileSync(fileName, content);
    return 'ok';
}

module.exports = writeFile;