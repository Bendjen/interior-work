import requestCreator from "@/utils/requestCreator";
import Store from "@/store";
import { MessageBox } from "element-ui";

const SERVICE = requestCreator({
    login: "/jtyh/login",
});

export default {
    name: "login",
    method: {
        update() {
            window.$Storage.originSet("loginStatus", 1);
            Store.commit("login");
        },
        clear() {
            window.$Storage.originSet("loginStatus", 0);
            Store.commit("logout");
        },
        autoLogin() {
            return new Promise((resolve, reject) => {
                const username = window.$Storage.originGet("username");
                const password = window.$Storage.originGet("password");
                if (username && password) {
                    SERVICE.login({
                        username,
                        password,
                        _ajax: 1,
                    })
                        .then((res) => {
                            this.update();
                            resolve();
                        })
                        .catch((err) => {
                            console.log(err);
                            MessageBox.alert("自动登录失败");
                            reject("自动登录失败");
                        });
                } else {
                    MessageBox.alert("自动登录失败");
                    reject("自动登录失败");
                }
            });
        },
    },
};
