<template>
  <v-virtual-scroll :items="repos" height="350" item-height="64">
    <template v-slot:default="{ item }">
      <v-list-item :key="item.id">
        <v-list-item-action>
          <v-icon fab depressed color="primary">
            {{ item.language | languageToIcon }}
          </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn depressed small :href="item.html_url" target="_blank">
            <v-icon small> mdi-open-in-new </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "Repositories",
  props: {
    repos: Array,
  },
};
</script>

<style lang="scss" scoped></style>
