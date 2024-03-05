import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
// import { firebase } from '@/firebase/firebase'
import { CKEditor } from '@ckeditor/ckeditor5-vue'
require('firebase/compat/auth')

const app = createApp(App);



app
    .use(router)
    .use(CKEditor)
    .use(store)
    .use(
        createAuth0({
            domain: "https://login.textron.com/as/authorization.oauth2",
            clientId: "59a23a2a-2a17-468a-b0f9-00e3bad8def5",
            authorizationParams: {
                redirect_uri: "https://textronisc.com/portal",
            },
        })
    )
    .mount("#app");


// firebase.auth().onAuthStateChanged(() => {
//     if(!app){
//         createApp(App).use(store).use(router).use( CKEditor ).mount('#app')
//     }
// })

