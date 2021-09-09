const presets = ['next/babel'];
const plugins = [];

console.log(process.env.ENV);

if (process.env['ENV'] === 'local') {
  plugins.push([
    'styled-components',
    {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  ]);
}

module.exports = function (api) {
  api.cache(true);

  return {
    presets,
    plugins,
  };
};
