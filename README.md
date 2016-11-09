# elixirscript webpack loader

## Requirements

- Erlang installed

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
  module: {
    loaders: [
      { test: /\.exjs$/, exclude: /(node_modules|bower_components)/, loader: "babel?presets[]=es2015!elixirscript" },
      { test: /\.js$/,   exclude: /(node_modules|bower_components)/, loader: "babel?presets[]=es2015" }
    ]
  }
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
