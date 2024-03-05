<template>
  <section
    class="showcase-vision"
    id="showcase"
    v-for="item in mision"
    v-bind:key="item.id"
  >
    <video
      style="width: 100%"
      v-bind:src="require('../../../assets/new_video/mision-v2.mp4')"
      muted
      autoplay
    ></video>
    <div class="edit">
      <!-- <button
        class="btn btn-primary btn-edit"
        data-bs-toggle="modal"
        data-bs-target="#update-mision"
      >
        <i class="fa-regular fa-pen-to-square"></i>
      </button> -->
    </div>
    <div class="txt-mission" data-aos="fade-down" data-aos-duration="1500">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-2">
            <div class="mt-2">
              <img
                v-bind:src="require('../../../assets/new_video/line-about.png')"
                alt="Line white"
                class="img-fluid line-about"
              />
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5">
            <div class="title-vision text-center">
              <h1 class="oLight h2">{{ item.data.title }}</h1>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1">
            <hr class="hr-title" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-2">
            <img
              v-bind:src="
                require('../../../assets/images/logos/logo_textron.png')
              "
              alt="Logo Textron"
              class="img-fluid mb-5"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <!-- <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="subtitle-vision text-center">
              <h2 class="oLight h4">{{ item.data.second }}</h2>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-1">
            <hr class="hr-title" />
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="title-vision">
              <h1 class="oLight h2">{{ item.data.title }}</h1>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1">
            <hr class="hr-title" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-2">
            <img
              v-bind:src="require('../../../assets/images/logo-textronx.png')"
              alt="Logo Textron"
              class="img-fluid mb-5"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
        </div> -->

        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <h1 class="oExtraBold h2">
              {{ item.data.descriptions }}
            </h1>
            <h3 class="oLight h4">
              {{ item.data.description }}
            </h3>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-8"></div>
        </div>
      </div>
    </div>
    <div class="hr-bottom">
      <div class="container">
        <div class="row">
          <hr />
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="d-flex" @click="getAbout">
              <div class="me-4">
                <div class="circle">
                  <img
                    v-bind:src="
                      require('../../../assets/images/left-arrow.png')
                    "
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="mt-1">
                <h5 class="oLight h6">
                  Back to <b class="oExtraBold">Our Company</b>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="d-flex justify-content-end cursor" @click="getVision">
              <div class="mt-1">
                <h5 class="oLight h6">
                  Go to <b class="oExtraBold">Vision</b>
                </h5>
              </div>
              <div class="ms-4">
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
          <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-2">
            <div class="d-flex cursor" @click="getValues">
              <div class="mt-1">
                <h5 class="oLight h6">
                  Go to <b class="oExtraBold">Values</b>
                </h5>
              </div>
              <div class="ms-4">
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
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <ModalMision></ModalMision>
</template>
<script>
import { mision_collection } from "@/firebase/firebase";
require("firebase/compat/auth");
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  data() {
    return {
      mision: [],
    };
  },
  mounted() {
    this.mision = [];
    mision_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.mision.push({ id: item.id, data: item.data() })
        )
      );
  },
  components: {
    ModalMision: defineAsyncComponent(() =>
      import("../../components/Company/ModalMision.vue")
    ),
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
    getAbout() {
      this.$router.push({ name: "About_Company" });
    },
  },
};
</script>

<style scoped>
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
.showcase-mission {
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
.showcase-mission video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-mission {
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;
  transform: calc(-50%, -50%);
  text-align: start;
}
.hr-vertical {
  rotate: 90deg;
  width: 110px;
  opacity: 0.9;
  margin-left: 6rem;
  border: 0.5px solid #ffffff;
}
.hr-bottom {
  position: absolute;
  width: 100%;
  transform: calc(-50%, -50%);
  bottom: 3%;
  left: 0;
}
.hr-title {
  border: 0.5px solid #ffffff;
  opacity: 0.5;
}
.cursor {
  cursor: pointer;
}
.circle {
  border-radius: 50%;
  border: 1px solid #ffffff;
  width: 30px;
  text-align: center;
  height: 30px;
  align-items: center;
}
.circle img {
  width: 30%;
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
