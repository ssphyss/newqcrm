const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );
    config = rewireLess.withLoaderOptions({
        loader:require.resolve('less-loader'),
        options: {
            modules: false,
            modifyVars: {
                "@primary-color": "#1DA57A", 
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
                },
            javascriptEnabled: true,
        }
      })(config, env);
    return config;
};