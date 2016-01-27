module.exports = {
   entry: getEntrySources(['./src/js/entry.jsx']),
   output: {
      filename: 'build/bundle.js'
   },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
   devtool: 'eval',
   preLoaders: [
      {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'source-map'
      }
   ],
   loaders: [
      {
         test: /\.(jpe?g|png|gif|svg)$/i,
         loaders: [
            'url?limit=8192',
            'img'
         ]
      },
      {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loaders: [
            'react-hot',
            'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
         ]
      }
   ]
}

function getEntrySources(sources) {
   if (process.env.NODE_ENV !== 'production') {
      sources.push('webpack-dev-server/client?http://localhost:8080');
      sources.push('webpack/hot/only-dev-server');
   }

   return sources;
}
