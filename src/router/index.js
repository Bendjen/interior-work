import Vue from "vue";
import VueRouter from "vue-router";
import Safeguard from "@/pages/base/safeguard";
import Store from "@/store";
// import Login from "@/pages/login";
// import Defect from "@/pages/defect-analysis/index";

Vue.use(VueRouter);

const packageCollector = (requireContext) =>
    requireContext.keys().map(requireContext);
const pagesRule = require.context("../pages", true, /package\.js$/);
const pages = packageCollector(pagesRule).map((item) => item.default);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Safeguard,
    },
    {
        path: "*",
        component: Safeguard,
    },
];

pages.forEach((page) => {
    if (page.children && page.children.length > 0) {
        routes.push(
            ...page.children.map((item) => {
                return {
                    path: `/${page.id}/${item.id}`,
                    meta: item.meta ? item.meta : {},
                    name: `${page.id}/${item.id}`,
                    component: () => import(`@/pages/${page.id}/${item.id}`),
                };
            })
        );
    } else {
        routes.push({
            path: `/${page.id}`,
            name: page.id,
            meta: page.meta ? page.meta : {},
            component: () => import(`@/pages/${page.id}`),
        });
    }
});

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (Store.state.loginStatus) {
        next();
    } else {
        if (to.meta.requireAuth === false) {
            next();
        } else {
            // 没有登出或者请求超时，将自动登录
            if (window.$Storage.originGet("loginStatus") == 1) {
                window.$login
                    .autoLogin()
                    .then(() => {
                        Store.dispatch("Init");
                        next();
                    })
                    .catch((err) => {
                        window.$login.clear();
                        next();
                        router.push({ name: "base/login" });
                    });
            } else {
                next();
                router.push({ name: "base/login" });
            }
        }
    }
});

export default router;
