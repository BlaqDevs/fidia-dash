<template>
  <v-row class="mx-5" justify="center">
    <v-col cols="auto">
      <v-card
        class=""
        elevation=""
        max-width=""
      >
        <div>
          <b-table-simple hover caption-top outlined responsive>
            <b-thead head-variant="">
              <b-tr>
                <b-td>
                  <b-form-group>
                    <template #label>
                      <b-form-checkbox
                        v-model="allSelected"
                        :indeterminate="indeterminate"
                        aria-describedby="flavours"
                        aria-controls="flavours"
                        @change="toggleAll"
                      />
                    </template>
                  </b-form-group>
                </b-td>
                <b-td v-for="item in tableHead" :key="item">
                  {{ item }}
                </b-td>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="item in tableRow" :key="item.name">
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
              </b-tr>
            </b-tbody>
            <b-tfoot>
              <b-tr>
                <b-td colspan="7" variant="secondary" class="text-right">
                  Total Rows: <b>5</b>
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
      flavours: '',
      selected: [],
      allSelected: false,
      indeterminate: false
    }
  },
  watch: {
    selected (newValue, oldValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false
        this.allSelected = false
      } else if (newValue.length === this.flavours.length) {
        this.indeterminate = false
        this.allSelected = true
      } else {
        this.indeterminate = true
        this.allSelected = false
      }
    }
  },
  methods: {
    toggleAll (checked) {
      this.selected = checked ? this.flavours.slice() : []
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
