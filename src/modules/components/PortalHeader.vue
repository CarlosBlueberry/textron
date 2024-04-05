<template>
  <!-- <div v-if="user.email == 'artic_cat@gmail.com'">
  <div v-if="user.email == 'ezgo@gmail.com'" class="header">
  <div v-if="user.email == 'cushman@gmail.com'">
  <div v-if="user.email == 'jacobsen@gmail.com'">
  <div v-if="user.email !== 'jacobsen@gmail.com' || 'artic_cat@gmail.com' ||'ezgo@gmail.com' || 'cushman@gmail.com'" class="header">
  </div>
  </div>
  </div>
  </div>
  </div> -->

  <div class="header" :class="[
    { active: artic, color_artic: clase_artic },
    { active: cushman, color_cushman: clase_cushman },
    { active: jacobsen, color_jacobsen: clase_jacobsen },
    { active: gse, color_gse: clase_gse },
    { active: textron, color_textron: clase_textron },
  ]">
    <div class="container-fluid pt-3">
      <div class="new-portal-header-top">
        <div class="contain">
          <img v-bind:src="require('../../assets/images/logo-ISC-white.png')" alt="ISC INTEGRATED SUPPLY CHAIN"
            class="img-fluid isc-logo" />
        </div>
        <div v-if="user" class="contain d-flex justify-content-center">
          <router-link to="/portal" class="brand-logo">
            <img v-if="user.email == 'artic_cat@gmail.com'"
              v-bind:src="require('../../assets/images/logos/logo_artic.png')" alt="ARCTIC CAT" class="img-fluid"
              width="100" />
            <img v-else-if="user.email == 'cushman@gmail.com'"
              v-bind:src="require('../../assets/images/logos/logo_cushman.png')" alt="ARCTIC CAT" class="img-fluid"
              width="150" />
            <img v-else-if="user.email == 'jacobsen@gmail.com'"
              v-bind:src="require('../../assets/images/logos/logo_jacobsen.png')" alt="ARCTIC CAT" class="img-fluid"
              width="100" />
            <img v-else-if="user.email == 'gse@gmail.com'" v-bind:src="require('../../assets/images/logos/logo_gse.png')"
              alt="ARCTIC CAT" class="img-fluid" width="180" />
            <img v-else-if="user.email == 'textron@gmail.com'"
              v-bind:src="require('../../assets/images/logos/logo_textron.png')" alt="ARCTIC CAT" class="img-fluid"
              width="150" />
            <img v-else v-bind:src="require('../../assets/images/logos/logo_ezgo.png')" alt="ARCTIC CAT" class="img-fluid"
              width="150" />
          </router-link>
        </div>
        <div class="contain">
          <div class="user-section" v-if="user">
            <div class="d-flex align-items-center">
              <button class="button-with-menu">
                <img class="svg-white" src="../../assets/images/arrow-dawn-black.svg" alt="">
                <div class="menu-show">
                  <button @click="navigateTo('admin_panel')">Admin panel</button>
                  <button @click="navigateTo('Acount_Info')">Account info</button>
                  <button @click="logout()">Log Out</button>
                </div>
              </button>

            </div>
            <div class="perfil-data">
              <h6 class="oRegular h6 text-end text-light pe-3">{{ user.email }}</h6>
              <h6 class="oRegular h6 text-end text-light pe-3">{{ user.displayName }}</h6>
            </div>
            <div class="perfil-photo">
              <div class="bg-icon-user" :style="{ backgroundImage: 'url(' + user.photoURL + ')' }">

              </div>
            </div>
          </div>
          <div v-else>No se cambio</div>
        </div>
      </div>

      <div>
        <div class="new-portal-menu">
          <!-- <button @click="changeUserName()"> ususario name</button> -->
          <button :class="this.$route.path == '/portal' ? 'active' : ''"
            @click="navigateTo('welcomePortal')">Home</button>
          <button :class="this.$route.path == '/aboutCompany' ? 'active' : ''"
            @click="navigateTo('About_Company')">Company</button>
          <button :class="this.$route.path == '/OS' ? 'active' : ''" @click="navigateTo('ISC_OS')">IOS</button>
          <button :class="this.$route.path == '/portal/business_updates' ? 'active' : ''"
            @click="navigateTo('business_updates')">Business Updates</button>
          <button :class="this.$route.path == '/portal/success_stories' ? 'active' : ''"
            @click="navigateTo('success_stories')">Success Stories</button>
          <button :class="this.$route.path == '/portal/master_plan' ? 'active' : ''"
            @click="navigateTo('master_plan')">Master Plan</button>
          <button :class="this.$route.path == '/portal/training_plan' ? 'active' : ''"
            @click="navigateTo('training_plan')">Training Plan</button>
          <button :class="this.$route.path == '/portal/leasons_learned' ? 'active' : ''"
            @click="navigateTo('leasons_learned')">Knowledge Database</button>
          <button :class="this.$route.path == '/portal/sharepoints' ? 'active' : ''"
            @click="navigateTo('sharepoints')">Sharepoints</button>
          <button :class="this.$route.path == '/portal/admin_panel/excel' ? 'active' : ''"
            @click="navigateTo('admin_panel-excel')">Scorecard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");
