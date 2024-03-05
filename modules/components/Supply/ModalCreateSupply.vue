<template>
  <div
    class="modal fade"
    id="add-supply"
    tabindex="-1"
    aria-labelledby="add-updateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, color_artic: clase_artic },
            { active: cushman, color_cushman: clase_cushman },
            { active: jacobsen, color_jacobsen: clase_jacobsen },
            { active: gse, color_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-2">
              <div class="d-flex justify-content-start">
                <div v-if="user" class="">
                  <img
                    v-if="user.email == 'artic_cat@gmail.com'"
                    v-bind:src="
                      require('../../../assets/images/artic-logo.gif')
                    "
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'cushman@gmail.com'"
                    v-bind:src="
                      require('../../../assets/images/cushman-logo.gif')
                    "
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'jacobsen@gmail.com'"
                    v-bind:src="require('../../../assets/images/jacobsen.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'gse@gmail.com'"
                    v-bind:src="require('../../../assets/images/gse-logo.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'textron@gmail.com'"
                    v-bind:src="require('../../../assets/images/tx2.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else
                    v-bind:src="require('../../../assets/images/ezgo.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="text-center">
                <h3 class="oExtraBold text-light">Submit your new module</h3>
              </div>
            </div>
            <div class="col-1">
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn-close p-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img
                    v-bind:src="require('../../../assets/images/close-btn.png')"
                    alt="close"
                    class="img"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                <div class="">
                  <form
                    @submit.prevent="addBusiness"
                    class="form-add-update oRegular"
                  >
                    <div class="mb-3">
                      <label for="title" class="form-label"
                        >Create new module:</label
                      >
                      <input
                        v-model="title"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <div class="">
                        <label for="description" class="mb-3">Content:</label>
                        <textarea
                          v-model="description"
                          class="form-control"
                          id="description"
                          name="description"
                          style="height: 400px"
                        ></textarea>
                      </div>
                    </div>
                    <div class="mb-5">
                      <h6 class="">Upload your main image:</h6>
                      <div class="mb-3">
                        <input
                          style="display: none"
                          class="selectimage"
                          @change="SelectImage"
                          ref="imgSelector"
                          accept="image/png, image/jpeg"
                          type="file"
                          name="img"
                          id="img"
                        />
                      </div>
                      <button
                        @click="onSelectImage"
                        type="button"
                        class="btn btn-primary btn-green"
                        :class="[
                          { active: artic, color_artic: clase_artic },
                          { active: cushman, color_cushman: clase_cushman },
                          { active: jacobsen, color_jacobsen: clase_jacobsen },
                          { active: gse, color_gse: clase_gse },
                        ]"
                      >
                        <h6 class="pt-1 hRegular">Choose file</h6>
                      </button>
                    </div>
                    <div class="mb-5">
                      <h6 class="">Upload your pdf file:</h6>
                      <div class="mb-3">
                        <div class="input-group mb-3">
                          <label class="input-group-text" for="inputGroupFile01"
                            >Upload</label
                          >
                          <input
                            ref="cedulaTrabajador"
                            accept="application/pdf"
                            type="file"
                            class="form-control"
                            id="file"
                            name="file"
                          />
                        </div>
                      </div>
                    </div>
                    <div v-if="localImage" class="mb-5">
                      <div class="text-center">
                        <h6 class="">Selected image:</h6>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          width="300"
                          height="300"
                          class="img-yhumbnail"
                          :src="localImage"
                          alt="entry-picture"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="row mt-4">
                      <div class="text-center">
                        <button
                          type=""
                          class="btn btn-primary btn-green"
                          :class="[
                            { active: artic, color_artic: clase_artic },
                            { active: cushman, color_cushman: clase_cushman },
                            {
                              active: jacobsen,
                              color_jacobsen: clase_jacobsen,
                            },
                            { active: gse, color_gse: clase_gse },
                          ]"
                        >
                          <h6 class="pt-1 hRegular">Submit</h6>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supply_collection } from "@/firebase/firebase";
import uploadImage from "../../helpers/uploadImages";
import Swal from "sweetalert2";
require("firebase/compat/auth");
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export default {
  data() {
    return {
      localImage: null,
      title: null,
      work: null,
      departament: null,
      company: null,
      description: null,
      img: null,
      file: null,
      downloadUrl: "",
      training: [],
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
  mounted() {
    this.training = [];
    supply_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.training.push({ id: item.id, data: item.data() })
        )
      );
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
    getToBusinessUpdate() {
      this.$router.push({ name: "training_plan" });
    },
    mounted() {
      this.training = [];
      supply_collection
        .get()
        .then((r) =>
          r.docs.map((item) =>
            this.training.push({ id: item.id, data: item.data() })
          )
        );
    },
    // <----- CREATE NEW ENTRY ---->
    async addBusiness() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const picture = await uploadImage(this.img);
      try {
        // Cargar archivo
        const { files } = this.$refs.cedulaTrabajador;
        // this.loading = true;
        const file = files[0];
        if (file) {
          const isPdf = file.type === "application/pdf";
          if (isPdf) {
            const response = await firebase
              .storage()
              .ref(`pdfs/${file.name}`)
              .put(file);
            const url = await response.ref.getDownloadURL();
            console.log("archivo disponible en ", url);
            // this.downloadUrl = ;
            // Archivo cargado
            supply_collection
              .add({
                title: this.title,
                departament: this.description,
                img: picture,
                file: url,
              })
              .then(() => this.$mount());
            Swal.fire("Saved", "Entry registered successfully", "success");
            setTimeout(() => {
              this.$router.go(0);
            }, 5000);

          } else {
            Swal.fire("Saved", "Invalid file", "error");
            console.log("Archivo no valido");
          }
        } else {
          Swal.fire("Saved", "File is required", "error");
          console.log("falta el archivo");
        }
      } catch (error) {
        Swal.fire("Saved", "Error", "error");
        console.error(error);
      }
    },
    // <----- SELECT IMAGE ---->
    SelectImage(event) {
      const file = event.target.files[0];

      if (!file) {
        this.localImage = null;
        this.img = null;
        return;
      }
      this.img = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    // <----- ON SELECTED IMAGE ---->
    onSelectImage() {
      this.$refs.imgSelector.click();
    },
  },
};
</script>

<style scoped>
.modal-header {
  display: block !important;
  background: #1b406e;
  background: linear-gradient(180deg, #1b406e 0%, #1b406e 48%, #1b406e 100%);
  color: white;
  border-radius: 0;
  border: transparent;
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

.modal-content {
  background-color: #ffffff;
  border-radius: 0;
  color: #5a5a5a;
  border: solid #e3e3e3 1px;
}

.logo-add-update {
  width: 90px;
  margin-right: 6rem;
}

.btn-close {
  background-image: none;
  color: #fff;
  opacity: 1;
}

.form-add-update input {
  border-radius: 0;
}

.images-add-update {
  width: 400px;
  overflow: hidden;
  background: #ffffff;
}

.images-add-update label {
  margin: 0;
  padding: 10px;
  margin-left: 18.6rem;
  width: auto;
  max-width: 300px;
  background-color: #5a5a5a;
  border: none;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

.images-add-update label:hover {
  background: #adadad;
}

.btn-green {
  background-color: #1b406e;
  border: transparent;
  color: #fff;
  border-radius: 0;
  width: 150px;
}
</style>
