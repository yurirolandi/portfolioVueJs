<template>
  <div>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab href="#tab-1">Overview</v-tab>
      <v-tab href="#tab-2">Repositories </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <Overview
          srcGitHubStats="https://github-readme-stats.vercel.app/api?username=yurirolandi"
          srcLinkMostUsedLanguages="https://github-readme-stats.vercel.app/api/top-langs/?username=yurirolandi&layout=compact"
        />
      </v-tab-item>
      <v-tab-item value="tab-2"
        ><Repositories :repos="getGitHubRepos" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Repositories from "./Repositories.vue";
import Overview from "./Overview.vue";
export default {
  data() {
    return {
      tab: null,
    };
  },
  components: {
    Repositories,
    Overview,
  },
  computed: {
    ...mapGetters(["getGitHubRepos"]),
  },
};
</script>

<style lang="scss" scoped></style>
