# Webpack Refresher

A refresher on how to use webpack.

https://webpack.js.org/concepts/

I'm versioning the dist folder to keep track of the output.

## Setup

```
npm install
npx webpack
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

## Plugins

Plugins do special operations like bundle optimization and
asset management. As an example, I used html-webpack-plugin
to inject the JavaScript bundle from the previous commit
into a new HTML file.

## Tree Shaking

Webpack detects and removes dead code from the bundle.
As an example, `index.js` imports all functions from `math.js`
but uses just the `add` function. After bundling the files,
the output file doesn't include any of the unused functions.
In fact, it's clever enough to include just the *result* of
the `add` function!

## Double Imports

Even if a file is imported by two or more files, Webpack will
bundle that file just once. In other words, the code in that
file won't execute multiple times.
