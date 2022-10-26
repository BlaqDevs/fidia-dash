<template>
  <v-container>
    <v-app-bar
      color="white"
      class="black--text"
      dense
      flat
      height="72"
    >
      <v-toolbar-title>
        <v-avatar>
          <Logo />
        </v-avatar>
        Untitled UI
      </v-toolbar-title>
      <v-btn
        v-for="item in list1"
        :key="item.name"
        text
        depressed
        :style="item.bg"
        class="grey--text btn hidden-md-and-down"
      >
        {{ item.name }}
      </v-btn>

      <v-spacer />
      <v-btn class="mx-2 hidden-md-and-down btn" small elevation="" color="grey" outlined>
        <v-icon color="" left>
          mdi-lightning-bolt-outline
        </v-icon>
        Upgrade now
      </v-btn>
      <v-icon class="mx-2 hidden-md-and-down" color="grey">
        mdi-cog-outline
      </v-icon>
      <v-icon class="mx-2 hidden-md-and-down" color="grey">
        mdi-bell-outline
      </v-icon>
      <v-avatar class="mx-2 hidden-md-and-down" size="40">
        <img
          src="../assets/avatar.png"
          height="40"
          alt=""
        >
      </v-avatar>

      <v-app-bar-nav-icon class="d-flex d-sm-none" />
    </v-app-bar>
    <v-divider />
    <v-toolbar dense flat color="" height="65" class="hidden-md-and-down">
      <v-btn
        v-for="item in list2"
        :key="item.name"
        text
        depressed
        class="grey--text btn"
        :style="item.bg"
      >
        {{ item.name }}
      </v-btn>
      <v-spacer />
      <div id="search">
        <v-text-field
          outlined
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          class="mt-7"
          color="grey"
          height="44px"
          dense
        />
      </div>
    </v-toolbar>
    <v-divider class="hidden-md-and-down" />
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'list1',
      'list2'
    ])
  }
}
</script>
<style scoped>
#search{
  width: 320px;
}
.btn{
  text-transform: capitalize;
}
</style>
