import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.filter("languageToIcon", function (value) {
  let newvalue = value;
  switch (newvalue) {
    case "JavaScript":
      newvalue = "mdi-language-javascript";
      break;
    case "CSS":
      newvalue = "mdi-git";
      break;
    case "Vue":
      newvalue = "mdi-vuejs";
      break;
    case "null":
      newvalue = "mdi-git";
      break;
    case "TypeScript":
      newvalue = "mdi-language-typescript";
      break;
    case "HTML":
      newvalue = "mdi-git";
      break;
  }
  return newvalue;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
