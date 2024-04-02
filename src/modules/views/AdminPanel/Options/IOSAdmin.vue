<template>
  <!-- @click="$router.push({ name: 'business_updates-detail', params: { id: item.id } })" -->
  <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" />
  <div v-if="isLoading === false" class="business-panel">
    <div class="container p-0">
      <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
      <!-- Navbar menú -->
      <nav class="nav mt-5">
        <a class="nav-link text-light pointer" @click="$router.push({ name: 'admin_panel-business_updates' })">Business
          Updates</a>
        <a @click="$router.push({ name: 'admin_panel-success_stories' })" class="nav-link text-light pointer">Success
          Stories</a>
        <a @click="$router.push({ name: 'admin_panel-training_plan' })" class="nav-link text-light pointer">Training
          Plan</a>
        <a @click="$router.push({ name: 'admin_panel-sharepoints' })" class="nav-link text-light pointer">Sharepoints</a>
        <a @click="$router.push({ name: 'admin_panel-company' })" class="nav-link text-light pointer">Company</a>
        <a @click="$router.push({ name: 'admin_panel-ios' })" class="nav-link text-light pointer">IOS</a>
      </nav>
      <!-- Endx Navbar menú -->
      <hr />
      <h5 class="oExtraBold mt-5">IOS</h5>
      <div class="row mt-5">
        <div class="col-12 col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          <form action="">
            <div class="input-group mb-5 mt-4">
              <input type="text" class="form-control input-search" placeholder="Please, enter a title"
                aria-label="Please, enter a keyword" aria-describedby="basic-addon2" v-model="searchTitle" />
            </div>
          </form>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
      </div>
      <div class="boreder-table mt-3 p-4">
        <div class="table-responsive">
          <table class="table text-light text-center align-middle border-dark">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Link</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filterResults" v-bind:key="item.id">
                <td class="p-2">{{ item.data.title }}</td>
                <td class="p-2">
                  <a class="a_none_style" :href="item.data.file" target="_blank">See Pdf</a>
                </td>
                <td class="p-2">
                  <div class="d-flex justify-content-center">
                    <div class="p-1">
                      <button @click="showModalData(item.id)" type="button" class="btn" data-bs-toggle="modal"
                        data-bs-target="#editarRegistro">
                        <img v-bind:src="require('../../../../assets/images/icon-edit.png')
                          " alt="ISC user" width="13" class="img-fluid" />
                      </button>
                    </div>
                    <div class="p-1">
                      <button @click="deleteData(item.id)" class="btn">
                        <img v-bind:src="require('../../../../assets/images/icon-trah.png')
                          " alt="ISC user" width="13" class="img-fluid" />
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
  <div v-else id="center" class="main center">
    <div class="container p-0">
      <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
      <!-- Navbar menú -->

      <!-- Endx Navbar menú -->
      <hr />
      <h5 class="oExtraBold mt-5">IOS</h5>
    </div>
    <div class="py-5">
      <div class="text-center mt-5">
        <h3>Loading data ...</h3>
      </div>
    </div>
  </div>

  <!-- MODALS -->
  <div class="modal fade" id="editarRegistro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update entry</h5>
          <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close">
            <img v-bind:src="require('../../../../assets/images/close-btn.png')" width="15" alt="close" class="img" />
          </button>
        </div>
        <div class="modal-body container">
          <div v-if="dataSelected != null">
            <form action="">
              <div class="mb-3">
                <label for="title" class="form-label">Update module</label>
                <input v-model="title" type="text" class="form-control" id="title" name="title" required />
              </div>
              <div class="mb-3">
                <div class="">
                  <label for="description" class="mb-3">Update content:</label>
                  <textarea v-model="description" class="form-control" id="description" name="description"
                    style="height: 400px">
                  </textarea>
                </div>
              </div>
              <div class="mb-5">
                <div class="row">
                  <div class="col">
                    <h6 class="">Upload new image:</h6>
                    <div class="mb-3">
                      <input style="display: none" class="selectimage" @change="SelectImage" ref="imgSelector"
                        accept="image/png, image/jpeg" type="file" name="img" id="img" />
                      <button @click="onSelectImage" type="button" class="btn btn-primary btn-green mt-3">
                        <h6 class="pt-1 hRegular">Choose file</h6>
                      </button>
                    </div>
                  </div>
                  <div class="col">
                    <p class="">Current image:</p>
                    <img v-bind:src="dataSelected.data.img" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <h6 class="">Upload your pdf file:</h6>
                <div class="mb-3">
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload</label>
                    <input ref="cedulaTrabajador" accept="application/pdf" type="file" class="form-control" id="file"
                      name="file" />
                  </div>
                </div>
              </div>
              <div v-if="localImage" class="mb-5">
                <div class="text-center">
                  <h6 class="">Selected image:</h6>
                </div>
                <div class="d-flex justify-content-center">
                  <img width="300" height="300" class="img-yhumbnail" :src="localImage" alt="entry-picture" />
                </div>
              </div>
              <br />
              <div class="row mt-4">
                <div class="text-center">
                  <button @click.prevent="updateIOS(dataSelected.id)" type="" class="btn btn-primary btn-green">
                    <h6 class="pt-1 hRegular">Update</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supply_collection } from "@/firebase/firebase";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import Swal from "sweetalert2";
