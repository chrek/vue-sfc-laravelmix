# vue-sfc-laravelmix

Single File Components With webpack from Laravel Mix
----------------------------------------------------

Using Laravel Mix for Vue.js Single File Components

Laravel Mix
-----------
Laravel Mix provides a fluent API for defining Webpack build steps for your application. Mix is a configuration layer on top of Webpack.

Useful Commands to run (see package.json for available scripts):
----------------------------------------------------------------
- `npm install laravel-mix --save-dev` to instal Laravel Mix
- `npm install` to install the dependencies Mix references
- `npm run dev` to run all Mix tasks...
- `npm run production` to run all Mix tasks and minify output...
- `npm run watch` or `npm run watch-poll` to compile and recompile assets after changes.

Mix working with JavaScript
---------------------------
The webpack.mix.js file is the configuration layer on top of webpack with the following code:
```javascript
let mix = require('laravel-mix');
mix.js("src/app.js", "dist/").sass("src/app.scss", "dist/");
```
These are the lines needed to take advantage of:
* ES2015 syntax.
* Modules
* Compilation of .vue files.
* Minification for production environments.

The application code are compiled and available in dist directory and loaded in the index.html file using
`<script src="/js/app.js"></script>`

We can simply open the index.html file in our browser and see the app.

## What has been implemented
* Interporlation
* Directives (v-for, v-text, v-bind, v-on or corresponding shorthands)
* Props
* Custom Events
* Nested Component
* Single File Components

<hr>

## References

1. [newline.co] (https://www.newline.co/30-days-of-vue/day-17-single-file-components)
2. [newline.co] (https://www.goodfreephotos.com/albums/vector-images/business-people-characters-vector-clipart.png)
3. [laravel.com] (https://laravel.com/docs/6.x/mix)
4. [Coders-tape] (https://www.youtube.com/watch?v=PaHZTeN_wSY)
