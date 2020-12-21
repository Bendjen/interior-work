import { mapMutations } from "vuex";
export default {
    name: "Home",
    data() {
        return {
            form: {
                name: "",
                password: "",
            },
        };
    },

    mounted() {},

    methods: {
        ...mapMutations(["updateLogin"]),
        login() {
            this.updateLogin();
            this.$router.push("home");
        },
    },
};
