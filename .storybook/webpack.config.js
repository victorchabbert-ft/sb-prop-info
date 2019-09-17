const path = require("path")

/*
 * This config works because we are ejected from CRA.
 *
 * If we're not ejected, we would be asking for dependencies that are not in the project package.json (thus hidden by a dependency)
 * making this config prone to breakage. We do not want this!
 */
module.exports = ({config}) => {
    console.log(config)
    /*
     * Rule copied from the ejected create-react-app webpack config.
     * It should probably be mutualized.
     */
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),

                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                ],
                // Not my comment :)
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                cacheCompression: false,
                compact: false,
              },
            },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              // This option is important since the webpack config is not at the root of the project.
              // (it's in the .webpack/ folder)
              tsconfigPath: path.join(__dirname, "../tsconfig.json"),
            },
          }
        ],
    });


  // Don't forget to import .ts* files ;)
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
