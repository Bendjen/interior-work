import Store from "@/store";
const Storage = window.localStorage;

export default {
    name: "Storage",
    method: {
        set(key, value) {
            const env_key = `${Store.state.env.proxy}_${Store.state.user.loginid}_${key}`;
            Storage.setItem(env_key, JSON.stringify(value));
        },
        get(key) {
            const env_key = `${Store.state.env.proxy}_${Store.state.user.loginid}_${key}`;
            const result = Storage.getItem(env_key);
            try {
                return JSON.parse(result);
            } catch (error) {
                return result;
            }
        },
        remove(key) {
            const env_key = `${Store.state.env.proxy}_${Store.state.user.loginid}_${key}`;
            Storage.removeItem(env_key);
        },
        originSet(key, value) {
            const env_key = `${Store.state.env.proxy}_${key}`;
            Storage.setItem(env_key, JSON.stringify(value));
        },
        originGet(key) {
            const env_key = `${Store.state.env.proxy}_${key}`;
            const result = Storage.getItem(env_key);
            try {
                return JSON.parse(result);
            } catch (error) {
                return result;
            }
        },
        originRemove(key) {
            const env_key = `${Store.state.env.proxy}_${key}`;
            Storage.removeItem(env_key);
        },
        _set(key, value) {
            Storage.setItem(key, JSON.stringify(value));
        },
        _get(key) {
            const result = Storage.getItem(key);
            try {
                return JSON.parse(result);
            } catch (error) {
                return result;
            }
        },
        _remove(key) {
            Storage.removeItem(key);
        },
        clearAll() {
            Storage.clear();
        },
    },
};
