import qs from "qs";
import Store from "@/store";

export default function requestCreator(list) {
    let requestMap = {};
    for (let key in list) {
        let config = list[key];
        let targetUrl = "";
        if (typeof config == "string") {
            targetUrl = config;
        } else if (typeof config == "object") {
            targetUrl = config.url;
        }
        requestMap[key] = (params = {}, files = {}) => {
            let data = params;
            if (config.formData) {
                data = toFormData(params);
            } else {
                data = qs.stringify(params);
            }
            return window.$axios({
                ...config,
                url: `${targetUrl}`,
                data: data,
            });
        };
    }
    return requestMap;
}

function toFormData(params) {
    let result = {};
    if (window.$shell == "apicloud") {
        for (let key in params) {
            const item = params[key];
            if (_.isArray(item)) {
                item.forEach((sub, index) => {
                    if (_.isObject) {
                        for (let i in sub) {
                            result[`${key}[${index}].${i}`] = sub[i];
                        }
                    } else {
                        result[`${key}[${index}]`] = sub;
                    }
                });
            } else {
                result[key] = item;
            }
        }
    } else if (window.$shell == "browser") {
        result = new FormData();
        for (let key in params) {
            const item = params[key];
            if (_.isArray(item)) {
                item.forEach((sub, index) => {
                    if (_.isObject) {
                        for (let i in sub) {
                            result.append(`${key}[${index}].${i}`, sub[i]);
                        }
                    } else {
                        result.append(`${key}[${index}]`, sub);
                    }
                });
            } else {
                result.append(key, item);
            }
        }
    }
    return result;
}
