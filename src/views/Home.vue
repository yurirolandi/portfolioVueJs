<template>
  <v-container>
    <v-card>
      <div class="d-flex align-center pa-5">
        <ProfileImg :link="user.avatar_url" class="mr-5" />
        <TitlePage :title="user.name" />
      </div>
      <Bio
        :text="user.bio"
        :followers="user.followers"
        :following="user.following"
        :star="2"
      />
      <Panel />
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileImg from "../components/ProfileImg.vue";
import TitlePage from "../components/TitlePage.vue";
import Bio from "../components/Bio.vue";
import Panel from "../components/Repositories/panel.vue";
export default {
  name: "Home",
  components: {
    ProfileImg,
    TitlePage,
    Bio,
    Panel,
  },
  computed: {
    ...mapGetters({
      user: "getGitHubUser",
    }),
  },
};
</script>
