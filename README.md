# First Portfolio Website

A simple website that I'm using as my portfolio for the time being.

[![Practice](https://img.shields.io/badge/Practice-JavaScript-yellow.svg)](https://bankole2000.github.io/githubfinder)

_<p align="center">"I continue to push on... Longing to Master the Ways of the Front End Jedi"</p>_

<div align="center" style="text-align:center; margin:auto;">
<img align="center" src="https://i.imgur.com/SeUttrI.png" width="150"/>
</div>

My very first Portfolio website... (Kept thinking to myself _"how the/why the hell haven't I built one all these years?_ o.O" - well no I have, lol ). Built with `node-sass html 5 css 3` and a little `javascript ES6`.

## What it is

A simple, reponsive portfolio website. Built with:

- HTML
- CSS
- Vanilla JS - ES6
- [Node Sass](http://www.bootswatch.com/) - A Bootstrap based CSS Theming tool
- [Patience](https://www.wikihow.com/Love-Programming) - Strictly for the love of coding _Mehn!_

## What it does

- Display Projects
- Try to look pretty, simple and hopefully not too formal.
- Inform visitors about me
- Links to All the things
- Link Back to project Repos and Home Pages (if available)

## Learning Points

- Sass Mixins
- Sass functions
- Responsive design & media queries
- CSS Grid
- Flexbox
- CSS Animations/transitions
- Psuedo Elements

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

## Acknowledgments

- Many thanks to [@bradtraversy](https://github.com/bradtraversy) for his awesome courses - _i will not fail you sensei_
- Thanks to [@torvalds](https://github.com/torvalds) For Making the world a better place
- And To anyone reading this... _You're awesome!_

That being said
_<p align="center">Adieu, Till I push again... I must return to my meditations on the Ways of JS Ninjustu</p>_