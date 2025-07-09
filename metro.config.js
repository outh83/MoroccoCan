const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configure resolver to handle TypeScript files properly
config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'json'];
config.resolver.resolverMainFields = ['react-native', 'browser', 'module', 'main'];

// Enable TypeScript support in transformer
config.transformer.babelTransformerPath = require.resolve('metro-react-native-babel-transformer');

module.exports = config;