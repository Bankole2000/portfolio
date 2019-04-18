# Simple Responsive Portfolio

## Issues

Compiling `.scss` files with `node-sass` using the following script in `package.json`

```json
"scripts": {
    "sass": "node-sass -w scss/ -o dist/css/ --recursive"
  }
```

produced certain errors on VSCode on windows, specifically =>

```json
{
  "status": 3,
  "message": "File to read not found or unreadable: C:/Users/Urhiafe Patience/projects/portfolio/scss/main.scss",
  "formatted": "Internal Error: File to read not found or unreadable: C:/Users/Urhiafe Patience/projects/portfolio/scss/main.scss\n"
}
```

To fix this, I used a solution I found [here](https://github.com/michaelwayman/node-sass-chokidar/issues/22), replacing the contents of the `node_modules/node-sass/lib/render.js` file with [this patched file](https://github.com/marcosbozzani/node-sass/blob/bug-vscode-watch/lib/render.js). Started rendering properly afterwards
