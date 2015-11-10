# elixirscript webpack loader

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
  module: {
    loaders: [
      { test: /\.exjs$/, loader: "babel?presets[]=es2015!elixirscript" },
      { test: /\.js$/, loader: "babel?presets[]=es2015" }
    ]
  }
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
