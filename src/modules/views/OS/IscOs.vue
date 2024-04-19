<template>
    <section class="showcase-isc" id="showcase">
      <video
        v-bind:src="require('../../../assets/new_video/ISC Bg-2.mp4')"
        muted
        loop
        autoplay
      ></video>

      <div
        :class="[
          { active: isc, txt_isc: clase_isc },
          { active: iscres, txt_isc_respon: clase_iscres },
        ]"
        data-aos="fade-down"
        data-aos-duration="1500"
        id="isc"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-md-12 col-lg-2">
              <div class="text-center">
                <img
                  v-bind:src="
                    require('../../../assets/images/logos/logo_textron.png')
                  "
                  alt=""
                  class="img-fluid logo-isc-os"
                />
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-md-12 col-lg-10">
              <div class="text-center">
                <h1 class="oExtraBold" id="texto">Integrated Supply Chain</h1>
                <h2 class="oRegular h1">Operating System</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-7">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                  <div class="logo-isc text-center">
                    <img
                      v-bind:src="
                        require('../../../assets/images/logo-isc-vertical.png')
                      "
                      alt="Logo ISC"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-1 me-2"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                  <div class="title-modules">
                    <h3 class="oLight">MODULES</h3>
                  </div>

                  <div class="buttons-modules area-scrollarea">
                    <ul
                      class="nav nav-pills mb-3 flex-column flex-sm-row justify-content-center"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li
                        class="nav-item col-12 col-sm-12 col-md-12 col-lg-4"
                        role="presentation"
                        v-for="item in supply"
                        v-bind:key="item.id"
                      >
                        <button
                          class="nav-link"
                          id="pills-safety-tab"
                          data-bs-toggle="pill"
                          :data-bs-target="'#' + item.id"
                          type="button"
                          role="tab"
                          aria-controls="pills-safety"
                          aria-selected="false"
                        >
                          {{ item.data.title }}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-5 info-modules">
              <div class="btn-add-module">
                <button
                  class="btn btn-primary btn-add"
                  data-bs-toggle="modal"
                  data-bs-target="#add-supply"
                >
                  <img
                    v-bind:src="require('../../../assets/images/btn-add.png')"
                    alt=""
                    class="img-fluid"
                  />
                </button>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-people"
                  role="tabpanel"
                  aria-labelledby="pills-people-tab"
                >
                  <div class="row mb-4">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div class="ms-4"></div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/icon-download-file.png')
                          "
                          alt=""
                          class="img-fluid icon-file"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                      <div class="txt-info-modules area-scrollarea"></div>
                    </div>
                  </div>
                </div>
                <div
                  v-for="item in supply"
                  v-bind:key="item.id"
                  class="tab-pane fade"
                  :id="item.id"
                  role="tabpanel"
                >
                  <div class="row mb-4">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div class="ms-4">
                        <h1 class="oLight title-vision h2 ms-5">
                          {{ item.data.title }}
                        </h1>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div class="text-center">
                        <a :href="item.data.file" target="_blank">
                          <img
                            v-bind:src="
                              require('../../../assets/images/icon-download-file.png')
                            "
                            alt=""
                            class="img-fluid icon-file"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                      <div class="txt-info-modules area-scrollarea">
                        <p class="oLight mb-3">
                          {{ item.data.departament }}
                        </p>

                        <div class="text-center">
                          <img
                            v-bind:src="item.data.img"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div
                v-for="item in supply"
                v-bind:key="item.id"
                class="tab-pane fade"
                :id="item.id"
                role="tabpanel"
                aria-labelledby="pills-safety-tab"
              >
                <div class="row mb-4">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="ms-4">
                      <h1 class="oLight title-vision h2 ms-5">
                        {{ item.data.title }}
                      </h1>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="text-center">
                      <img
                        v-bind:src="
                          require('../../../assets/images/icon-download-file.png')
                        "
                        alt=""
                        class="img-fluid icon-file"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="txt-info-modules">
                      <p class="oLight mb-3">
                        {{ item.data.departament }}
                      </p>

                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/img-sample.png')
                          "
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

                <!-- <div
                class="tab-pane fade"
                id="pills-safety"
                role="tabpanel"
                aria-labelledby="pills-safety-tab"
              >
                <div class="row mb-4">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="ms-4">
                      <h1 class="oLight title-vision h2 ms-5">EHS (Environmental, Health &
Safety)</h1>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="text-center">
                      <img
                        v-bind:src="
                          require('../../../assets/images/icon-download-file.png')
                        "
                        alt=""
                        class="img-fluid icon-file"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="txt-info-modules">
                      <p class="oLight mb-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magni, quisquam est quibusdam assumenda ratione
                        cumque vel perspiciatis totam molestiae quaerat harum
                        atque provident, recusandae reiciendis exercitationem.
                        Veniam dolore omnis facere.
                      </p>
                      <p class="oLight">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magni, quisquam est quibusdam assumenda ratione
                        cumque vel perspiciatis totam molestiae quaerat harum
                        atque provident, recusandae reiciendis exercitationem.
                        Veniam dolore omnis facere.
                      </p>

                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/img-sample.png')
                          "
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
                <!-- pills -->
                <div
                  class="tab-pane fade"
                  id="pills-quality"
                  role="tabpanel"
                  aria-labelledby="pills-quality-tab"
                >
                  <div class="row mb-4">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div class="ms-4">
                        <h1 class="oLight title-vision h2 ms-5">EHS (Environmental, Health &
Safety)</h1>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/icon-download-file.png')
                          "
                          alt=""
                          class="img-fluid icon-file"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                      <div class="txt-info-modules">
                        <p class="oLight mb-3">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magni, quisquam est quibusdam assumenda ratione
                          cumque vel perspiciatis totam molestiae quaerat harum
                          atque provident, recusandae reiciendis exercitationem.
                          Veniam dolore omnis facere.
                        </p>
                        <p class="oLight">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magni, quisquam est quibusdam assumenda ratione
                          cumque vel perspiciatis totam molestiae quaerat harum
                          atque provident, recusandae reiciendis exercitationem.
                          Veniam dolore omnis facere.
                        </p>

                        <div class="text-center">
                          <img
                            v-bind:src="
                              require('../../../assets/images/img-sample.png')
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
          </div>
        </div>
      </div>
    </section>
  <ModalCreateSupply></ModalCreateSupply>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { supply_collection } from "@/firebase/firebase";

