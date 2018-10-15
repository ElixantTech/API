/**
 * Bootstrap the Frontend by loading any necessary vendor packages.
 * and making any adjustments.
 */
require('./bootstrap');

/**
 * Initialize the Vue Framework, of corse.
 */
window.Vue = require('vue');

/**
 * Load Global Components
 */
Vue.component("Platform", require("./Platform"));

/**
 * Initialize Vue
 */
const platform = new Vue({
    el: "#body"
});

/**
 * Setup the Frontend.
 */
$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf_token"]').attr('content')
        }
    });
})