// import { getAuth, updateProfile } from "firebase/auth"; 

// const auth = getAuth();
// const user = auth.currentUser;
// console.log(user)
export default {
  data() {
    return {
      user: null,
      clase_artic: false,
      artic: false,
      clase_cushman: false,
      cushman: false,
      clase_jacobsen: false,
      jacobsen: false,
      clase_gse: false,
      gse: false,
      clase_textron: false,
      textron: false,
    };
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;

        if (user.email == "artic_cat@gmail.com") {
          this.artic = true;
          this.clase_artic = true;
        }
        if (user.email == "cushman@gmail.com") {
          this.cushman = true;
          this.clase_cushman = true;
        }
        if (user.email == "jacobsen@gmail.com") {
          this.jacobsen = true;
          this.clase_jacobsen = true;
        }
        if (user.email == "gse@gmail.com") {
          this.gse = true;
          this.clase_gse = true;
        }
        if (user.email == "textron@gmail.com") {
          this.textron = true;
          this.clase_textron = true;
        }
      } else {
        console.log("Nulo");
        this.user = null;
      }
    });
  },
  methods: {
    navigateTo(section) {
      this.$router.push({ name: section });
    },
    // changeUserName() {
    //   updateProfile(auth.currentUser, {
    //     displayName: "Test User", photoURL: "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png"
    //   }).then(() => {
    //     console.log('nuevo nombre');
    //   }).catch(() => {
    //     console.log('no jala : ');
    //   });
    // },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  }
};
</script>

<style scoped lang="css">
.dropdown-menu .show{
  position: fixed !important;
}
.header {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background: #1b406e;
  height: auto !important;
  overflow: hidden;
  z-index: 10;
  position: unset;
}

.color_artic {
  background: #599a30 !important;
}

.color_cushman {
  background: #edcc45 !important;
}

.color_jacobsen {
  background: #d67443 !important;
}

.color_gse {
  background: #ef954c !important;
}

.color_textron {
  background: #1a3668 !important;
}

.new-portal-header-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}

.new-portal-header-top .contain {
  width: 30%;
}

.new-portal-header-top .contain .isc-logo,
.new-portal-header-top .contain .brand-logo {
  width: 30%;
}
.new-portal-header-top .contain .user-section {
  display: flex;
  justify-content: end;
}
.new-portal-header-top .contain .user-section .button-with-menu{
  background: transparent;
  border: none;
}
.new-portal-header-top .contain .user-section .button-with-menu .menu-show{
  display: none;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  z-index: 99;
  width: 15vw;
  padding: 5px;
}
.new-portal-header-top .contain .user-section .button-with-menu:hover .menu-show{
  display: block;
  position: fixed;
}
.new-portal-header-top .contain .user-section .button-with-menu:hover .menu-show button{
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  position: relative;
}
.new-portal-header-top .contain .user-section .button-with-menu:hover .menu-show button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #000;
  transition: width 1s ease;
}
.new-portal-header-top .contain .user-section .button-with-menu:hover .menu-show button:hover::after {
  width: 100%;
  left: 0;
  transition: width 1s ease;
}
.new-portal-header-top .contain .user-section .perfil-photo{
  display: flex;
  align-items: center;
}
.new-portal-header-top .contain .user-section .perfil-photo img{
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
}
.new-portal-header-top .contain .user-section .perfil-data p{
  margin-bottom: 0;
}


.new-portal-menu {
  display: flex;
  justify-content: center;
  margin-top: 1vw;
  margin-bottom: 1vw;
}

.new-portal-menu button {
  background-color: transparent;
  color: #fff;
  border: none;
  position: relative;
  margin: 0px 0.5vw;
  font-size: 1.1vw;
}
.new-portal-menu button:hover {
  font-family: 'Open Sans Extra Bold';
  src: url("../../assets/fonts/OpenSans-ExtraBold.ttf");
}

.new-portal-menu button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #fff;
  transition: width 1s ease;
}

.new-portal-menu button.active {
  border-bottom: 1px solid #fff;
  font-family: 'Open Sans Extra Bold';
  src: url("../../assets/fonts/OpenSans-ExtraBold.ttf");
}

.new-portal-menu button:hover::after {
  width: 100%;
  left: 0;
  transition: width 1s ease;
}
.svg-white{
  filter: invert(100%) sepia(0%) saturate(7484%) hue-rotate(204deg) brightness(112%) contrast(97%);
}
.bg-icon-user{
  width: 2.5vw;
  height: 2.5vw;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  margin-right: 0.8vw;
}
</style>
