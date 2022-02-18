<template>
  <v-row class="mx-5" justify="center">
    <v-col>
      <v-card
        class=""
        elevation=""
      >
        <div>
          <b-table-simple hover caption-top outlined responsive striped>
            <b-thead head-variant="">
              <b-tr>
                <b-td>
                  <v-checkbox
                    v-model="selectAll"
                    class="ma-0"
                    color="#8963DC"
                    style="background:white"
                    indeterminate
                    outline
                    :value="!selectAll"
                  />
                </b-td>
                <b-td v-for="item in tableHead" :key="item" variant="grey" :class="item.visibility">
                  {{ item.name }} <v-icon small left color="">
                    {{ item.icon }}
                  </v-icon>
                </b-td>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="item in tableRow" :key="item.name">
                <b-td>
                  <v-checkbox v-model="selected" class="ma-0" :value="item.id" />
                </b-td>
                <b-td>
                  <v-row no-gutters>
                    <v-col cols="6" xs="6">
                      <b-avatar :src="item.avatar" />
                    </v-col>
                    <v-col cols="6" xs="6" class="ma-0 text-no-wrap">
                      {{ item.name }} <br>
                      <span class="body-2--text font-weight-light">{{ item.site }}</span>
                    </v-col>
                  </v-row>
                </b-td>
                <b-td>
                  <v-progress-linear
                    color="#8963DC"
                    background-opacity="0.09"
                    style="width:88px"
                    rounded
                    height="8"
                    :value="item.licenseUse"
                  />
                </b-td>
                <b-td class="hidden-sm-and-down">
                  <v-chip
                    :text-color="item.statText"
                    text
                    depressed
                    :color="item.statColor"
                    small
                  >
                    {{ item.status }}
                  </v-chip>
                </b-td>
                <b-td class="hidden-sm-and-down">
                  <b-avatar-group size="24px">
                    <b-avatar />
                    <b-avatar text="BV" variant="primary" />
                    <b-avatar src="https://placekitten.com/300/300" variant="info" />
                    <b-avatar text="OK" variant="danger" />
                    <b-avatar variant="warning" />
                    <b-avatar src="https://placekitten.com/320/320" variant="dark" />
                    <b-avatar icon="music-note" variant="success" />
                  </b-avatar-group>
                </b-td>
                <b-td class="hidden-sm-and-down">
                  {{ item.aboutTitle }} <br>
                  <span class="body-2--text font-weight-light">{{ item.aboutContent }}</span>
                </b-td>
                <b-td class="hidden-sm-and-down">
                  <v-icon color="grey">
                    mdi-pencil-outline
                  </v-icon> <v-icon color="grey">
                    mdi-trash-can-outline
                  </v-icon>
                </b-td>
              </b-tr>
            </b-tbody>
            <b-tfoot>
              <b-tr>
                <b-td colspan="12">
                  <div class="mx-5 d-flex justify-md-space-between align-center">
                    <div class="hidden-md-and-down">
                      <v-btn elevation="1" class="grey--text" color="white">
                        Previous
                      </v-btn>
                      <v-btn elevation="1" class="grey--text" color="white">
                        Next
                      </v-btn>
                    </div>
                    <div class="grey--text d-md-flex justify-space-between align-center">
                      <v-col cols="12" class="hidden-md-and-up d-flex justify-start">
                        <v-icon color="">
                          mdi-arrow-left
                        </v-icon>
                      </v-col>
                      <v-col class="d-flex justify-center">
                        <span>Page 1 of 10</span>
                      </v-col>
                      <v-col class="hidden--and-up d-flex justify-end">
                        <v-icon right color="">
                          mdi-arrow-right
                        </v-icon>
                      </v-col>
                    </div>
                  </div>
                </b-td>
              </b-tr>
            </b-tfoot>
          </b-table-simple>
        </div> <div>
          <b-table-simple selectable striped hover :items="tableRow" />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      max: 50,
      value: 33.33,
      selectAll: false,
      indeterminate: false,
      selected: []
    }
  },
  watch: {
    selectAll (val) {
      if (val) {
        this.selected = []

        this.tableRow.map((item, index) => {
          this.selected.push(item.id)
          return null
        })
      }
    }
  },
  methods: {
    toggleAll (checked) {
      this.selected = checked ? this.items.slice() : []
    }
  },
  computed: {
    ...mapGetters([
      'tableHead',
      'tableRow'
    ])
  }
}
</script>
