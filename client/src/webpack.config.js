module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/es2015'],
          plugins: ['@babel/proposal-class-properties']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
