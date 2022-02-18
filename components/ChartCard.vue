<template>
  <v-row justify="space-between" class="mx-5 mb-7">
    <v-col cols="auto" class="mb-10" style="width: 389.33px; height:176px">
      <v-card
        class=""
        elevation="5"
        style="border-radius:8px"
      >
        <v-card-text>
          <div class="d-flex flex-row justify-space-between">
            <div>Total Customers</div>
            <div>
              <v-icon color="">
                mdi-dots-vertical
              </v-icon>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="d-flex flex-row justify-space-between">
            <div>
              <h3>2,420</h3>
              <p>
                <v-icon small color="#12B76A">
                  mdi-arrow-up
                </v-icon><span style="color:#12B76A">40% </span> vs last month
              </p>
            </div>
            <div style="width:128px; height:64px">
              <Line1 />
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="auto" class="mb-10" style="width: 389.33px; height:176px">
      <v-card
        class=""
        elevation="5"
        style="border-radius:8px"
      >
        <v-card-text>
          <div class="d-flex flex-row justify-space-between">
            <div>Total Customers</div>
            <div>
              <v-icon color="">
                mdi-dots-vertical
              </v-icon>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="d-flex flex-row justify-space-between">
            <div>
              <h3>1,210</h3>
              <p>
                <v-icon small color="#B42318">
                  mdi-arrow-down
                </v-icon><span style="color:#B42318">20% </span> vs last month
              </p>
            </div>
            <div style="width:128px; height:64px">
              <Line2 />
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="auto" class="mb-10" style="width: 389.33px; height:176px">
      <v-card
        class=""
        elevation="5"
        style="border-radius:8px"
      >
        <v-card-text>
          <div class="d-flex flex-row justify-space-between">
            <div>Total Customers</div>
            <div>
              <v-icon color="">
                mdi-dots-vertical
              </v-icon>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="d-flex flex-row justify-space-between">
            <div>
              <h3>316</h3>
              <p>
                <v-icon small color="#12B76A">
                  mdi-arrow-up
                </v-icon><span style="color:#12B76A">20% </span> vs last month
              </p>
            </div>
            <div style="width:128px; height:64px">
              <Line1 />
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        datasets: {
          data: [100, 150, 300, 200]
        }
      }
    }
  }
}
</script>

<style>

</style>
