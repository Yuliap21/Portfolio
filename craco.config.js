const CopyWebpackPlugin = require ("copy-webpack-plugin");
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
  plugins: {
    add: [
      new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/pdfjs-dist/cmaps/', to: 'cmaps/' },
      ],
    }),
    ]
  }
}
}
