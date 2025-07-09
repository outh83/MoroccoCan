const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configure resolver to handle TypeScript files properly
config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'json'];
config.resolver.resolverMainFields = ['react-native', 'browser', 'module', 'main'];
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ['require', 'import', 'react-native', 'browser', 'default'];

// Enable TypeScript support in transformer
config.transformer.babelTransformerPath = require.resolve('metro-react-native-babel-transformer');

module.exports = config;