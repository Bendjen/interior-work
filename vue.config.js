module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
    devServer: {
        port: 8090,
        proxy: {
            "/jtyh": {
                // target: "http://222.79.0.241:10022",
                // target: "http://192.168.1.131:8080/",
                target: "http://192.168.2.163:8080/", //测试
                changeOrigin: true,
            },
        },
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/global/base.scss";`,
            },
        },
    },

    chainWebpack: (config) => {
        config.resolve.extensions.prepend(".vue");
    },
};
