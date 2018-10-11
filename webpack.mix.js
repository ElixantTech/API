const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    publicPath: ("./")
});

mix.copyDirectory('resources/assets', 'public/assets')
    .js('resources/js/app.js', 'public/assets/platform')
    .extract(['vue','jquery','bootstrap','lodash','popper.js','axios','laravel-echo','pusher-js'])
    .sourceMaps();