export default {
  data() {
    return {
      container: null,
      isc: null,
      clase_isc: null,
      iscres: null,
      clase_iscres: null,
      supply: [],
    };
  },
  components: {
    ModalCreateSupply: defineAsyncComponent(() =>
      import("../../components/Supply/ModalCreateSupply.vue")
    ),
  },
  mounted() {
    this.supply = [];
    supply_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.supply.push({ id: item.id, data: item.data() })
        )
      );

    this.responsiveScreen();
  },

  methods: {
    responsiveScreen() {
      if (screen.width > 1500) {
        this.iscres = true;
        this.clase_iscres = true;
      } else {
        this.isc = true;
        this.clase_isc = true;
      }
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
.showcase-isc {
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
.showcase-isc video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt_isc {
  position: absolute;
  top: 10%;
  left: 0;
  transform: calc(-50%, -50%);
  width: 100%;
}
.logo-isc-os {
  width: 200px;
}
.logo-isc {
  margin-top: 15.5rem;
}
.title-modules {
  margin-left: 5rem;
  margin-top: 2.5rem;
}
.title-modules h3 {
  font-size: 21px;
  letter-spacing: 0.4rem;
}
.buttons-modules {
  margin-top: 0;
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 1000;
  scrollbar-gutter: stable both-edges;
  height: 420px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #ffffff;
  color: #000000;
  border-radius: 100%;
}
.nav-link {
  border: 2px solid #ffffff;
  width: 128px;
  height: 128px;
  border-radius: 100%;
  color: #ffffff;
  margin: 1rem;
}
.nav-item {
  width: 128px;
  height: 128px;
  margin: 1rem;
}
.nav-link:hover {
  border: 2px solid #ffffff;
  width: 140px;
  height: 140px;
  border-radius: 100%;
  color: #ffffff;
}
.nav-pills .nav-link {
  border: 2px solid #ffffff;
  border-radius: 100%;
}
.info-modules {
  margin-top: 5rem;
}
.icon-file {
  width: 10%;
}
.txt-info-modules {
  width: 80%;
  margin-left: 4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 1000;
  scrollbar-gutter: stable both-edges;
  height: 350px;
}
.txt-info-modules p {
  font-size: 13px;
}
.txt-info-modules img {
  width: 90%;
}
.btn-add {
  background: transparent;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
}
.btn-add-module {
  position: absolute;
  left: -11%;
  top: -7%;
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
.txt_isc_respon {
  position: absolute;
  top: 3%;
  left: 0;
  transform: calc(-50%, -50%);
  width: 100%;
}

.area-scrollarea {
  overflow: scroll;
  overflow-x: hidden;
}

.area-scrollarea::-webkit-scrollbar {
  -webkit-appearance: none;
}

.area-scrollarea::-webkit-scrollbar:vertical {
  width: 10px;
}

.area-scrollarea::-webkit-scrollbar-button:increment,
.area-scrollarea::-webkit-scrollbar-button {
  display: none;
}

.area-scrollarea::-webkit-scrollbar:horizontal {
  height: 10px;
}

.area-scrollarea::-webkit-scrollbar-thumb {
  background-color: #797979;
  /* border-radius: 20px; */
}

.area-scrollarea::-webkit-scrollbar-track {
  border-radius: 10px;
}
</style>
