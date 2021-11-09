# Webpack Refresher

Just me remembering how to use webpack.

https://webpack.js.org/concepts/

I'm versioning the dist folder to keep track of Output.

## Setup

```
yarn install
yarn run webpack
# then check the dist folder
```

## Entry and Output

The basic two options of Webpack are Entry and Output.
Entry is the file that comes in and indicates
to Webpack which other files need to be bundled.
Webpack spits out the bundled file to the Output path.

## Mode

In development mode, Webpack outputs a big bundled file
with lots of information for debudding.
In production mode, it minifies JS as much as possible.

## Loaders

Webpack supports JavaScript and JSON files from scratch.
To import other types of files from the Entry file,
it needs loaders. For example, you can install raw-loader
to enable importing text from .txt files into JavaScript.

# Plugins

Plugins do special operations like bundle optimization and
asset management. As an example, I used html-webpack-plugin
to inject the JavaScript bundle from the previous commit
into a new HTML file.
