import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axiosInit from "@/global/axios";
import lodash from "lodash";

import "element-ui/lib/theme-chalk/index.css";
import "flex.css";

window._ = lodash;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = window.$axios = axiosInit();

// 注入全局方法
const packageCollector = (requireContext) =>
    requireContext.keys().map(requireContext);
const methodsRule = require.context("@/global/methods", true, /\.js$/);
const methods = packageCollector(methodsRule);

methods.forEach((module) => {
    const { name, method } = module.default;
    Vue.prototype[`$${name}`] = window[`$${name}`] = method;
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
