<template>
  <section  v-if="user" class="showcase-about" id="showcase">

    <video v-if="user.email == 'artic_cat@gmail.com'" 
        v-bind:src="require('../../../assets/new_video/about-us-arctic.mp4')"
        muted
        autoplay
      ></video>
      <video v-else-if="user.email == 'jacobsen@gmail.com'" 
        v-bind:src="require('../../../assets/new_video/about-us-jacobsen.mp4')"
        muted
        autoplay
      ></video>
      <video v-else-if="user.email == 'gse@gmail.com'" 
        v-bind:src="require('../../../assets/new_video/about-us-gse.mp4')"
        muted
        autoplay
      ></video>
      <video v-else
        v-bind:src="require('../../../assets/new_video/about-bg-2.mp4')"
        muted
        autoplay
      ></video>
      
    <!-- <video
      v-bind:src="require('../../../assets/video/loop-about.mp4')"
      muted
      autoplay
    ></video> -->

    <div class="edit">
      <!-- <button class="btn btn-primary btn-edit">
        <i class="fa-regular fa-pen-to-square"></i>
      </button> -->
    </div>
    <div class="txt-about" data-aos="fade-down" data-aos-duration="1500">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                <div class="">
                  <h6 class="oLight">About our company</h6>
                  <img
                    v-bind:src="require('../../../assets/images/logos/logo_textron.png')"
                    alt="Logo Textron"
                    class="img-fluid logo-about mb-5"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <h1 class="oExtraBold display-6">
                  We believe in excellence <br />
                  <b class="oLight">through organization and innovation</b>
                </h1>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          <div class="txt-menu" data-aos="fade-down" data-aos-duration="1500">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                      <div class="">
                        <div class="row my-3">
                          <div
                            class="col-12 col-sm-12 col-md-12 col-lg-4 cursor"
                            @click="getMission"
                          >
                            <div class="">
                              <h1 class="oExtraBold h4">Our Mission</h1>
                              <div class="">
                                <h5 class="oLight h6">
                                  What is our current field of action?
                                </h5>
                              </div>

                              <div class="">
                                <div class="circle">
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-12 col-sm-12 col-md-12 col-lg-4 bordes-vision cursor"
                            @click="getVision"
                          >
                            <div class="mx-3">
                              <h1 class="oExtraBold h4">Our Vision</h1>
                              <div class="">
                                <h5 class="oLight h6">
                                  Where do we want to reach?
                                </h5>
                              </div>
                              <div class="">
                                <div class="circle">
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-12 col-sm-12 col-md-12 col-lg-4 cursor"
                            @click="getValues"
                          >
                            <div class="mx-4">
                              <h1 class="oExtraBold h4">Values</h1>
                              <div class="">
                                <h5 class="oLight h6">
                                  What value tools are we working with?
                                </h5>
                              </div>
                              <div class="">
                                <div class="circle">
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

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
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
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
      } else {
        console.log("Nulo");
        this.user = null;
      }
    });
  },
  methods: {
    getVision() {
      this.$router.push({ name: "Vision" });
    },
    getMission() {
      this.$router.push({ name: "Mission" });
    },
    getValues() {
      this.$router.push({ name: "Values" });
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.showcase-about {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase-about video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-about {
  position: absolute;
  top: 10%;
  left: 0;
  transform: calc(-50%, -50%);
  text-align: start;
  width: 100%;
}

.txt-menu {
  position: absolute;
  top: 250%;
  left: 0;
  transform: calc(-50%, -50%);
  text-align: start;
  width: 100%;
}
.logo-about {
  width: 320px;
}
.vision-icon {
  width: 100%;
}
.mission-icon {
  width: 50%;
}
.values-icon {
  width: 60%;
}
.border-bottom-about {
  border-bottom: 0.5px solid #ffffff;
}
.circle {
  border-radius: 50%;
  border: 1px solid #ffffff;
  width: 30px;
  text-align: center;
  height: 30px;
}
.circle img {
  width: 30%;
}
.edit {
  position: absolute;
  top: 2%;
  right: 3%;
  transform: calc(-50%, -50%);
  text-align: start;
}
.edit i {
  font-size: 1.3rem;
}
.btn-edit {
  background: transparent;
  border: none;
}
.btn-edit:hover {
  background: transparent;
  border: none;
}
.btn-edit:focus {
  background: transparent;
  border: none;
}
</style>
