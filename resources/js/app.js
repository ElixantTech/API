/**
 * Bootstrap the Frontend by loading any necessary vendor packages.
 * and making any adjustments.
 */
require('./bootstrap');

/**
 * Initialize the Vue Framework, of corse.
 */
window.Vue  = require('vue');

import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import Vuex from 'vuex';

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(Vuex);

/**
 * Load Global Components
 */
Vue.component("Platform", require("./components/Platform"));

/**
 * Initialize Vue
 */
const app = new Vue({
    el: "#app"
});

/*
 * Theme JS
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
