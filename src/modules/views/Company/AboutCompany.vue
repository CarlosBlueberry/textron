<template>
  <section v-if="user" class="showcase-about" id="showcase">
    <video
      v-if="user.email == 'artic_cat@gmail.com'"
      v-bind:src="require('../../../assets/new_video/about-us-arctic.mp4')"
      muted
      autoplay
    ></video>
    <video
      v-else-if="user.email == 'jacobsen@gmail.com'"
      v-bind:src="require('../../../assets/new_video/about-us-jacobsen.mp4')"
      muted
      autoplay
    ></video>
    <video
      v-else-if="user.email == 'gse@gmail.com'"
      v-bind:src="require('../../../assets/new_video/about-us-gse.mp4')"
      muted
      autoplay
    ></video>
    <video
      v-else
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-11">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                <div class="">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logos/logo_textron.png')
                    "
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
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                      <div class="">
                        <div class="row my-3">
                          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                            <div class="">
                              <h1 class="oExtraBold h2">Our Mission</h1>
                              <div class="">
                                <h5 class="oLight h5">
                                  Resilient supply chain, leaders that
                                  understand the work, embrace scientific
                                  thinking - be a data organization
                                </h5>
                              </div>

                              <div class="">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ModalMision"
                                  class="btn circle"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-12 col-sm-12 col-md-12 col-lg-3 bordes-vision"
                          >
                            <div class="mx-3">
                              <h1 class="oExtraBold h2">Our Vision</h1>
                              <div class="">
                                <h5 class="oLight h5">
                                  Achieve Organization excellence by 2027
                                </h5>
                              </div>
                              <div class="">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ModalVsion"
                                  class="btn circle"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                            <div class="mx-4">
                              <h1 class="oExtraBold h2">Our Strategy</h1>
                              <div class="">
                                <h5 class="oLight h5">Strategic statement</h5>
                              </div>
                              <div class="">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ModalStrategic"
                                  class="btn circle"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                            <div class="mx-4">
                              <h1 class="oExtraBold h2">Our Values</h1>
                              <div class="">
                                <h5 class="oLight h5">
                                  Integrity, Respect, Trust, and Pursuit of
                                  Excellence
                                </h5>
                              </div>
                              <div class="">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ModalValues"
                                  class="btn circle"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../assets/images/right-arrow.png')
                                    "
                                    alt=""
                                    class="img-fluid"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_values_add">
        <div class="text-center">
          <h1 class="oExtraBold h2">Values in action</h1>
          <center>
            <div style="width: 30%;">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img style="background-color: rgba(0,0,0,0.8);"
                      :src="require('../../../assets/images/blog-segunda.png')"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img style="background-color: rgba(0,0,0,0.8);"
                      :src="require('../../../assets/images/blog-segunda.png')"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img style="background-color: rgba(0,0,0,0.8);"
                      :src="require('../../../assets/images/blog-segunda.png')"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </center>
        </div>
      </div>
    </div>
  </section>

  <!-- MODALS -->
  <!-- Modal Mision -->
  <div
    class="modal fade"
    id="ModalMision"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content color_text">
        <div class="modal-body">
          <div class="text-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div v-for="itemM in mision" v-bind:key="itemM.id">
            <div class="text-center">
              <p class="modal-title h1">{{ itemM.data.title }}</p>
              <p class="modal-subtitle h3">{{ itemM.data.second }}</p>
            </div>
            <div class="container mt-4">
              <p class="modal-light h5">
                {{ itemM.data.description }}
              </p>
              <p class="modal-light h5">
                {{ itemM.data.descriptions }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Vision -->
  <div
    class="modal fade"
    id="ModalVsion"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content color_text">
        <div class="modal-body">
          <div class="text-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div v-for="itemV in vision" v-bind:key="itemV.id">
            <div class="text-center">
              <p class="modal-title h1">{{ itemV.data.title }}</p>
              <p class="modal-subtitle h3">{{ itemV.data.second }}</p>
            </div>
            <div class="container mt-4">
              <p class="modal-light h5">
                {{ itemV.data.description }}
              </p>
              <p class="modal-light h5">
                {{ itemV.data.descriptions }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Strategic -->
  <div
    class="modal fade"
    id="ModalStrategic"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content color_text">
        <div class="modal-body">
          <div class="text-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <p class="text-center modal-title h1 mb-4">Our Strategic</p>
          <div class="row">
            <div v-for="itemE in enablers" v-bind:key="itemE.id" class="col-6">
              <div class="p-4">
                <p class="text-center modal-subtitle h3">
                  {{ itemE.data.title }}
                </p>
                <p class="text-center modal-subtitle h4">
                  {{ itemE.data.subtitle }}
                </p>
                <p class="modal-light h5">
                  <br />
                  {{ itemE.data.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Values-->
  <div
    class="modal fade"
    id="ModalValues"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content color_text">
        <div class="modal-body">
          <div class="text-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="text-center">
            <p class="modal-title h1">Main Values</p>
            <div v-for="itemVal in values" v-bind:key="itemVal.id">
              <p class="modal-text h5">
                {{ itemVal.data.one }} - {{ itemVal.data.two }} -
                {{ itemVal.data.three }} - {{ itemVal.data.four }}
              </p>
            </div>
          </div>
          <div class="container mt-4">
            <div class="row">
              <div class="col-5">
                <p class="modal-subtitle h3">Additional Values</p>
                <div v-for="itemAdd in add" v-bind:key="itemAdd.id">
                  <p class="modal-light h5">
                    {{ itemAdd.data.one }} <br />
                    {{ itemAdd.data.two }} <br />
                    {{ itemAdd.data.three }} <br />
                    {{ itemAdd.data.four }} <br />
                    {{ itemAdd.data.five }}
                  </p>
                </div>
              </div>
              <div class="col-2"></div>
              <div class="col-5">
                <div class="text-start">
                  <p class="modal-subtitle h3">Principles</p>
                  <div v-for="itemPrin in principles" v-bind:key="itemPrin.id">
                    <a
                      class="modal-light h5"
                      :href="itemPrin.data.file"
                      target="_blank"
                      >{{ itemPrin.data.principle }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");
import {
  enablers_collection,
  vision_collection,
  mision_collection,
  values_collection,
  additional_collection,
  principles_collection,
} from "@/firebase/firebase";

export default {
  data() {
    return {
      enablers: [],
      mision: [],
      vision: [],
      values: [],
      add: [],
      principles: [],
      user: null,
      clase_artic: false,
      artic: false,
      clase_cushman: false,
      cushman: false,
      clase_jacobsen: false,
      jacobsen: false,
      clase_gse: false,
      gse: false,
      mostrar_mision: false,
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
  mounted() {
    this.principles = [];
    principles_collection
      .get()
      .then((r) =>
        r.docs.map((itemPrin) =>
          this.principles.push({ id: itemPrin.id, data: itemPrin.data() })
        )
      );

    this.add = [];
    additional_collection
      .get()
      .then((r) =>
        r.docs.map((itemAdd) =>
          this.add.push({ id: itemAdd.id, data: itemAdd.data() })
        )
      );

    this.values = [];
    values_collection
      .get()
      .then((r) =>
        r.docs.map((itemVal) =>
          this.values.push({ id: itemVal.id, data: itemVal.data() })
        )
      );

    this.enablers = [];
    enablers_collection
      .get()
      .then((r) =>
        r.docs.map((itemE) =>
          this.enablers.push({ id: itemE.id, data: itemE.data() })
        )
      );

    this.vision = [];
    vision_collection
      .get()
      .then((r) =>
        r.docs.map((itemV) =>
          this.vision.push({ id: itemV.id, data: itemV.data() })
        )
      );

    this.mision = [];
    mision_collection
      .get()
      .then((r) =>
        r.docs.map((itemM) =>
          this.mision.push({ id: itemM.id, data: itemM.data() })
        )
      );
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
a {
  text-decoration: none;
  color: #314a70 !important;
}
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
  /* opacity: 0.9; */
  filter: opacity(40%);
}
.txt-about {
  position: absolute;
  top: 2%;
  left: 0;
  transform: calc(-50%, -50%);
  text-align: start;
  width: 100%;
}

.txt-menu {
  position: absolute;
  top: 90%;
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
  text-align: center;
}
.circle img {
  width: 70%;
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

.color_text {
  color: #314a70 !important;
}
.modal-title {
  font-weight: 900;
}
.modal-subtitle {
  font-weight: 750;
}
.modal-text {
  font-weight: 700;
}
.modal-light {
  font-weight: 400;
}
.section_values_add {
  position: absolute;
  top: 250%;
  left: 0;
  /* transform: calc(-50%, -50%); */
  text-align: start;
  width: 100%;
}
</style>
