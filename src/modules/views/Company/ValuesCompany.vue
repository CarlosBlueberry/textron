<template>
  <MediaQueryProvider> </MediaQueryProvider>
  <section class="showcase-values" id="showcase">
    <video
      v-bind:src="require('../../../assets/new_video/loop-values.mp4')"
      muted
      autoplay
    ></video>
    <div class="values">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                <img
                  v-bind:src="
                    require('../../../assets/images/logos/logo_textron.png')
                  "
                  alt=""
                  class="img-fluid logo-isc-os mb-5"
                />
                <h1 class="oLight space-words h4">
                  MAIN <br />
                  VALUES
                </h1>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-8 txt-values">
                <div class="row" v-for="itemV in values" v-bind:key="itemV.id">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                    <div class="">
                      <p class="h5 oRegular">&#x2022; {{ itemV.data.one }}</p>
                      <p class="h5 oRegular">&#x2022; {{ itemV.data.two }}</p>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <div class="">
                      <p class="h5 oRegular">&#x2022; {{ itemV.data.three }}</p>
                      <p class="h5 oRegular">&#x2022; {{ itemV.data.four }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-5 values-additional"
              >
                <div
                  class="txt-additional"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <div class="text-center">
                    <img
                      src="img/line-values-complete.png"
                      alt=""
                      class="img-fluid line-additional"
                    />
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 mt-5">
                      <div class="">
                        <h1 style="font-size: 25px" class="oExtraBold">
                          Additional <br />
                          values
                        </h1>
                        <div
                          class="oLight txt-main"
                          v-for="itemA in add"
                          v-bind:key="itemA.id"
                        >
                          <p style="line-height: 20px">
                            &#x2022; {{ itemA.data.one }}
                          </p>
                          <p style="line-height: 20px">
                            &#x2022; {{ itemA.data.two }}
                          </p>
                          <p style="line-height: 20px">
                            &#x2022; {{ itemA.data.three }}
                          </p>
                          <p style="line-height: 20px">
                            &#x2022; {{ itemA.data.four }}
                          </p>
                          <p style="line-height: 20px">
                            &#x2022; {{ itemA.data.five }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-sm-12 col-md-12 col-lg-1 values-additional-2"
              ></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-5 principles-div">
                <div
                  class="txt-principles area-scrollarea"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <!-- <img
                        src="img/line-values.png"
                        alt="Line whit point in the final"
                        class="img-fluid"
                      /> -->
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                      <h1 class="oExtraBold">Principles</h1>
                      <h6 class="oItalic">
                        (Please click on each <br />
                        principle to learn more)
                      </h6>
                      <div class="oLight txt-main ms-4">
                        <div v-for="itemP in principles" v-bind:key="itemP.id">
                          <a
                            class="text-light a_none_style"
                            :href="itemP.data.file"
                            target="_blank"
                          >
                            <p>&#x2022; {{ itemP.data.principle }}</p>
                          </a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5">
            <div class="txt-strategic">
              <div class="text-center pb-4">
                <h1 class="space-words oLight">STRATEGIC ENABLERS</h1>
              </div>
              <div class="row mt-5">
                <div class="">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                      <div v-for="itemE in enablers" v-bind:key="itemE.id">
                        <div class="" v-if="itemE.id == 'vAAbe2A8JyBO9NCS9khF'">
                          <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                          <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                          <h6 class="oLight">{{ itemE.data.text }}</h6>
                        </div>
                      </div>
                      <div v-for="itemE in enablers" v-bind:key="itemE.id">
                        <div
                          class="txt-priority"
                          v-if="itemE.id == '7PLpZPhTuI9Q7OKnNlFx'"
                        >
                          <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                          <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                          <h6 class="oLight">{{ itemE.data.text }}</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                      <div style="margin-top: 60%" class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/new_video/strategic-enablers.png')
                          "
                          alt=""
                          class="txt-strategic-img"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                      <div v-for="itemE in enablers" v-bind:key="itemE.id">
                        <div v-if="itemE.id == 'n2JASMtKE6u12cjr04Cy'" class="">
                          <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                          <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                          <h6 class="oLight">{{ itemE.data.text }}</h6>
                        </div>
                      </div>
                      <div v-for="itemE in enablers" v-bind:key="itemE.id">
                        <div
                          v-if="itemE.id == '4jNRn5yXfd5UHsSp0Gh1'"
                          class="txt-pi"
                        >
                          <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                          <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                          <h6 class="oLight">{{ itemE.data.text }}</h6>
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
    </div>
    <!-- <div class="values">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <div class="row">
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-4 values-additional"
              >
                <div
                  class=""
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  :class="[
                    { active: value, txt_values: class_value },
                    { active: isvalu, txt_value_responsive: class_isvalu },
                  ]"
                >
                  <h1 class="oLight space-words">
                    MAIN <br />
                    VALUES
                  </h1>
                  <div class="oLight txt-main">
                    <div v-for="itemV in values" v-bind:key="itemV.id">
                      <p>&#x2022; {{ itemV.data.one }}</p>
                      <p>&#x2022; {{ itemV.data.two }}</p>
                      <p>&#x2022; {{ itemV.data.three }}</p>
                      <p>&#x2022; {{ itemV.data.four }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="txt-additional"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  :class="[
                    { active: additional, txt_additional: class_additional },
                    {
                      active: is_additional,
                      txt_additional_responsive: class_is_additional,
                    },
                  ]"
                >
                  <h1 class="oLight space-words">
                    ADDITIONAL <br />
                    VALUES
                  </h1>
                  <div class="oLight txt-main">
                    <div v-for="itemA in add" v-bind:key="itemA.id">
                      <p>&#x2022; {{ itemA.data.one }}</p>
                      <p>&#x2022; {{ itemA.data.two }}</p>
                      <p>&#x2022; {{ itemA.data.three }}</p>
                      <p>&#x2022; {{ itemA.data.four }}</p>
                      <p>&#x2022; {{ itemA.data.five }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-2 values-additional-2"
              ></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  class="txt-principles area-scrollarea"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <h1 class="oLight space-words">PRINCIPLES</h1>
                  <h6 class="oItalic">
                    (Please click on each principle to learn more)
                  </h6>
                  <div class="oLight txt-main ms-4">
                    <div v-for="itemP in principles" v-bind:key="itemP.id">
                      <a
                        class="text-light a_none_style"
                        :href="itemP.data.file"
                        target="_blank"
                        ><p>&#x2022; {{ itemP.data.principle }}</p></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <div class="txt-strategic">
              <div class="text-center pb-4">
                <h1 class="space-words oLight">STRATEGIC ENABLERS</h1>
              </div>
              <div class="row mt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div v-for="itemE in enablers" v-bind:key="itemE.id">
                    <div v-if="itemE.id == 'vAAbe2A8JyBO9NCS9khF'">
                      <div class="">
                        <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                        <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                        <h6 class="oLight">{{ itemE.data.text }}</h6>
                      </div>
                    </div>
                  </div>
                  <div v-for="itemE in enablers" v-bind:key="itemE.id">
                    <div v-if="itemE.id == '7PLpZPhTuI9Q7OKnNlFx'">
                      <div class="txt-priority">
                        <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                        <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                        <h6 class="oLight">{{ itemE.data.text }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="text-center txt-strategic-img">
                    <img
                      v-bind:src="
                        require('../../../assets/images/strategic-enablers.png')
                      "
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div v-for="itemE in enablers" v-bind:key="itemE.id">
                    <div v-if="itemE.id == 'n2JASMtKE6u12cjr04Cy'">
                      <div class="">
                        <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                        <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                        <h6 class="oLight">{{ itemE.data.text }}</h6>
                      </div>
                    </div>
                  </div>
                  <div v-for="itemE in enablers" v-bind:key="itemE.id">
                    <div v-if="itemE.id == '4jNRn5yXfd5UHsSp0Gh1'">
                      <div class="txt-pi">
                        <h4 class="oExtraBold">{{ itemE.data.title }}</h4>
                        <h5 class="oRegular">{{ itemE.data.subtitle }}</h5>
                        <h6 class="oLight">{{ itemE.data.text }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="hr-bottom pt-5">
      <div class="container">
        <div class="row">
          <hr />
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="d-flex cursor" @click="getAbout">
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
          <div class="col-12 col-sm-12 col-md-12 col-lg-6"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="d-flex justify-content-end cursor" @click="getVision">
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
                  Back to <b class="oExtraBold">Vision</b>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  additional_collection,
  principles_collection,
  enablers_collection,
  values_collection,
} from "@/firebase/firebase";

export default {
  data() {
    return {
      values: [],
      enablers: [],
      add: [],
      principles: [],
      valu: null,
      class_value: null,
      isvalu: null,
      class_isvalu: null,
      additional: null,
      class_additional: null,
      is_additional: null,
      class_is_additional: null,
    };
  },
  mounted() {
    this.add = [];
    additional_collection
      .get()
      .then((r) =>
        r.docs.map((itemA) =>
          this.add.push({ id: itemA.id, data: itemA.data() })
        )
      );
    this.principles = [];
    principles_collection
      .get()
      .then((r) =>
        r.docs.map((itemP) =>
          this.principles.push({ id: itemP.id, data: itemP.data() })
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
    this.values = [];
    values_collection
      .get()
      .then((r) =>
        r.docs.map((itemV) =>
          this.values.push({ id: itemV.id, data: itemV.data() })
        )
      );
    this.responsiveScreen();
  },
  methods: {
    getMission() {
      this.$router.push({ name: "Mission" });
    },
    getAbout() {
      this.$router.push({ name: "About_Company" });
    },
    getVision() {
      this.$router.push({ name: "Vision" });
    },
    responsiveScreen() {
      if (screen.width <= 1500) {
        this.valu = true;
        this.class_value = true;
        this.additional = true;
        this.class_additional = true;
      } else {
        this.isvalu = true;
        this.class_isvalu = true;
        this.is_additional = true;
        this.class_is_additional = true;
      }
    },
  },
};
</script>

<style scoped>
.txt-additional {
  margin-top: 10rem;
}

.a_none_style {
  text-decoration: none;
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
.cursor {
  cursor: pointer;
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
.showcase-values {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 120vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase-values video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.values {
  position: absolute;
  width: 100%;
  top: 2%;
  left: 0;
  transform: calc(-50%, -50%);
}
.txt-values {
  margin-top: 6rem;
  text-align: start;
}
.txt-values h1 {
  font-size: 25px;
}

.space-words {
  letter-spacing: 0.8rem;
}
.txt-main {
  line-height: 80%;
}
.txt_additional {
  margin-top: 8rem;
  left: 3%;
  transform: calc(-50%, -50%);
  text-align: end;
}
.txt_additional p {
  font-size: 13px;
}
.txt_additional h1 {
  font-size: 20px;
}
.txt-principles {
  margin-top: 3rem;
  text-align: start;
  z-index: 1000;
  width: 400px;
  height: 380px;
}
.txt-principles p,
h6 {
  font-size: 13px;
}
.txt-principles h1 {
  font-size: 25px;
}
.txt-strategic {
  margin-top: 5rem;
  z-index: 100;
}
.img-cont {
  margin-top: 250px;
}
.txt-strategic-img {
  position: absolute;
  width: 180%;
  left: -55%;

  top: 40%;
  z-index: 1;
}
.txt-strategic h1 {
  font-size: 25px;
}
.txt-strategic h6 {
  font-size: 13px;
}
.txt-strategic h5 {
  font-size: 18px;
}
.txt-priority {
  margin-top: 16rem;
}
.txt-pi {
  margin-top: 15rem;
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
.txt_value_responsive {
  text-align: start;
  margin-top: 5rem;
}
.txt_value_responsive p {
  font-size: 13px;
}
.txt_value_responsive h1 {
  font-size: 25px;
}
.txt_additional_responsive {
  margin-top: 12rem;
  text-align: start;
  left: 0;
  transform: calc(-50%, -50%);
}
.txt_additional_responsive p {
  font-size: 13px;
}
.txt_additional_responsive h1 {
  font-size: 20px;
}
</style>
