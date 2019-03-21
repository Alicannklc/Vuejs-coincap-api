import Vue from 'vue';
import app from './app.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueMaterial.MdTable)
Vue.config.devtools = true


new Vue({
    el: '#app',
    components: { app },
    template: '<app/>'
});