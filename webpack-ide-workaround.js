const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources', 'js'),
            '@images': path.resolve(__dirname, 'resources', 'images'),
        },
    },
};
