<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div v-if="isLoading === false">
    <div
      class="sharepoin py-3"
      :class="[
        { active: artic, sharepoint_artic: clase_artic },
        { active: cushman, sharepoint_cushman: clase_cushman },
        { active: jacobsen, sharepoint_jacobsen: clase_jacobsen },
        { active: gse, sharepoint_gse: clase_gse },
        { active: textron, sharepoint_textron: clase_textron },
        { active: ezgo, sharepoint_ezgo: clase_ezgo },
      ]"
    >
      <button class="btn flotante" @click="saveData()">
        <img
          v-bind:src="require('../../../../../assets/images/save_icon.png')"
          class="img-fluid"
          width="35"
        />
      </button>
      <div class="container-fluid">
        <h1>SCORECARD | BY FUNCTION</h1>
        <hr />
        <div class="row mb-5 mt-3">
          <div class="col-2"><h3>Scorecard menu</h3></div>
          <div class="col-1" style="cursor: pointer">
            <h4 @click="getToExcel">General</h4>
          </div>
          <div class="col-2" style="cursor: pointer">
            <h4 @click="getToByExcel">By Function</h4>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div class="container">
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th scope="row">
                      <img
                        v-bind:src="
                          require('../../../../../assets/images/up_row.png')
                        "
                        width="20"
                        alt=""
                        class="image-fluid"
                      />
                    </th>
                    <td>B/(W) positive</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                        v-bind:src="
                          require('../../../../../assets/images/down_row.png')
                        "
                        width="20"
                        alt=""
                        class="image-fluid"
                      />
                    </th>
                    <td>B/(W) negative</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-2">
            <div class="container">
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <td>
                      <input
                        class="input_table_up"
                        id=""
                        readonly
                        type="text"
                        value="Plan"
                      />
                      <input
                        readonly
                        class="input_table_down"
                        type="text"
                        value="Actual"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-for="ec in excel_category" v-bind:key="ec.id">
          <div id="sidebarMenuExcel" class="mt-5">
            <div class="row">
              <div class="col-1">
                <div class="barra_lateral text-center">
                  <br />
                  <h1>{{ ec.data.category }}</h1>
                </div>
              </div>
              <div class="col-11">
                <div v-if="ec.data.category == 'V'" class="p-4">
                  <button
                    class="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-entry"
                  >
                    New entry
                  </button>
                </div>
                <div class="d-flex">
                  <div class="p-3">
                    <div class="mt-5"></div>
                    <div v-for="esub in excel_subcategory" v-bind:key="esub.id">
                      <div v-if="ec.id == esub.data.id_category">
                        <div class="border" v-if="esub.data.type == 'two'">
                          <div
                            style="
                              background-color: #e8e8e8;
                              height: 67.5px;
                              width: 300px;
                            "
                            class="p-2 border text-dark d-flex"
                          >
                            <a
                              style="
                                margin-right: 10px;
                                margin-top: 15px;
                                cursor: pointer;
                              "
                              v-if="ec.data.category == 'V'"
                              @click="deleteData(esub.id)"
                              class="text-danger"
                            >
                              X
                            </a>
                            <div
                              style="margin-top: 15px"
                              class="tooltip-container"
                            >
                              <span class="tooltip-text">
                                <div class="container">
                                  {{ esub.data.desc }}
                                </div>
                              </span>
                              <a
                                @click="showModalData(item.id)"
                                data-bs-toggle="modal"
                                data-bs-target="#editarRegistro"
                                style="text-decoration: none"
                                class="text-dark"
                              >
                                {{ esub.data.name }} |
                                <span>{{ esub.data.formula }}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <div
                            style="background-color: #e8e8e8; height: 39px"
                            class="p-2 border text-dark d-flex"
                          >
                            <a
                              style="margin-right: 10px; cursor: pointer"
                              v-if="ec.data.category == 'V'"
                              @click="deleteData(esub.id)"
                              class="text-danger"
                            >
                              X
                            </a>
                            <div class="tooltip-container">
                              <span class="tooltip-text">
                                <div class="container">
                                  {{ esub.data.desc }}
                                </div>
                              </span>
                              <a
                                @click="showModalData(item.id)"
                                data-bs-toggle="modal"
                                data-bs-target="#editarRegistro"
                                style="text-decoration: none"
                                class="text-dark"
                              >
                                {{ esub.data.name }} |
                                <span>{{ esub.data.formula }}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <!-- <table
                      class="table table-bordered border-dark align-middle"
                    >
                      <tbody>
                        <div
                          v-for="esub in excel_subcategory"
                          v-bind:key="esub.id"
                        >
                          <tr
                            class="border"
                            v-if="ec.id == esub.data.id_category"
                          >
                            <div v-if="esub.data.type == 'two'">
                              <th
                                style="padding: 22px; width: 500px"
                                scope="row "
                              >
                                <div class="d-flex">
                                  <a
                                    style="margin-right: 10px; cursor: pointer"
                                    v-if="ec.data.category == 'V'"
                                    @click="deleteData(esub.id)"
                                    class="text-danger"
                                  >
                                    X
                                  </a>
                                  <div class="tooltip-container">
                                    <span class="tooltip-text">
                                      <div class="container">
                                        {{ esub.data.desc }}
                                      </div>
                                    </span>
                                    <a
                                      @click="showModalData(item.id)"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editarRegistro"
                                      style="text-decoration: none"
                                      class="text-dark"
                                    >
                                      {{ esub.data.name }}
                                    </a>
                                  </div>
                                </div>
                              </th>
                              <td class="text-center p-3">
                                {{ esub.data.formula }}
                              </td>
                            </div>
                            <div v-else>
                              <th
                                style="padding: 10px; width: 500px"
                                scope="row "
                              >
                                <div class="tooltip-container">
                                  <span class="tooltip-text">{{
                                    esub.data.desc
                                  }}</span>
                                  {{ esub.data.name }}
                                </div>
                              </th>
                              <td class="text-center p-2">
                                {{ esub.data.formula }}
                              </td>
                            </div>
                          </tr>
                        </div>
                      </tbody>
                    </table> -->
                  </div>
                  <div class="d-flex scrollmenu">
                    <div class="p-3">
                      <table
                        class="table table-bordered border-dark align-middle background_table_space"
                      >
                        <thead>
                          <tr class="text-center">
                            <th scope="col" class="casillas_intermedias">Q1</th>
                            <th scope="col" class="casillas_intermedias">Q2</th>
                            <th scope="col" class="casillas_intermedias">Q3</th>
                            <th scope="col" class="casillas_intermedias">Q4</th>
                            <th
                              colspan="2"
                              scope="col"
                              class="casillas_intermedias"
                            >
                              B/(W)
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="esub in excel_subcategory"
                          v-bind:key="esub.id"
                        >
                          <tr v-if="ec.id == esub.data.id_category">
                            <!-- Dos input -->
                            <td v-if="esub.data.type == 'two'">
                              <input
                                class="input_table_up"
                                :id="esub.id + 'Q1' + 'p'"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'Q1' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                :id="esub.id + 'Q2' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'Q2' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                :id="esub.id + 'Q3' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'Q3' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                :id="esub.id + 'Q4' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'Q4' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <!-- Un input -->
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'Q1' + 'one'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'Q2' + 'one'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'Q3' + 'one'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'Q4' + 'one'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>

                            <!-- Imagen -->
                            <td>
                              <input
                                :id="esub.id + 'Q' + 'bw'"
                                class="input_table_down"
                                type="hidden"
                                value=""
                              />
                              <input
                                v-if="esub.data.type == 'two'"
                                :id="esub.id + 'Q' + 'bwr'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td>
                              <input
                                type="hidden"
                                :id="esub.id + 'Q4' + 'p_v1'"
                              />
                              <input
                                type="hidden"
                                :id="esub.id + 'Q' + 'bw_v1'"
                              />

                              <div
                                v-if="
                                  esub.data.id_category ==
                                  'srOoNiymKqnCg8yPqs5d'
                                "
                              >
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'up'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/up_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'down'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/down_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                              </div>
                              <div v-else>
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'up'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/down_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'down'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/up_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                              </div>

                              <div :id="esub.id + 'block'">
                                <img
                                  style="display: none"
                                  v-bind:src="
                                    require('../../../../../assets/images/down_row.png')
                                  "
                                  width="20"
                                  alt=""
                                  class="image-fluid"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="p-3">
                      <table
                        class="table table-bordered border-dark align-middle background_table_space"
                      >
                        <thead>
                          <tr class="text-center">
                            <th scope="col" class="casillas_intermedias">M1</th>
                            <th scope="col" class="casillas_intermedias">M2</th>
                            <th scope="col" class="casillas_intermedias">M3</th>
                            <th
                              colspan="2"
                              scope="col"
                              class="casillas_intermedias"
                            >
                              B/(W)
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="esub in excel_subcategory"
                          v-bind:key="esub.id"
                        >
                          <tr v-if="ec.id == esub.data.id_category">
                            <!-- Dos input -->
                            <td v-if="esub.data.type == 'two'">
                              <input
                                :id="esub.id + 'M1' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'M1' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                :id="esub.id + 'M2' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'M2' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                :id="esub.id + 'M3' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                :id="esub.id + 'M3' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>

                            <!-- Un input -->
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'M1' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'M2' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                :id="esub.id + 'M3' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <!-- Imagen -->
                            <td>
                              <input
                                :id="esub.id + 'M' + 'bw'"
                                class="input_table_down"
                                type="hidden"
                                value=""
                              />
                              <input
                                v-if="esub.data.type == 'two'"
                                :id="esub.id + 'M' + 'bwr'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td>
                              <input
                                type="hidden"
                                :id="esub.id + 'M3' + 'p_v1'"
                              />
                              <input
                                type="hidden"
                                :id="esub.id + 'M' + 'bw_v1'"
                              />
                              <div
                                v-if="
                                  esub.data.id_category ==
                                  'srOoNiymKqnCg8yPqs5d'
                                "
                              >
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'up'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/up_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'down'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/down_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                              </div>
                              <div v-else>
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'upm'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/down_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                                <div
                                  v-if="esub.data.type == 'two'"
                                  style="display: none"
                                  :id="esub.id + 'downm'"
                                >
                                  <img
                                    v-bind:src="
                                      require('../../../../../assets/images/up_row.png')
                                    "
                                    width="20"
                                    alt=""
                                    class="image-fluid"
                                  />
                                </div>
                              </div>

                              <div :id="esub.id + 'blockm'">
                                <img
                                  style="display: none"
                                  v-bind:src="
                                    require('../../../../../assets/images/down_row.png')
                                  "
                                  width="20"
                                  alt=""
                                  class="image-fluid"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="p-3">
                      <table
                        class="table table-bordered border-dark align-middle background_table_space"
                      >
                        <thead>
                          <tr class="text-center">
                            <th scope="col" class="casillas_intermedias">W1</th>
                            <th scope="col" class="casillas_intermedias">W2</th>
                            <th scope="col" class="casillas_intermedias">W3</th>
                            <th scope="col" class="casillas_intermedias">W4</th>
                            <th scope="col" class="casillas_intermedias">W5</th>
                            <th
                              colspan="2"
                              scope="col"
                              class="casillas_intermedias"
                            >
                              B/(W)
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="esub in excel_subcategory"
                          v-bind:key="esub.id"
                        >
                          <tr v-if="ec.id == esub.data.id_category">
                            <!-- Dos input -->
                            <td v-if="esub.data.type == 'two'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W1' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W1' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W2' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W2' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                v-if="
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W3' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W3' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W4' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W4' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <div
                                v-if="
                                  esub.data.name == 'COPQ' ||
                                  esub.data.name == 'Inventory turns' ||
                                  esub.data.name == 'Inventory $' ||
                                  esub.data.name == 'Engagement' ||
                                  esub.data.name == 'ISC diversity' ||
                                  esub.data.name == 'Attrition' ||
                                  esub.data.name == 'HC Direct' ||
                                  esub.data.name == 'HC Indirect' ||
                                  esub.data.name == 'Capex' ||
                                  esub.data.name == 'Work systems' ||
                                  esub.data.name == '5S' ||
                                  esub.data.name == 'Transformation plan' ||
                                  esub.data.name == 'Hoshin Kanri'
                                "
                                style="height: 53px"
                              ></div>
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W5' + 'p'"
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                class="m-0"
                              />
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W5' + 'a'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <!-- Un input -->
                            <td v-if="esub.data.type == 'one'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W1' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W2' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W3' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W4' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W5' + 'o'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>

                            <!-- Imagen -->
                            <td>
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri'
                                "
                                :id="esub.id + 'W' + 'bw'"
                                class="input_table_down"
                                type="hidden"
                                value=""
                              />
                              <input
                                v-if="
                                  esub.data.name != 'Airfreight' &&
                                  esub.data.name != 'Inflation' &&
                                  esub.data.name != 'Supplier chargeback' &&
                                  esub.data.name != 'Inbound expedites' &&
                                  esub.data.name != 'PPV' &&
                                  esub.data.name != 'Supplier performance' &&
                                  esub.data.name != 'Contract penetration' &&
                                  esub.data.name != 'Inventory accuracy' &&
                                  esub.data.name != 'Cycle count adh' &&
                                  esub.data.name != 'COPQ' &&
                                  esub.data.name != 'Inventory turns' &&
                                  esub.data.name != 'Inventory $' &&
                                  esub.data.name != 'Engagement' &&
                                  esub.data.name != 'ISC diversity' &&
                                  esub.data.name != 'Attrition' &&
                                  esub.data.name != 'HC Direct' &&
                                  esub.data.name != 'HC Indirect' &&
                                  esub.data.name != 'Capex' &&
                                  esub.data.name != 'Work systems' &&
                                  esub.data.name != '5S' &&
                                  esub.data.name != 'Transformation plan' &&
                                  esub.data.name != 'Hoshin Kanri' &&
                                  esub.data.type == 'two'
                                "
                                :id="esub.id + 'W' + 'bwr'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td>
                              <input
                                type="hidden"
                                :id="esub.id + 'W5' + 'p_v1'"
                              />
                              <input
                                type="hidden"
                                :id="esub.id + 'W' + 'bw_v1'"
                              />
                              <div
                                v-if="esub.data.type == 'two'"
                                style="display: none"
                                :id="esub.id + 'upw'"
                              >
                                <img
                                  v-bind:src="
                                    require('../../../../../assets/images/down_row.png')
                                  "
                                  width="20"
                                  alt=""
                                  class="image-fluid"
                                />
                              </div>
                              <div
                                v-if="esub.data.type == 'two'"
                                style="display: none"
                                :id="esub.id + 'downw'"
                              >
                                <img
                                  v-bind:src="
                                    require('../../../../../assets/images/up_row.png')
                                  "
                                  width="20"
                                  alt=""
                                  class="image-fluid"
                                />
                              </div>
                              <div :id="esub.id + 'blockw'">
                                <img
                                  style="display: none"
                                  v-bind:src="
                                    require('../../../../../assets/images/down_row.png')
                                  "
                                  width="20"
                                  alt=""
                                  class="image-fluid"
                                />
                              </div>
                            </td>
                          </tr>
                          <!-- <tr v-else>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr> -->
                        </tbody>
                      </table>
                    </div>
                    <div class="p-3">
                      <table
                        class="table table-bordered border-dark align-middle background_table_space"
                      >
                        <thead>
                          <tr class="text-center">
                            <th class="text-light casillas_finales" scope="col">
                              YTD
                            </th>
                            <th
                              class="text-light casillas_finales"
                              colspan="3"
                              scope="col"
                            >
                              Proj EOY
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="esub in excel_subcategory"
                          v-bind:key="esub.id"
                        >
                          <tr v-if="ec.id == esub.data.id_category">
                            <!-- Dos input -->
                            <td v-if="esub.data.type == 'two'">
                              <input
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td v-if="esub.data.type == 'two'">
                              <input
                                class="input_table_up"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                              <input
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>

                            <!-- Un input -->
                            <td v-if="esub.data.type == 'one'">
                              <input
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>
                            <td v-if="esub.data.type == 'one'">
                              <input
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                              <hr class="m-0" />
                            </td>

                            <!-- Imagen -->
                            <td>
                              <input
                                v-if="esub.data.type == 'two'"
                                class="input_table_down"
                                type="number"
                                value=""
                              />
                            </td>
                            <td>
                              <img
                                v-if="esub.data.type == 'two'"
                                style="display: none"
                                v-bind:src="
                                  require('../../../../../assets/images/down_row.png')
                                "
                                width="20"
                                alt=""
                                class="image-fluid"
                              />
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
        </div>
      </div>
    </div>
  </div>
  <div v-else id="center" class="main center">
    <div class="container-fluid py-5">
      <div class="text-center mt-5">
        <h1 class="oExtraBold">SCORECARD</h1>
        <h3 class="oLight">Loading all content</h3>
      </div>
    </div>
  </div>

  <!-- MODALS -->
  <div
    class="modal fade"
    id="add-entry"
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
            { active: textron, color_textron: clase_textron },
          ]"
        >
          <div class="row">
            <div class="col-2">
              <div class="d-flex justify-content-start">
                <div v-if="user" class="">
                  <img
                    v-if="user.email == 'artic_cat@gmail.com'"
                    v-bind:src="
                      require('../../../../../assets/images/artic-logo.gif')
                    "
                    alt="ARCTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'cushman@gmail.com'"
                    v-bind:src="
                      require('../../../../../assets/images/cushman-logo.gif')
                    "
                    alt="ARCTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'jacobsen@gmail.com'"
                    v-bind:src="
                      require('../../../../../assets/images/jacobsen.gif')
                    "
                    alt="ARCTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'gse@gmail.com'"
                    v-bind:src="require('../../../../../assets/images/tx2.gif')"
                    alt="ARCTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'textron@gmail.com'"
                    v-bind:src="require('../../../../../assets/images/tx2.gif')"
                    alt="ARCTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else
                    v-bind:src="
                      require('../../../../../assets/images/ezgo.gif')
                    "
                    alt="ARCTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="text-center">
                <h3 class="oExtraBold text-light">Submit your new product</h3>
              </div>
            </div>
            <div class="col-1">
              <!-- <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn-close p-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img
                    v-bind:src="
                      require('../../../../../assets/images/close-btn.png')
                    "
                    alt="close"
                    class="img"
                  />
                </button>
              </div> -->
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
                      <label for="title" class="form-label text-dark"
                        >Name:</label
                      >
                      <input
                        v-model="name"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="title" class="form-label text-dark"
                        >Description:</label
                      >
                      <input
                        v-model="desc"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="title" class="form-label text-dark"
                        >Unit:</label
                      >
                      <input
                        v-model="formula"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        required
                      />
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

  <!-- <div
    class="modal fade"
    id="editarRegistro"
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
          <h5 class="modal-title" id="exampleModalLabel text-dark">
            Update entry
          </h5>
          <button type="button" class="btn-close p-3" data-bs-dismiss="modal">
            <img
              v-bind:src="require('../../../../../assets/images/close-btn.png')"
              width="15"
              alt="close"
              class="img"
            />
          </button>
        </div>
        <div class="modal-body container">
          <div v-if="dataSelected >= '0'">
            <form action="">
              <div class="mb-3">
                <label for="title" class="form-label text-dark">Name:</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  required
                />
              </div>
              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="updateStatus(dataSelected.id)"
                    type=""
                    class="btn btn-primary btn-green"
                  >
                    <h6 class="pt-1 hRegular">Update</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
