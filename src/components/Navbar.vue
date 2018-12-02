<template>
  <v-toolbar id="nav" :class="'transparent'" app>
    <v-toolbar-items>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Zeller székhely</v-toolbar-title>
      <v-btn flat>NYITÓOLDAL</v-btn>
      <v-btn flat>RÓLUNK</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {}
};
</script>