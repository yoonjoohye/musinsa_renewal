import Vue from "vue";
import VueLazyload from "vue-lazyload";

import error from "../assets/image/lazy/error.png";
import loading from "../assets/image/lazy/loading.png";

Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});
