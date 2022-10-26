<template>
  <div>
    <v-row justify="space-between" class="mt-5">
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-card
          class="pa-2"
          flat
        >
          <v-card-title primary-title>
            Welcome back, Olivia
          </v-card-title>
          <v-card-text class="mt-n4">
            Track, manage and forecast your customers and orders
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="auto"
      >
        <v-card
          class="pa-2"
          flat
        >
          <v-btn outlined small class="btn mx-5" color="grey">
            <v-icon color="grey" left>
              mdi-cloud-upload-outline
            </v-icon>
            Import
          </v-btn>
          <v-btn small class="white--text btn mr-2" color="#7f56d9">
            <v-icon color="" left>
              mdi-plus
            </v-icon>
            Add
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ChartCard />
      </v-col>
    </v-row>
    <v-row class="mx-3 hidden-md-and-up">
      <v-col cols="auto">
        <v-text-field
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
          style="width:320px"
        />
      </v-col>
      <v-col cols="">
        <v-btn
          small
          block
          color="grey"
          class="btn "
          text
          outlined
        >
          <v-icon color="" left>
            mdi-filter-variant
          </v-icon>
          Edit filters
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-3">
      <v-col cols="auto">
        <v-btn
          small
          color="#8963DC"
          class="btn "
          text
          style="background:#F9FAFB"
        >
          All time
          <v-icon color="" right>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          small
          color="#8963DC"
          class="btn "
          text
          style="background:#F9FAFB"
        >
          Us, Au, +4
          <v-icon color="" right>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="hidden-sm-and-down">
        <v-btn
          small
          color="grey"
          class="btn "
          text
          outlined
        >
          <v-icon color="" left>
            mdi-filter-variant
          </v-icon>
          More filters
        </v-btn>
      </v-col>
      <v-spacer />
      <v-col cols="auto" class="hidden-sm-and-down">
        <v-text-field
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
          style="width:320px"
        />
      </v-col>
    </v-row>
    <MyTable />
  </div>
</template>

<style scoped>
.btn{
  text-transform: capitalize;
}
</style>
