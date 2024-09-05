const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

console.log('DEV', devMode);
const optimization = () => {
  const config = {
    runtimeChunk: 'single',
  };

  if (!devMode) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin(),
    ];
  }
  return config;
};

const babelOptions = (preset) => {
  const babelOption = {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  };
  if (preset) {
    babelOption.presets.push(preset);
  }
  return babelOption;
};

const isLoader = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions('@babel/preset-react'),
    },
  ];
  return loaders;
};

const filename = (ext) => (devMode ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.tsx',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: optimization(),
  devServer: {
    port: 5000,
    watchFiles: path.resolve(__dirname, 'src'),
  },
  // target: 'web',
  devtool: devMode ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: !devMode,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.icon'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
      // chunkFilename: `${'[id]'}.${filename('css')}`,
    }),
    new ESLintWebpackPlugin(
      {
        extensions: ['.js', '.mjs', '.jsx', 'tsx'],
        exclude: 'node_modules',
        emitWarning: true,
        failOnError: true,
        failOnWarning: false,
        quiet: true,
        emitError: true,
        fix: false,
      },
    ),
    new ForkTsCheckerWebpackPlugin(
      {
        async: false,
        typescript: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
      },
    ),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use:
          {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-typescript'),
          },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(?:|gif|png|jpg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `img/${filename('[ext]')}`,
        },
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
};
