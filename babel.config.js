const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
    'inline-dotenv',
    ['module-resolver', {
        root: ['./resources/js'],
        alias: {
            '@': './resources/js',
            '@images': './resources/images',
        },
    }],
];

module.exports = {
    presets,
    plugins,
};
