const presets = ['next/babel'];
const plugins = [
  [
    'styled-components',
    {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  ],
];

module.exports = function (api) {
  api.cache(true);

  return {
    presets,
    plugins,
  };
};
