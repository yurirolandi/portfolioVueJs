<template>
  <div class="pa-5">
    <p class="text-justify">
      {{ text }}
    </p>
    <div class="d-flex flex-column">
      <div class="mb-2">
        <v-icon>mdi-account-group</v-icon> {{ followers }} followers ·
        {{ following }} following · <v-icon>mdi-star</v-icon> {{ star }}
      </div>
      <div class="mb-2"><v-icon>mdi-map-marker</v-icon> {{ location }}</div>
      <div class="mb-2"><v-icon>mdi-email</v-icon> sd.rolandi@gmail.com</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    text: String,
    followers: Number,
    following: Number,
    star: Number,
    location: String,
  },
};
</script>
