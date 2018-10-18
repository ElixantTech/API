/**
 * Bootstrap the Frontend by loading any necessary vendor packages.
 * and making any adjustments.
 */
require('./bootstrap');

/**
 * Initialize the Vue Framework, of corse.
 */
window.Vue  = require('vue');

/**
 * Load Global Components
 */
Vue.component("Platform", require("./Platform"));

var data = {
    navbar_height: null,
    shortcut_dropdown: $('#ahortcut'),
    bread_crumb: $('#ribbon ol.breadcrumb'),
    topmenu: false,
    thisDevice: null,
    isMobile: (/iphone|ipad|ipod|android|blackberry|mini|windows\sve|palm/i.test(navigator.userAgent.toLowerCase())),
    jsArray: {}
};

/**
 * Initialize Vue
 */
const platform = new Vue({
    el: "#platform",
    data: data
});

/*
 * Calculate nav height
 */


/**
 * Setup the Frontend.
 */
$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf_token"]').attr('content')
        }
    });
});
