import './bootstrap';
import Vue from 'vue';
import vuetify from '@/js/plugins/vuetify';
import Routes from '@/js/routes.js';
import App from '@/js/views/App';
import store  from '@/js/stores';
import Vuex from 'vuex';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate'
import Form from 'vform';

window.Form = Form;
Vue.use(VueSweetalert2);
Vue.use(vuetify);
Vue.use(Vuex);
Vue.use(Vuelidate);

store.dispatch('getUser');

const app = new Vue({
    vuetify,    
    el: '#app',
    router: Routes,
    render: h => h(App),
    store: store
})

export default app;