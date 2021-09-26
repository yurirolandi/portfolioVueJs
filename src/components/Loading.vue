<template>
  <div class="loading">
    <v-progress-circular indeterminate color="white"></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #0b0b0b8a;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
