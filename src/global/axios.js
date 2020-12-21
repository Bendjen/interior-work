import { Loading, MessageBox } from "element-ui";
import axios from "axios";
import Store from "@/store";

export default function axiosInit() {
    const TIME_OUT = 20000;
    const REQUEST_ERROR = "请求出错";
    const RESPONSE_ERROR = "服务器错误";
    const loadingList = {};

    let axiosRequest = axios.create({
        timeout: TIME_OUT,
        method: "post",
    });

    // 请求拦截器
    axiosRequest.interceptors.request.use(
        (config) => {
            // 自动装填加载中
            if (!config.hideLoading) {
                if (!loadingList[config.url]) {
                    loadingList[config.url] = Loading.service({
                        fullscreen: true,
                        lock: true,
                        text: "请稍候",
                    });
                }

                setTimeout(() => {
                    if (loadingList[config.url]) {
                        loadingList[config.url].close();
                        delete loadingList[config.url];
                        MessageBox.alert(`请求超时\n${config.url}`, "提示");
                    }
                }, TIME_OUT + 2000);
            }

            return config;
        },
        (error) => {
            const { data, config } = error.response;
            if (loadingList[config.url]) {
                loadingList[config.url].close();
                delete loadingList[config.url];
            }
            MessageBox.alert(data.message || data || REQUEST_ERROR, "提示");
            return Promise.reject({
                message: data.message || data || REQUEST_ERROR,
            });
        }
    );

    // 响应拦截器
    axiosRequest.interceptors.response.use(
        (response) => {
            const { config, data } = response;
            if (loadingList[config.url]) {
                loadingList[config.url].close();
                delete loadingList[config.url];
            }

            if (
                data.status == "ok" ||
                data.rescode == 1 ||
                data.id ||
                data instanceof Array
            ) {
                return data;
            } else {
                if (typeof data == "string") {
                    if (data.includes("登录")) {
                        // Store.commit("setLogin", 0);
                        // window.$login.clear();
                        location.href = `//${location.host}/#/base/login`;
                    } else if (!!data) {
                        alert(data);
                    }
                } else {
                    if (!config.hideErr) {
                        MessageBox.alert(
                            data ? data.message || data.resmsg : RESPONSE_ERROR,
                            "提示"
                        );
                    }
                }
                return Promise.reject({
                    message: data.message || data.resmsg || RESPONSE_ERROR,
                });
            }
        },
        (error) => {
            const { data, config } = error.response;
            if (loadingList[config.url]) {
                loadingList[config.url].close();
                delete loadingList[config.url];
            }
            if (!config.hideErr) {
                MessageBox.alert(
                    data.message || data || RESPONSE_ERROR,
                    "提示"
                );
            }
            return Promise.reject({
                message: data.message || data || RESPONSE_ERROR,
            });
        }
    );

    return axiosRequest;
}
