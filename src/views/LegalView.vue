<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a @click="getToIndex" class="navbar-brand" href="#">
        <img
          v-bind:src="require('../assets/images/logo-ISC-white.png')"
          alt="Bootstrap"
          width="150"
        />
      </a>
    </div>
  </nav>
  <div class="backgroud-color">
    <div class="container">
      <div v-if="ruta == '/privacy'">
        <PrivacyComponent />
      </div>
      <div v-if="ruta == '/terms'">
        <TermsComponent />
      </div>
      <div v-if="ruta == '/legal'">
        <LegalComponent />
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container py-5">
      <div class="row pt-5">
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          <div class="">
            <img
              v-bind:src="require('../assets/images/logo-ISC-white.png')"
              alt="ISC INTEGRATED SUPPLY CHAIN"
              class="img-fluid logo-isc-footer"
            />
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          <div class="text-center">
            <a class="pointer" @click="getToPrivacy">
              <h3 class="bold h4 mb-4">Privacy Policy</h3>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          <div class="text-center">
            <a class="pointer" @click="getToTerms">
              <h3 class="bold h4 mb-4">Terms & Conditions</h3>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          <div class="text-center">
            <a class="pointer" @click="getToLegal">
              <h3 class="bold h4 mb-4">Legal Notices</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="d-flex">
            <div class="">
              <img
                v-bind:src="require('../assets/images/textron-logo-2.png')"
                alt="TEXTRON Specialized Vehicles"
                class="img-fluid logo-textron"
              />
            </div>
            <div class="txt-rights">
              <h4 class="hLight h6">
                © 2024 TEXTRON SPECIALIZED VEHICLES, All Rights Reserved
              </h4>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="text-end">
            <a
              href="https://blueberry.mx/"
              class="a_none_style"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dej55trpk/image/upload/v1675785643/we-are-Bb_black_hsaadw.gif"
                alt="Materialized by Blueberry"
                class="img-fluid bb-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  defaultata() {
    return {
      ruta: "",
    };
  },

  created() {
    this.ruta = window.location.pathname;

    console.log(this.ruta);
  },

  components: {
    LegalComponent: defineAsyncComponent(() => import('../views/HomeComponents/LegalView.vue')),
    TermsComponent: defineAsyncComponent(() => import('../views/HomeComponents/TermsView.vue')),
    PrivacyComponent: defineAsyncComponent(() => import('../views/HomeComponents/PrivacyView.vue')),
  },

  methods: {
    getToPrivacy() {
      this.$router.push({ name: "privacy" });
      this.ruta = '/privacy';
    },
    getToTerms() {
      this.$router.push({ name: "terms" });
      this.ruta = '/terms';
    },
    getToLegal() {
      this.$router.push({ name: "legal" });
      this.ruta = '/legal';
    },
    getToIndex() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
.backgroud-color {
  background-color: white;
  color: black;
}

.a_none_style {
  text-decoration: none;
}

.logo-isc-footer {
  width: 220px;
}

.footer h6 {
  font-family: "Helvetica Nue Ligth";
}

.logo-textron {
  width: 180px;
}

.bold {
  font-weight: 90;
}
.pointer{
    cursor: pointer;
    text-decoration: none;
    color: white;
}

</style>