// import {
//   byexcelc_collection,
//   byexcels_collection,
//   byexcel_results,
// } from "@/firebase/firebase";

import {
  byexcelc_collection,
  byexcels_collection,
  byexcel_results,
} from "@/firebase/firebase";
import jquery from "jquery";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { firebase } from "@/firebase/firebase";
import Swal from "sweetalert2";
require("firebase/compat/auth");

export default {
  data() {
    return {
      isLoading: true,
      user: null,
      clase_artic: false,
      artic: false,
      clase_cushman: false,
      cushman: false,
      clase_ezgo: false,
      ezgo: false,
      clase_jacobsen: false,
      jacobsen: false,
      clase_gse: false,
      gse: false,
      clase_textron: false,
      name: "",
      desc: "",
      formula: "",
      textron: false,
      excel_category: [],
      excel_subcategory: [],
      excec_results_f: [],
      excec_results_guardado: [],
      dataSelected: null,
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
        if (user.email == "textron@gmail.com") {
          this.textron = true;
          this.clase_textron = true;
        }
        if (user.email == "ezgo@gmail.com") {
          this.ezgo = true;
          this.clase_ezgo = true;
        }
      } else {
        console.log("Nulo");
        this.user = null;
      }
    });
  },
  components: {
    Loading,
  },
  mounted() {
    this.excel_category = [];
    byexcelc_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.excel_category.push({ id: item.id, data: item.data() })
        )
      );

    this.excel_subcategory = [];
    byexcels_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.excel_subcategory.push({ id: item.id, data: item.data() })
        )
      );

    this.excec_results_f = [];
    byexcel_results
      .where("value", "!=", 0)
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.excec_results_f.push({ id: item.id, data: item.data() })
        )
      );

    this.excec_results_guardado = [];
    byexcel_results
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.excec_results_guardado.push({ id: item.id, data: item.data() })
        )
      );

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    this.insertValues();
  },
  methods: {
    getToExcel() {
      this.$router.push({ name: "admin_panel-excel" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToByExcel() {
      this.$router.push({ name: "admin_panel-byexcel" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    insertValues() {
      setTimeout(() => {
        Array.from(this.excec_results_f).forEach((result) => {
          // console.log("Hola"); id="flecha_abajo">id="flecha_arriba"
          // <input :id="esub.id + 'Q4' + 'p_v1'" />
          // <input :id="esub.id + 'Q' + 'bw_v1'" />

          document.getElementById(
            result.data.apuntador + result.data.position + result.data.type
          ).value = result.data.value;

          // Q :id="esub.id + 'Q' + 'bwr'"

          //&& result.data.apuntador + "Q4" + "a" != 0
          if (result.data.identificator == result.data.apuntador + "Q4" + "a") {
            setTimeout(() => {
              const Q4_dato = jquery(
                "#" + result.data.apuntador + "Q4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "Q4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "Q3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "Q3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "Q2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "Q2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "Q1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "Q1" + "a"
              ).val();

              var resta;

              // console.log(
              //   "Valores" +
              //     " " +
              //     result.data.identificator +
              //     " " +
              //     Q4_dato2 +
              //     " " +
              //     Q3_dato2 +
              //     " " +
              //     Q2_dato2 +
              //     " " +
              //     Q1_dato2
              // );

              if (Q4_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "Q" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "up");
              var y = document.getElementById(result.data.apuntador + "down");
              var z = document.getElementById(result.data.apuntador + "block");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "Q3" + "a"
          ) {
            setTimeout(() => {
              const Q4_dato = jquery(
                "#" + result.data.apuntador + "Q4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "Q4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "Q3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "Q3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "Q2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "Q2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "Q1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "Q1" + "a"
              ).val();

              var resta;

              // console.log(
              //   "Valores" +
              //     " " +
              //     result.data.identificator +
              //     " " +
              //     Q4_dato2 +
              //     " " +
              //     Q3_dato2 +
              //     " " +
              //     Q2_dato2 +
              //     " " +
              //     Q1_dato2
              // );

              if (Q4_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "QQQQ1 Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "QQQQ12 Resta " +
                      "Dato1" +
                      Q4_dato2 +
                      "Dato2" +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "RestaQQQQ21 condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "QQQQ22 Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "QQQQ31 Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "QQQQ32 Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "QQQQ41 Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "QQQQ42 Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "Q" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "up");
              var y = document.getElementById(result.data.apuntador + "down");
              var z = document.getElementById(result.data.apuntador + "block");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "Q2" + "a"
          ) {
            setTimeout(() => {
              const Q4_dato = jquery(
                "#" + result.data.apuntador + "Q4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "Q4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "Q3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "Q3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "Q2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "Q2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "Q1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "Q1" + "a"
              ).val();

              var resta;

              // console.log(
              //   "Valores" +
              //     " " +
              //     result.data.identificator +
              //     " " +
              //     Q4_dato2 +
              //     " " +
              //     Q3_dato2 +
              //     " " +
              //     Q2_dato2 +
              //     " " +
              //     Q1_dato2
              // );

              if (Q4_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "Q" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "up");
              var y = document.getElementById(result.data.apuntador + "down");
              var z = document.getElementById(result.data.apuntador + "block");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "Q1" + "a"
          ) {
            setTimeout(() => {
              const Q4_dato = jquery(
                "#" + result.data.apuntador + "Q4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "Q4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "Q3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "Q3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "Q2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "Q2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "Q1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "Q1" + "a"
              ).val();

              var resta;

              // console.log(
              //   "Valores" +
              //     " " +
              //     result.data.identificator +
              //     " " +
              //     Q4_dato2 +
              //     " " +
              //     Q3_dato2 +
              //     " " +
              //     Q2_dato2 +
              //     " " +
              //     Q1_dato2
              // );

              if (Q4_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= "0") {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "Q" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "up");
              var y = document.getElementById(result.data.apuntador + "down");
              var z = document.getElementById(result.data.apuntador + "block");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          }

          // M
          if (result.data.identificator == result.data.apuntador + "M3" + "a") {
            setTimeout(() => {
              const Q3_dato = jquery(
                "#" + result.data.apuntador + "M3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "M3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "M2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "M2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "M1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "M1" + "a"
              ).val();

              var resta;

              if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "M" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upm");
              var y = document.getElementById(result.data.apuntador + "downm");
              var z = document.getElementById(result.data.apuntador + "blockm");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "M2" + "a"
          ) {
            setTimeout(() => {
              const Q3_dato = jquery(
                "#" + result.data.apuntador + "M3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "M3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "M2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "M2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "M1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "M1" + "a"
              ).val();

              var resta;

              if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "M" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upm");
              var y = document.getElementById(result.data.apuntador + "downm");
              var z = document.getElementById(result.data.apuntador + "blockm");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "M1" + "a"
          ) {
            setTimeout(() => {
              const Q3_dato = jquery(
                "#" + result.data.apuntador + "M3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "M3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "M2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "M2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "M1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "M1" + "a"
              ).val();

              var resta;

              if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "M" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upm");
              var y = document.getElementById(result.data.apuntador + "downm");
              var z = document.getElementById(result.data.apuntador + "blockm");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          }

          // W
          if (result.data.identificator == result.data.apuntador + "W5" + "a") {
            setTimeout(() => {
              const Q5_dato = jquery(
                "#" + result.data.apuntador + "W5" + "p"
              ).val();

              const Q5_dato2 = jquery(
                "#" + result.data.apuntador + "W5" + "a"
              ).val();

              const Q4_dato = jquery(
                "#" + result.data.apuntador + "W4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "W4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "W3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "W3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "W2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "W2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "W1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "W1" + "a"
              ).val();

              var resta;

              if (Q5_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q5_dato2 - Q5_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q5_dato +
                      Q5_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q5_dato - Q5_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q5_dato2 +
                      Q5_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q4_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "W" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upw");
              var y = document.getElementById(result.data.apuntador + "downw");
              var z = document.getElementById(result.data.apuntador + "blockw");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "W4" + "a"
          ) {
            setTimeout(() => {
              const Q5_dato = jquery(
                "#" + result.data.apuntador + "W5" + "p"
              ).val();

              const Q5_dato2 = jquery(
                "#" + result.data.apuntador + "W5" + "a"
              ).val();

              const Q4_dato = jquery(
                "#" + result.data.apuntador + "W4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "W4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "W3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "W3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "W2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "W2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "W1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "W1" + "a"
              ).val();

              var resta;

              if (Q5_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q5_dato2 - Q5_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q5_dato +
                      Q5_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q5_dato - Q5_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q5_dato2 +
                      Q5_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q4_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "W" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upw");
              var y = document.getElementById(result.data.apuntador + "downw");
              var z = document.getElementById(result.data.apuntador + "blockw");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "W3" + "a"
          ) {
            setTimeout(() => {
              const Q5_dato = jquery(
                "#" + result.data.apuntador + "W5" + "p"
              ).val();

              const Q5_dato2 = jquery(
                "#" + result.data.apuntador + "W5" + "a"
              ).val();

              const Q4_dato = jquery(
                "#" + result.data.apuntador + "W4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "W4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "W3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "W3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "W2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "W2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "W1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "W1" + "a"
              ).val();

              var resta;

              if (Q5_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q5_dato2 - Q5_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q5_dato +
                      Q5_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q5_dato - Q5_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q5_dato2 +
                      Q5_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q4_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "W" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upw");
              var y = document.getElementById(result.data.apuntador + "downw");
              var z = document.getElementById(result.data.apuntador + "blockw");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "W2" + "a"
          ) {
            setTimeout(() => {
              const Q5_dato = jquery(
                "#" + result.data.apuntador + "W5" + "p"
              ).val();

              const Q5_dato2 = jquery(
                "#" + result.data.apuntador + "W5" + "a"
              ).val();

              const Q4_dato = jquery(
                "#" + result.data.apuntador + "W4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "W4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "W3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "W3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "W2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "W2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "W1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "W1" + "a"
              ).val();

              var resta;

              if (Q5_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q5_dato2 - Q5_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q5_dato +
                      Q5_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q5_dato - Q5_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q5_dato2 +
                      Q5_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q4_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "W" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upw");
              var y = document.getElementById(result.data.apuntador + "downw");
              var z = document.getElementById(result.data.apuntador + "blockw");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          } else if (
            result.data.identificator ==
            result.data.apuntador + "W1" + "a"
          ) {
            setTimeout(() => {
              const Q5_dato = jquery(
                "#" + result.data.apuntador + "W5" + "p"
              ).val();

              const Q5_dato2 = jquery(
                "#" + result.data.apuntador + "W5" + "a"
              ).val();

              const Q4_dato = jquery(
                "#" + result.data.apuntador + "W4" + "p"
              ).val();

              const Q4_dato2 = jquery(
                "#" + result.data.apuntador + "W4" + "a"
              ).val();

              const Q3_dato = jquery(
                "#" + result.data.apuntador + "W3" + "p"
              ).val();

              const Q3_dato2 = jquery(
                "#" + result.data.apuntador + "W3" + "a"
              ).val();

              const Q2_dato = jquery(
                "#" + result.data.apuntador + "W2" + "p"
              ).val();

              const Q2_dato2 = jquery(
                "#" + result.data.apuntador + "W2" + "a"
              ).val();

              const Q1_dato = jquery(
                "#" + result.data.apuntador + "W1" + "p"
              ).val();

              const Q1_dato2 = jquery(
                "#" + result.data.apuntador + "W1" + "a"
              ).val();

              var resta;

              if (Q5_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q5_dato2 - Q5_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q5_dato +
                      Q5_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q5_dato - Q5_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q5_dato2 +
                      Q5_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q4_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q4_dato2 - Q4_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q4_dato +
                      Q4_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q4_dato - Q4_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q4_dato2 +
                      Q4_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q3_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q3_dato2 - Q3_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q3_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q3_dato - Q3_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q3_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q2_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q2_dato2 - Q2_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q3_dato +
                      Q2_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q2_dato - Q2_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q2_dato2 +
                      Q3_dato +
                      " igual a " +
                      resta
                  );
                }
              } else if (Q1_dato2 >= 0) {
                if (
                  result.data.apuntador == "3t5evCVxhrHhqIWzBME2" ||
                  result.data.apuntador == "BbEFEZbgLFeBS5IwnHWF" ||
                  result.data.apuntador == "5mEsAomtMfBLpht5Lx8h" ||
                  result.data.apuntador == "MYLoo7G5DILTtzeaJC0v" ||
                  result.data.apuntador == "Ng8V6gvqDwViFGiai33o" ||
                  result.data.apuntador == "cFikMeGDilizXyK5p6oE" ||
                  result.data.apuntador == "OmV3Mb9c2mGH6njNrNAb" ||
                  result.data.apuntador == "viEd4ejX83mc1f5X3m7I" ||
                  result.data.apuntador == "pidoVl9gdaSTXI3sz7Yu" ||
                  result.data.apuntador == "6Oa98JU0OO68oZO7bwa8" ||
                  result.data.apuntador == "PbG6OHNzE1F66gSJD1dW" ||
                  result.data.apuntador == "UL16bFTxw41TnnpzpIQr" ||
                  result.data.apuntador == "oWBjYMGDWHA8ObJfMYKO" ||
                  result.data.apuntador == "sS9e1dZbvH47P7Ss2jqQ"
                ) {
                  resta = Q1_dato2 - Q1_dato;

                  console.log(
                    result.data.apuntador +
                      "Resta condicion " +
                      Q1_dato +
                      Q1_dato2 +
                      " igual a " +
                      resta
                  );
                } else {
                  resta = Q1_dato - Q1_dato2;
                  console.log(
                    result.data.apuntador +
                      "Resta " +
                      Q1_dato2 +
                      Q1_dato +
                      " igual a " +
                      resta
                  );
                }
              }

              document.getElementById(
                result.data.apuntador + "W" + "bwr"
              ).value = resta.toFixed(2);

              var x = document.getElementById(result.data.apuntador + "upw");
              var y = document.getElementById(result.data.apuntador + "downw");
              var z = document.getElementById(result.data.apuntador + "blockw");

              if (resta < 0) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
              } else if (resta > 0) {
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
              } else {
                y.style.display = "none";
                x.style.display = "none";
                z.style.display = "none";
              }
            }, 1000);
          }
        });
      }, 4000);
    },
    saveData() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });

      // console.log(this.excec_results_guardado)
      Swal.showLoading(),
        Array.from(this.excec_results_guardado).forEach((resultados) => {
          const id_identificador =
            resultados.data.apuntador +
            resultados.data.position +
            resultados.data.type;

          // console.log("3c3q9tCL23K8SV2ksV0aQ1o");
          // console.log(id_identificador);

          if (resultados.data.identificator == id_identificador) {
            const dato = jquery(
              "#" +
                resultados.data.apuntador +
                resultados.data.position +
                resultados.data.type
            ).val();

            // console.log(id_identificador + dato);

            if (dato >= 0 && dato != resultados.data.value) {
              byexcel_results.doc(resultados.id).update({ value: dato });

              console.log(
                "Guardado Se edito el registro " +
                  resultados.data.identificator +
                  " con este valor " +
                  dato +
                  " El id del registro es " +
                  resultados.id
              );
            } else if (dato == "" && dato != resultados.data.value) {
              byexcel_results.doc(resultados.id).update({ value: dato });

              console.log(
                "VACIO Guardado Se edito el registro " +
                  resultados.data.identificator +
                  " con este valor " +
                  dato +
                  " El id del registro es " +
                  resultados.id
              );
            } else if (dato == 0 && dato != resultados.data.value) {
              byexcel_results.doc(resultados.id).update({ value: dato });

              console.log(
                "CERO Guardado Se edito el registro " +
                  resultados.data.identificator +
                  " con este valor " +
                  dato +
                  " El id del registro es " +
                  resultados.id
              );
            }

            setTimeout(() => {
              this.$router.go(0);
            }, 8000);
          }
        });

      // Array.from(this.excel_subcategory).forEach((subcategory) => {
      //   // console.log(subcategory.id),
      //   // CREAR REGISTROS GENERALES
      //   if (subcategory.data.type == "two") {
      //     excec_results.add({
      //       identificator: subcategory.id + "Q1" + "p",
      //       position: "Q1",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q2" + "p",
      //       position: "Q2",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q3" + "p",
      //       position: "Q3",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q4" + "p",
      //       position: "Q4",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q1" + "a",
      //       position: "Q1",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q2" + "a",
      //       position: "Q2",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q3" + "a",
      //       position: "Q3",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q4" + "a",
      //       position: "Q4",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q" + "bw",
      //       position: "Q",
      //       type: "bw",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     //
      //     excec_results.add({
      //       identificator: subcategory.id + "M1" + "p",
      //       position: "M1",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M2" + "p",
      //       position: "M2",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M3" + "p",
      //       position: "M3",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M1" + "a",
      //       position: "M1",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M2" + "a",
      //       position: "M2",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M3" + "a",
      //       position: "M3",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M" + "bw",
      //       position: "M",
      //       type: "bw",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     //
      //     excec_results.add({
      //       identificator: subcategory.id + "W1" + "p",
      //       position: "W1",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W2" + "p",
      //       position: "W2",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W3" + "p",
      //       position: "W3",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W4" + "p",
      //       position: "W4",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W5" + "p",
      //       position: "W5",
      //       type: "p",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W1" + "a",
      //       position: "W1",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W2" + "a",
      //       position: "W2",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W3" + "a",
      //       position: "W3",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W4" + "a",
      //       position: "W4",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W5" + "a",
      //       position: "W5",
      //       type: "a",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W" + "bw",
      //       position: "W",
      //       type: "bw",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     //
      //   } else {
      //     excec_results.add({
      //       identificator: subcategory.id + "Q1" + "o",
      //       position: "Q1",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q2" + "o",
      //       position: "Q2",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q3" + "o",
      //       position: "Q3",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q4" + "o",
      //       position: "Q4",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "Q" + "bw",
      //       position: "Q",
      //       type: "bw",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     //
      //     excec_results.add({
      //       identificator: subcategory.id + "M1" + "o",
      //       position: "M1",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M2" + "o",
      //       position: "M2",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M3" + "o",
      //       position: "M3",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M4" + "o",
      //       position: "M4",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "M" + "bw",
      //       position: "M",
      //       type: "bw",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     //
      //     excec_results.add({
      //       identificator: subcategory.id + "W1" + "o",
      //       position: "W1",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W2" + "o",
      //       position: "W2",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W3" + "o",
      //       position: "W3",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W4" + "o",
      //       position: "W4",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W5" + "o",
      //       position: "W5",
      //       type: "one",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     excec_results.add({
      //       identificator: subcategory.id + "W" + "bw",
      //       position: "W",
      //       type: "bw",
      //       apuntador: subcategory.id,
      //       value: 0,
      //     });
      //     //
      //   }
      // });

      Swal.fire("Saved", "Entry registered successfully", "success");
    },
    async addBusiness() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      byexcels_collection
        .add({
          desc: this.desc,
          formula: this.formula,
          id_category: "srOoNiymKqnCg8yPqs5d",
          name: this.name,
          type: "two",
        })
        .then(() => this.$mount());

      // Array.from(this.excel_subcategory).forEach((subcategory) => {
      //   Array.from(this.excec_results_guardado).forEach((resultados) => {
      //     // CREAR REGISTROS GENERALES
      //     if (subcategory.id != resultados.data.apuntador) {
      //       excec_results.add({
      //         identificator: subcategory.id + "Q1" + "p",
      //         position: "Q1",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q2" + "p",
      //         position: "Q2",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q3" + "p",
      //         position: "Q3",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q4" + "p",
      //         position: "Q4",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q1" + "a",
      //         position: "Q1",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q2" + "a",
      //         position: "Q2",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q3" + "a",
      //         position: "Q3",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q4" + "a",
      //         position: "Q4",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "Q" + "bw",
      //         position: "Q",
      //         type: "bw",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       //
      //       excec_results.add({
      //         identificator: subcategory.id + "M1" + "p",
      //         position: "M1",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "M2" + "p",
      //         position: "M2",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "M3" + "p",
      //         position: "M3",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "M1" + "a",
      //         position: "M1",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "M2" + "a",
      //         position: "M2",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "M3" + "a",
      //         position: "M3",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "M" + "bw",
      //         position: "M",
      //         type: "bw",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       //
      //       excec_results.add({
      //         identificator: subcategory.id + "W1" + "p",
      //         position: "W1",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W2" + "p",
      //         position: "W2",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W3" + "p",
      //         position: "W3",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W4" + "p",
      //         position: "W4",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W5" + "p",
      //         position: "W5",
      //         type: "p",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W1" + "a",
      //         position: "W1",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W2" + "a",
      //         position: "W2",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W3" + "a",
      //         position: "W3",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W4" + "a",
      //         position: "W4",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W5" + "a",
      //         position: "W5",
      //         type: "a",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       excec_results.add({
      //         identificator: subcategory.id + "W" + "bw",
      //         position: "W",
      //         type: "bw",
      //         apuntador: subcategory.id,
      //         value: 0,
      //       });
      //       //
      //     }
      //   });
      // });

      // console.log(byexcels_collection);
      Swal.fire("Saved", "Entry registered successfully", "success");
      setTimeout(() => {
        this.$router.go(0);
      }, 2000);
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
          byexcels_collection
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
      byexcels_collection
        .doc(id)
        .get()
        .then((r) => {
          this.dataSelected = {
            id: r.id,
            data: r.data(),
          };
        });
    },
  },
};
</script>
<style scoped>
.sharepoint {
  border: 0.001rem solid #707070;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 250px;
  color: black;
}

.border_none {
  border: none;
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

.color_textron {
  background: #1a3668 !important;
}

.sharepoint_ezgo {
  background-color: white !important;
  color: black;
}
.sharepoint_ezgo .flotante {
  display: scroll;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  background-color: #0a2240;
  border: solid white 1px;
  border-radius: 50%;
  height: 59px;
  color: white;
}
.sharepoint_ezgo .barra_lateral {
  height: 100%;
  width: 100%;
  background-color: #0a2240;
  color: white;
}
.sharepoint_ezgo .border {
  border: solid black 1px !important;
}

.sharepoint_ezgo table {
  background-color: #e8e8e8 !important;
}
.sharepoint_ezgo table .background_table_space {
  background-color: #ffffff !important;
}
.sharepoint_ezgo .casillas_finales {
  background-color: #0a2240 !important;
}
.sharepoint_ezgo .casillas_intermedias {
  background-color: #0a3569b2 !important;
  color: #ffffff;
}

.sharepoint_ezgo .categoria_fondo {
  background-color: #0a2240;
  border: solid #0a2240 1px;
  width: 20px;
}
.sharepoint_ezgo .fonfo_prin {
  background-color: #ffffff !important;
}
.sharepoint_ezgo .fondo_letras {
  color: #ffffff !important;
}

.sharepoint_artic {
  background-color: rgb(0, 0, 0) !important;
  color: rgb(255, 255, 255);
}
.sharepoint_artic .flotante {
  display: scroll;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  background-color: #599a30;
  border: solid white 1px;
  border-radius: 50%;
  height: 59px;
  color: white;
}
.sharepoint_artic .barra_lateral {
  height: 100%;
  width: 100%;
  background-color: #599a30;
  color: white;
}
.sharepoint_artic .border {
  border: solid black 1px;
}

.sharepoint_artic table {
  background-color: #e8e8e8 !important;
}
.sharepoint_artic table .background_table_space {
  background-color: #000000 !important;
}
.sharepoint_artic .casillas_finales {
  background-color: #599a30 !important;
}
.sharepoint_artic .casillas_intermedias {
  background-color: #599a309a !important;
  color: #ffffff;
}

.sharepoint_artic .categoria_fondo {
  background-color: #599a30;
  border: solid #599a30 1px;
}
.sharepoint_artic .fonfo_prin {
  background-color: #000000 !important;
}
.sharepoint_artic .fondo_letras {
  color: #000000 !important;
}

.sharepoint_cushman {
  background-color: white !important;
  color: black;
}
.sharepoint_cushman .barra_lateral {
  height: 100%;
  width: 100%;
  background-color: #edcc45;
  color: white;
}
.sharepoint_cushman .flotante {
  display: scroll;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  background-color: #edcc45;
  border: solid white 1px;
  border-radius: 50%;
  height: 59px;
  color: white;
}

.sharepoint_cushman .border {
  border: solid black 1px;
}

.sharepoint_cushman table {
  background-color: #e8e8e8 !important;
}
.sharepoint_cushman table .background_table_space {
  background-color: #ffffff !important;
}
.sharepoint_cushman .casillas_finales {
  background-color: #edcc45 !important;
}

.sharepoint_cushman .casillas_intermedias {
  background-color: #edcb4581 !important;
  color: #ffffff;
}
.sharepoint_cushman .categoria_fondo {
  background-color: #edcc45;
  border: solid #edcc45 1px;
}
.sharepoint_cushman .fonfo_prin {
  background-color: #ffffff !important;
}
.sharepoint_cushman .fondo_letras {
  color: #ffffff !important;
}

.sharepoint_jacobsen {
  background-color: rgb(0, 0, 0) !important;
  color: rgb(255, 255, 255);
}
.sharepoint_jacobsen .barra_lateral {
  height: 100%;
  width: 100%;
  background-color: #d67443;
  color: white;
}
.sharepoint_jacobsen .flotante {
  display: scroll;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  background-color: #d67443;
  border: solid white 1px;
  border-radius: 50%;
  height: 59px;
  color: white;
}

.sharepoint_jacobsen .border {
  border: solid black 1px;
}

.sharepoint_jacobsen table {
  background-color: #e8e8e8 !important;
}
.sharepoint_jacobsen table .background_table_space {
  background-color: #000000 !important;
}
.sharepoint_jacobsen .casillas_finales {
  background-color: #d67443 !important;
}
.sharepoint_jacobsen .casillas_intermedias {
  background-color: #d6744392 !important;
  color: #ffffff;
}
.sharepoint_jacobsen .categoria_fondo {
  background-color: #d67443;
  border: solid #d67443 1px;
}
.sharepoint_jacobsen .fonfo_prin {
  background-color: #000000 !important;
}
.sharepoint_jacobsen .fondo_letras {
  color: #000000 !important;
}

.sharepoint_gse {
  background-color: rgb(0, 0, 0) !important;
  color: rgb(255, 255, 255);
}
.sharepoint_gse .barra_lateral {
  height: 100%;
  width: 100%;
  background-color: #ef954c;
  color: white;
}
.sharepoint_gse .flotante {
  display: scroll;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  background-color: #ef954c;
  border: solid white 1px;
  border-radius: 50%;
  height: 59px;
  color: white;
}
.sharepoint_gse .border {
  border: solid black 1px;
}

.sharepoint_gse table {
  background-color: #e8e8e8 !important;
}
.sharepoint_gse table .background_table_space {
  background-color: #000000 !important;
}
.sharepoint_gse .casillas_finales {
  background-color: #ef954c !important;
}
.sharepoint_gse .casillas_intermedias {
  background-color: #ef954c9a !important;
  color: #ffffff;
}
.sharepoint_gse .categoria_fondo {
  background-color: #ef954c;
  border: solid #ef954c 1px;
}
.sharepoint_gse .fonfo_prin {
  background-color: #000000 !important;
}
.sharepoint_gse .fondo_letras {
  color: #000000 !important;
}

.sharepoint_textron {
  background-color: white !important;
  color: black;
}
.sharepoint_textron .barra_lateral {
  height: 100%;
  width: 100%;
  background-color: #10386a;
  color: white;
}
.sharepoint_textron .flotante {
  display: scroll;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  background-color: #10386a;
  border: solid white 1px;
  border-radius: 50%;
  height: 59px;
  color: white;
}
.sharepoint_textron table {
  background-color: #e8e8e8 !important;
}
.sharepoint_textron table .background_table_space {
  background-color: #ffffff !important;
}
.sharepoint_textron .casillas_finales {
  background-color: #10386a !important;
}
.sharepoint_textron .casillas_finales {
  background-color: #10396a8a !important;
}
.sharepoint_textron .categoria_fondo {
  background-color: #0a2240;
  border: solid #0a2240 1px;
}
.sharepoint_textron .fonfo_prin {
  background-color: #ffffff !important;
}
.sharepoint_textron .fondo_letras {
  color: #ffffff !important;
}

div.scrollmenu {
  /* background-color: #333; */
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu-dark {
  background-color: #000000;
  overflow: auto;
  white-space: nowrap;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.input_table_up {
  width: 80px;
  background-color: #b3b3b3;
  border: none;
}

.input_table_up:focus {
  background-color: #ffffff;
  border: solid black 1px;
}

.input_table_down {
  width: 80px;
  background-color: #f6f6f6;
  border: none;
}

.input_table_down:focus {
  background-color: #ffffff;
  border: solid black 1px;
}

.tooltip-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.tooltip-text {
  visibility: hidden;
  width: auto;
  background-color: #323232;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 40;
  top: 50%; /* Posiciona el tooltip encima del elemento */
  left: 80%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
}
.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

#sidebarMenuExcel::-webkit-scrollbar {
  width: 10px; /* Tamaño del scroll en vertical */
  height: 10px; /* Tamaño del scroll en horizontal */
}

#sidebarMenuExcel::-webkit-scrollbar-thumb {
  background: rgba(67, 67, 67, 0.5);
  border-radius: 20px;
}

#sidebarMenuExcel::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

#sidebarMenuExcel::-webkit-scrollbar-thumb:active {
  background-color: rgba(170, 170, 170, 0.1);
  height: 20px;
}

#sidebarMenuExcel::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 20px;
}

#sidebarMenuExcel::-webkit-scrollbar-track:hover,
#sidebarMenuExcel::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
</style>