import uploadImage from "../../../helpers/uploadImages";
import firebase from "firebase/compat/app";

export default {
  data() {
    return {
      title: "",
      description: "",
      sharepoints: [],
      searchTitle: "",
      searchStatus: "",
      statusUpdate: "",
      isLoading: true,
      dataSelected: null,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.Preload();
  },
  computed: {
    filterResults: function () {
      return this.filterProductsByName(this.sharepoints);
    },
  },
  methods: {
    async Preload() {
      this.isLoading = true; // Inicia la carga
      this.sharepoints = []; // Limpia los datos existentes

      // Lógica para cargar los datos
      supply_collection
        .get()
        .then((r) =>
          r.docs.map((item) =>
            this.sharepoints.push({ id: item.id, data: item.data() })
          )
        );

      // Simular la carga durante 2 segundos
      setTimeout(() => {
        this.isLoading = false; // Finaliza la carga
      }, 2000);
    },
    filterProductsByName: function (sharepoints) {
      return sharepoints.filter(
        (item) =>
          !item.data.title.toLowerCase().indexOf(this.searchTitle.toLowerCase())
      );
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
          supply_collection
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
    showModalData(id) {
      supply_collection
        .doc(id)
        .get()
        .then((r) => {
          this.dataSelected = {
            id: r.id,
            data: r.data(),
          };
          this.title = this.dataSelected.data.title;
          this.description = this.dataSelected.data.departament;
          console.log(this.description);
        });
    },
    updateStatus(id) {
      supply_collection
        .doc(id)
        .update({ status: this.statusUpdate })
        .then(() => this.$mount());
      Swal.fire("Updated", "Entry update successfully", "success");
      setTimeout(() => {
        this.$router.go(0);
      }, 5000);
    },

    async updateIOS(id) {
      try {
        const picture = await uploadImage(this.img);

        const { files } = this.$refs.cedulaTrabajador;
        const file = files[0];

        if (file) {
          const isPdf = file.type === "application/pdf";
          if (isPdf) {
            const response = await firebase.storage().ref(`pdfs/${file.name}`).put(file);
            const url = await response.ref.getDownloadURL();

            if (picture == null && url == null) {
              await supply_collection.doc(id).update({
                title: this.title,
                departament: this.description,
              }).then(() => { this.closeModal('editarRegistro'); this.Preload(); });
            } else if (picture != null && url == null) {
              await supply_collection.doc(id).update({
                title: this.title,
                departament: this.description,
                img: picture,
              }).then(() => { this.closeModal('editarRegistro'); this.Preload(); });
            } else if (picture == null && url != null) {
              await supply_collection.doc(id).update({
                title: this.title,
                departament: this.description,
                file: url,
              }).then(() => { this.closeModal('editarRegistro'); this.Preload(); });
            } else {
              await supply_collection.doc(id).update({
                title: this.title,
                departament: this.description,
                img: picture,
                file: url,
              }).then(() => { this.closeModal('editarRegistro'); this.Preload(); });
            }
          } else {
            console.log("Archivo no válido");
          }
        } else {
          console.log("Falta el archivo");
          if (picture == null) {
            await supply_collection.doc(id).update({
              title: this.title,
              departament: this.description,
            }).then(() => { this.closeModal('editarRegistro'); this.Preload(); });
          } else {
            await supply_collection.doc(id).update({
              title: this.title,
              departament: this.description,
              img: picture,
            }).then(() => { this.closeModal('editarRegistro'); this.Preload(); });
          }
        }

      } catch (error) {
        console.error(error);
        // Aquí puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario.
      }
    },
    closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('style', 'display: none');
        const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (modalBackdrop) {
          document.body.removeChild(modalBackdrop);
        }
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
