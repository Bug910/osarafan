import Vue from 'vue'

import { connect } from "./util/ws";
import Vuetify from 'vuetify'
import 'api/resource'
import App from 'pages/App.vue'
import 'vuetify/dist/vuetify.min.css'



if (frontendData.profile) {
    connect();
}
Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: a => a(App),
    vuetify: new Vuetify()

})