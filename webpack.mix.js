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

mix
    .js('resources/js/platform.js', 'public/assets/js')
    .sass('resources/sass/combined.scss', 'public/assets/css/platform.css')

    .extract(['vue','jquery','bootstrap','pusher-js','laravel-echo','popper.js','common','nanoscroller',
        'magnific-popup','jquery-placeholder','jquery-validation'])
    .sourceMaps();
