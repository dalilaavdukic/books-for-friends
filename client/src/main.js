import Vue from 'vue'
import App from './App.vue'
import store from './store';
import { mapActions } from 'vuex';

Vue.config.productionTip = false

new Vue(
  { 
    el: '#app',
    store,
    render: h => h(App),
    methods: {
      ...mapActions(['initGapiClient'])
    },
    mounted() {
      window.addEventListener("google-loaded", this.initGapiClient());
    }
  },
);
