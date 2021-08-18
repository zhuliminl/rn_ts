/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => {
      console.log('saul ########', this)
      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      };
    },
  },
};
