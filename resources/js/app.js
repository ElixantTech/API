require('./bootstrap');

window.Vue = require('vue');

Vue.component('header-search-form', require('./components/HeaderSearchForm.vue'));
Vue.component('login-page-form', require('./components/LoginPageForm.vue'));

// Helpers
Vue.component('input-group', require('./components/helpers/InputGroupSimple'));

// Forms
Vue.component('register-form', require('./components/forms/RegisterFormComponent'));

const app = new Vue({
    el: '#app'
});
