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
    .styles([
        'resources/js/vendor/bootstrap/css/bootstrap.css',
        'resources/js/vendor/animate/animate.css',
        'node_modules/font-awesome/css/font-awesome.css',
        'resources/js/vendor/magnific-popup/magnific-popup.css',
        'resources/js/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css'
    ], 'public/css/vendor.bundle.css')
    .styles([
        'resources/css/app.css',
        'resources/css/theme.css',
        'resources/css/theme-admin-extension.css',
        'resources/css/invoice-print.css',
        'resources/css/pricing-table.css',
        'resources/css/skins/default.css',
        'resources/css/skins/extension.css',
        'resources/css/custom.css',
    ], 'public/css/theme.bundle.css')
    .js('resources/js/app.js', 'public/js')
    .extract(['vue','jquery','bootstrap','pusher-js','laravel-echo','popper.js','jquery-browser','bootstrap-datepicker','common','nanoscroller',
    'magnific-popup','jquery-placeholder','jquery-validation','jquery.payment'])
    .sourceMaps();
