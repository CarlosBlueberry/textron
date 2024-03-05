<template>
  <!-- @click="$router.push({ name: 'business_updates-detail', params: { id: item.id } })" -->
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div v-if="isLoading === false" class="business-panel">
    <div class="container p-0">
      <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
      <!-- Navbar menú -->
      <nav class="nav mt-5">
        <a
          class="nav-link text-light pointer"
          @click="$router.push({ name: 'admin_panel-business_updates' })"
          >Business Updates</a
        >
        <a
          @click="$router.push({ name: 'admin_panel-success_stories' })"
          class="nav-link text-light pointer"
          >Success Stories</a
        >
        <a
          @click="$router.push({ name: 'admin_panel-training_plan' })"
          class="nav-link text-light pointer"
          >Training Plan</a
        >
        <a
          @click="$router.push({ name: 'admin_panel-sharepoints' })"
          class="nav-link text-light pointer"
          >Sharepoints</a
        >
        <a
          @click="$router.push({ name: 'admin_panel-company' })"
          class="nav-link text-light pointer"
          >Company</a
        >
        <a
          @click="$router.push({ name: 'admin_panel-ios' })"
          class="nav-link text-light pointer"
          >IOS</a
        >
      </nav>
      <!-- Endx Navbar menú -->
      <hr />
      <h5 class="oExtraBold mt-5">Company</h5>
      <div class="row mt-5">
        <div class="col">
          <h6>About Our Company</h6>
          <div class="row mt-4">
            <div v-for="itemV in vision" v-bind:key="itemV.id" class="col-6">
              <a data-bs-toggle="modal" data-bs-target="#update-vision">
                <div class="card bg-dark boreder-table mb-3 pointer">
                  <div class="card-body">
                    <h5>VISION</h5>
                    <hr />
                    <p>Title: {{ itemV.data.title }}</p>
                    <p>Second titile: {{ itemV.data.second }}</p>
                    <p>
                      Description: <br />
                      {{ itemV.data.description }}
                    </p>
                    <p>
                      Second Description: <br />
                      {{ itemV.data.descriptions }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div v-for="itemM in mision" v-bind:key="itemM.id" class="col-6">
              <a data-bs-toggle="modal" data-bs-target="#update-mision">
                <div class="card bg-dark boreder-table mb-3 pointer">
                  <div class="card-body">
                    <h5>MISSION</h5>
                    <hr />
                    <p>Title: {{ itemM.data.title }}</p>
                    <p>Second titile: {{ itemM.data.second }}</p>
                    <p>
                      Description: <br />
                      {{ itemM.data.description }}
                    </p>
                    <p>
                      Second Description: <br />
                      {{ itemM.data.descriptions }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <h6>Strategic enablers</h6>
          <div class="row mt-4">
            <div v-for="itemE in enablers" v-bind:key="itemE.id" class="col-6">
              <a
                @click="openModalUpdate(itemE.id)"
                data-bs-toggle="modal"
                data-bs-target="#update-enablers"
              >
                <div class="card bg-dark boreder-table mb-3 pointer">
                  <div class="card-body">
                    <p>Title: {{ itemE.data.title }}</p>
                    <p>Subtitle: {{ itemE.data.subtitle }}</p>
                    <p>
                      Description: <br />
                      {{ itemE.data.text }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h6>Values</h6>
          <div class="row mt-4">
            <div
              v-for="itemVal in values"
              v-bind:key="itemVal.id"
              class="col-6"
            >
              <a data-bs-toggle="modal" data-bs-target="#update-values">
                <div class="card bg-dark boreder-table mb-3 pointer">
                  <div class="card-body">
                    <h5>VALUES</h5>
                    <hr />
                    <p>Value: {{ itemVal.data.one }}</p>
                    <p>Value: {{ itemVal.data.two }}</p>
                    <p>Value: {{ itemVal.data.three }}</p>
                    <p>Value: {{ itemVal.data.four }}</p>
                  </div>
                </div>
              </a>
            </div>
            <div v-for="itemAdd in add" v-bind:key="itemAdd.id" class="col-6">
              <a data-bs-toggle="modal" data-bs-target="#update-add">
                <div class="card bg-dark boreder-table mb-3 pointer">
                  <div class="card-body">
                    <h5>ADDITIONAL VALUES</h5>
                    <hr />
                    <p>
                      Value: <br />
                      {{ itemAdd.data.one }}
                    </p>
                    <p>
                      Value: <br />
                      {{ itemAdd.data.two }}
                    </p>
                    <p>
                      Value: <br />
                      {{ itemAdd.data.three }}
                    </p>
                    <p>
                      Value: <br />
                      {{ itemAdd.data.four }}
                    </p>
                    <p>
                      Value: <br />
                      {{ itemAdd.data.five }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <h6>Principles</h6>
            </div>
            <div class="col">
              <div class="d-flex justify-content-end">
                <button
                  class="btn btn-light"
                  data-bs-toggle="modal"
                  data-bs-target="#update-principle"
                >
                  New entry
                </button>
              </div>
            </div>
          </div>
          <div class="boreder-table mt-2 p-4">
            <div class="table-responsive">
              <table
                class="table text-light text-center align-middle border-dark"
              >
                <thead>
                  <tr>
                    <th scope="col">Principle</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="itemPrin in principles" v-bind:key="itemPrin.id">
                    <th class="p-2" scope="row">
                      <a
                        class="text-light"
                        :href="itemPrin.data.file"
                        target="_blank"
                        >{{ itemPrin.data.principle }}</a
                      >
                    </th>
                    <td class="p-2">
                      <div class="d-flex justify-content-center">
                        <div class="p-1">
                          <button @click="deleteData(itemPrin.id)" class="btn">
                            <img
                              v-bind:src="
                                require('../../../../assets/images/icon-trah.png')
                              "
                              alt="ISC user"
                              width="13"
                              class="img-fluid"
                            />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else id="center" class="main center">
    <div class="container p-0">
      <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
      <!-- Navbar menú -->
      <nav class="nav mt-5">
        <a
          class="nav-link text-light pointer"
          @click="$router.push({ name: 'admin_panel-business_updates' })"
          >Business Updates</a
        >
        <a class="nav-link text-light pointer" href="#">Success Stories</a>
        <a class="nav-link text-light pointer" href="#">Training Plan</a>
        <a class="nav-link text-light pointer" href="#">Sharepoints</a>
      </nav>
      <!-- Endx Navbar menú -->
      <hr />
      <h5 class="oExtraBold mt-5">Business Updates</h5>
    </div>
    <div class="py-5">
      <div class="text-center mt-5">
        <h3>Loading data ...</h3>
      </div>
    </div>
  </div>
  <ModalVision></ModalVision>
  <ModalMision></ModalMision>
  <ModalValues></ModalValues>
  <ModalAdd></ModalAdd>
  <!-- MODALS -->
  <!-- @click="openModalUpdateProject(itemP.id)" -->
  <div
    class="modal"
    id="update-enablers"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable text-light"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Update strategic enablers
          </h5>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn-close p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img
                v-bind:src="require('../../../../assets/images/close-btn.png')"
                width="15"
                alt="close"
                class="img"
              />
            </button>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="EnablersData != null">
            <div class="mb-3 mt-2">
              <p>
                <strong>Current record:</strong> {{ EnablersData.data.title }}
              </p>
              <label for="title" class="form-label"> Update Title:</label>
              <input
                v-model="entitle"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <p>
                <strong>Current record:</strong>
                {{ EnablersData.data.subtitle }}
              </p>
              <label for="second" class="form-label"> Second Title:</label>
              <input
                v-model="ensubtitle"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <p>
                <strong>Current record:</strong> {{ EnablersData.data.text }}
              </p>
              <label for="second" class="form-label"> Second Title:</label>
              <textarea
                v-model="entext"
                type="text"
                class="form-control"
                required
              ></textarea>
            </div>
            <div class="row mt-4">
              <div class="text-center">
                <button
                  @click="updateEnablers(EnablersData.id)"
                  type=""
                  class="btn btn-primary btn-green"
                >
                  <h6 class="pt-1 hRegular">Update</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal"
    id="update-principle"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable text-light"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New principle</h5>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn-close p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img
                v-bind:src="require('../../../../assets/images/close-btn.png')"
                width="15"
                alt="close"
                class="img"
              />
            </button>
          </div>
        </div>
        <div class="modal-body container">
          <form @submit.prevent="addPrinciple">
            <div class="mb-3 mt-2">
              <label for="title" class="form-label"> Principle:</label>
              <input
                v-model="principle"
                type="text"
                class="form-control"
                required
              />
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
            <div class="row mt-4">
              <div class="text-center">
                <button type="" class="btn btn-primary btn-green">
                  <h6 class="pt-1 hRegular">Save</h6>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  enablers_collection,
  vision_collection,
  mision_collection,
  values_collection,
  additional_collection,
  principles_collection,
} from "@/firebase/firebase";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { defineAsyncComponent } from "@vue/runtime-core";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import Swal from "sweetalert2";

export default {
  data() {
    return {
      enablers: [],
      mision: [],
      vision: [],
      values: [],
      add: [],
      principles: [],
      isLoading: true,
      dataSelected: null,
      entitle: "",
      ensubtitle: "",
      principle: "",
      entext: "",
      EnablersData: null,
    };
  },
  components: {
    ModalVision: defineAsyncComponent(() =>
      import("../../../components/Company/ModalVision.vue")
    ),
    ModalMision: defineAsyncComponent(() =>
      import("../../../components/Company/ModalMision.vue")
    ),
    ModalValues: defineAsyncComponent(() =>
      import("../../../components/Company/ModalValues.vue")
    ),
    ModalAdd: defineAsyncComponent(() =>
      import("../../../components/Company/ModalAdd.vue")
    ),
    Loading,
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
    async openModalUpdate(id) {
      enablers_collection
        .doc(id)
        .get()
        .then((r) => {
          this.EnablersData = {
            id: r.id,
            data: r.data(),
          };
        });
    },
    // <----- Update Enables ---->
    async updateEnablers(id) {
      try {
        if (this.entitle != "") {
          enablers_collection
            .doc(id)
            .update({ title: this.entitle })
            .then(() => this.$mount());
        }
        if (this.ensubtitle != "") {
          enablers_collection
            .doc(id)
            .update({ subtitle: this.ensubtitle })
            .then(() => this.$mount());
        }
        if (this.entext != "") {
          enablers_collection
            .doc(id)
            .update({ text: this.entext })
            .then(() => this.$mount());
        }
        Swal.fire("Updated", "Entry update successfully", "success");
        setTimeout(() => {
          this.$router.go(0);
        }, 5000);
      } catch (error) {
        Swal.fire("Updated", "Entry update failed", "error");
        setTimeout(() => {
          this.$router.go(0);
        }, 5000);
      }
    },
    // <----- CREATE NEW ENTRY ---->
    // async addPrinciple() {
    //   new Swal({
    //     title: "Please wait",
    //     allowOutsideClick: false,
    //   });
    //   Swal.showLoading();
    //   principles_collection
    //     .add({
    //       principle: this.principle,
    //     })
    //     .then(() => this.$mount());
    //   Swal.fire("Saved", "Entry registered successfully", "success");
    //   setTimeout(() => {
    //     this.$router.go(0);
    //   }, 5000);
    // },
    async addPrinciple() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();
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
            principles_collection
              .add({
                principle: this.principle,
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
          console.log("falta el archivo");
          Swal.fire("Saved", "File is required", "error");
        }
      } catch (error) {
        Swal.fire("Saved", "Error", "error");
        console.error(error);
      }
    },
    deleteData(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          principles_collection
            .doc(id)
            .delete()
            .then(() => this.$mount());
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setTimeout(() => {
            this.$router.go(0);
          }, 5000);
        }
      });
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.boreder-table {
  border: solid #939393 0.8px;
  border-radius: 15px;
}

.input-search {
  border-radius: 0;
  border-color: #707070;
  background-color: #000000;
  color: #fff;
}

.filters-select {
  background-color: #000000;
  color: #fff;
  border-radius: 0;

  width: 150px;
  background-image: url("~@/assets/images/arrow-down-w.png");
}

.filters-select-status {
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  border: solid white 0.1px;
  background-image: url("~@/assets/images/arrow-down-w.png");
}

/* Modal styles */
.modal-content {
  background-color: #000000;
  border-radius: 15px;
  border: solid white 0.1px;
}

.btn-close {
  background-image: none;
  color: #fff;
  opacity: 1;
}

.btn-green {
  background-color: #203464;
  border: transparent;
  color: #fff;
  border-radius: 0;
  width: 150px;
}
</style>
