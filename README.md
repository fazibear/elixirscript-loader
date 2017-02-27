# elixirscript webpack loader

## Requirements

- Elixirscript installed

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
  module: {
    rules: [
      {
        test: /\.ex$/,
        exclude: /(node_modules|bower_components)/,
        loader: "elixirscript-loader",
        options: {
          inputFolder: "./app/elixirscript",
          jsModules: [
            ["React", "react"], 
            ["ReactDOM", "react-dom"]
          ]
        }
      }
    ]
  }
}
```

### Options

* `inputFolder`: (required) The path to your elixirscript files
* `jsModules`: (optional) A list of JavaScript modules used

### Code

```js
import Elixir from "path/to/elixirscript/entry/path/app.ex";
Elixir.start(Elixir.App, []);
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
