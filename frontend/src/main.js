import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from 'vue-scrollto'
import CMSNavbar from './components/cms-components/CMSNavbar'
import CMSButtons from './components/cms-components/CMSButtons'
import CMSButton from './components/cms-components/CMSButton'
import Alert from './components/cms-components/Alert'

createApp(App)
.component('CMSNavbar',CMSNavbar)
.component('CMSButtons', CMSButtons)
.component('CMSButton', CMSButton)
.component('Alert', Alert)
.use(router)
.use(VueScrollTo)
.mount("#app");
