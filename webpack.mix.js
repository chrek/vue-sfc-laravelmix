let mix = require('laravel-mix');

//mix.js('resources/js/app.js', 'public/js').sass('resources/js/app.scss', 'public/js');
mix.js("src/app.js", "dist/").sass("src/app.scss", "dist/");