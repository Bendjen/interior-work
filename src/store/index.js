import Vue from "vue";
import Vuex from "vuex";
import BASE_SERVICE from "@/pages/base/service";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loginStatus: 0,
        env: {
            env: "test",
            proxy: "http://192.168.2.163:8080/",
        },
        user: {},
    },
    mutations: {
        login(state) {
            state.loginStatus = 1;
        },
        logout(state) {
            state.loginStatus = 0;
        },
        setUser(state, payload) {
            state.user = payload;
            window.$Storage.originSet("user", payload);
        },
    },
    actions: {
        async Init({ state, commit, dispatch }) {
            const user = window.$Storage.originGet("user");
            if (user) commit("setUser", user);
        },
        async fetchUserInfo({ state, commit, dispatch }, forceUpdate = true) {
            return new Promise((resolve, reject) => {
                const userInfoCache = window.$Storage.get("userinfo");
                if (userInfoCache && !forceUpdate) {
                    resolve(userInfoCache);
                } else {
                    BASE_SERVICE.fetchUserInfo().then((res) => {
                        commit("setUser", res.resdata);
                        resolve(res.resdata);
                    });
                }
            });
        },
    },
    modules: {},
});
