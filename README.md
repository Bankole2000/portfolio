# Simple Responsive Portfolio

A simple website that I'm using as my portfolio for now. Built with `node-sass html 5 css 3` and a little `javascript`

## Issues

1. **Node sass error**

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

2. **Overriding CSS**

while coding the responsiveness (using media queries defined in the `_config` and `_mobile` partials), the css began to overide each other, with css on earlier lines being overridden by css in later lines (something i learnt from jen Simmons) like so =>

```css
main#home h1 {
  // @media small screens
  margin-top: 5vh;
}
main#home h1 {
  // @media larger screens
  margin-top: 20vh;
}
```

So earlier occuring css is overriden in the browser like this =>
~~main#home h1 {
margin-top: 5vh;
}~~ while later css is implemented. Thus to ensure that responsive css is applied by the browser, I imported the `_mobile.scss` file last in the `main.scss` file
