<template>
  <div
    class="modal"
    id="update-vision"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <div class="row">
            <div class="col">
              <h5 class="modal-title" id="exampleModalLabel">Update vision</h5>
            </div>
            <div class="col d-flex justify-content-end">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-for="item in vision" v-bind:key="item.id">
            <div class="mb-3 mt-2">
              <p><strong>Current record:</strong> {{ item.data.title }}</p>
              <label for="title" class="form-label"> Update title:</label>
              <input
                v-model="title"
                type="text"
                class="form-control"
                required
              />
            </div>
            <!-- <div class="mb-3">
              <p><strong>Current record:</strong> {{ item.data.second }}</p>
              <label for="second" class="form-label"> Second tittle:</label>
              <input
                v-model="second"
                type="text"
                class="form-control"
                required
              />
            </div> -->
            <div class="mb-3">
              <p>
                <strong>Current record:</strong> {{ item.data.description }}
              </p>
              <label for="description" class="form-label">
                Update description:</label
              >
              <input
                v-model="description"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <p>
                <strong>Current record:</strong> {{ item.data.descriptions }}
              </p>
              <label for="descriptions" class="form-label">
                Update second description:</label
              >
              <input
                v-model="descriptions"
                type="text"
                class="form-control"
                required
              />
              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="updateVision(item.id)"
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
  </div>
</template>

<script>
import { vision_collection } from "@/firebase/firebase";
import Swal from "sweetalert2";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

export default {
  data() {
    return {
      title: "",
      second: "",
      description: "",
      descriptions: "",
      vision: [],
      // User data
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
  mounted() {
    this.vision = [];
    vision_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.vision.push({ id: item.id, data: item.data() })
        )
      );
  },
  methods: {
    getToBusinessUpdate() {
      this.$router.push({ name: "training_plan" });
    },
    mounted() {
      this.vision = [];
      vision_collection
        .get()
        .then((r) =>
          r.docs.map((item) =>
            this.vision.push({ id: item.id, data: item.data() })
          )
        );
    },
    // <----- Update Vision ---->
    async updateVision(id) {
      try {
        if (this.title != "") {
          vision_collection
            .doc(id)
            .update({ title: this.title })
            .then(() => this.$mount());
        }
        if (this.second != "") {
          vision_collection
            .doc(id)
            .update({ second: this.second })
            .then(() => this.$mount());
        }
        if (this.description != "") {
          vision_collection
            .doc(id)
            .update({ description: this.description })
            .then(() => this.$mount());
        }
        if (this.descriptions != "") {
          vision_collection
            .doc(id)
            .update({ descriptions: this.descriptions })
            .then(() => this.$mount());
        }
        Swal.fire("Updated", "Entry updated successfully", "success");
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
    // End Update Vision
  },
};
</script>

<style scoped>
.modal-header {
  display: block !important;
  background: #1b406e;
  background: linear-gradient(180deg, #1b406e 0%, #1b406e 48%, #1b406e 100%);
  color: #ffffff;
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
  border: transparent;
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
