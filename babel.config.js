module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ['module-resolver', {
            root: ['./resources/js'],
            alias: {
                '@': './resources/js',
            },
        }],
    ],
};
