import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import VueScrollactive from 'vue-scrollactive';

const app = createApp(App);
app.use(router);
app.use(VueScrollactive);
app.mount('#app');
