/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// @ts-ignore
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("./customTransformer.js")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg" && ext!=="scss"),
      sourceExts: [...sourceExts, "svg", "scss", "sass"]
    }
  };
})();