<template>
  <div
    class="
      d-flex
      flex-column flex-lg-row
      align-center
      justify-lg-space-around
      mt-3
    "
  >
    <v-img
      class="ma-2"
      min-width="351"
      min-height="140"
      :src="srcGitHubStats"
    />
    <v-img
      class="ma-2"
      min-width="350"
      min-height="165"
      :src="srcLinkMostUsedLanguages"
    />
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    srcGitHubStats: String,
    srcLinkMostUsedLanguages: String,
  },
};
</script>

<style lang="scss" scoped></style>
