<template>
  <v-avatar size="80">
    <v-img :src="link" aspect-ratio="1" class="grey lighten-2">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-avatar>
</template>

<script>
export default {
  name: "imageProfile",
  props: {
    link: String,
  },
};
</script>

<style lang="scss" scoped></style>
