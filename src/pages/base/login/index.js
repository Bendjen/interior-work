import { mapMutations, mapActions } from "vuex";
import SERVICE from "../service";

export default {
    name: "Login",
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
        };
    },

    mounted() {
        this.env = this.$store.state.env;
        this.$nextTick(() => {
            const username_cache = this.$Storage.originGet("username");
            const password_cache = this.$Storage.originGet("password");
            if (username_cache && password_cache) {
                this.form.username = username_cache;
                this.form.password = password_cache;
            }
        });
    },

    methods: {
        ...mapActions(["fetchUserInfo"]),
        clickLogin() {
            const { username, password } = this.form;
            SERVICE.login({
                username: username,
                password: password,
                _ajax: 1,
            }).then((res) => {
                this.$Storage.originSet("username", username);
                this.$Storage.originSet("password", password);
                this.$login.update();
                this.fetchUserInfo(true);
                this.$router.push("/defect/bridge-file");
            });
        },
    },
};
