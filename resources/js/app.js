require('./bootstrap');

window.Vue = require('vue');

//Vue.component('header-search-form', require('./components/HeaderSearchForm.vue'));

const app = new Vue({
    el: '#app'
});

$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf_token"]').attr('content')
        }
    });
});
