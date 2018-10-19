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

require('laravel-mix-auto-extract');

mix
    .js('resources/js/app.js', 'public/assets/app/app.bundle.js')
    .styles([
        'resources/assets/app/vendors.bundle.css',
        'resources/assets/app/theme.css',
        'resources/assets/app/platform.css'
    ],  'public/assets/app/app.bundle.css')
    .autoExtract()
    .sourceMaps();
