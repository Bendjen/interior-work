import { mapState, mapMutations } from "vuex";
export default {
    name: "top-side",
    data() {
        return {};
    },

    computed: {
        ...mapState(["user"]),
    },

    methods: {
        ...mapMutations(["logout"]),
        handleCommand(command) {
            if (command == "logout") {
                window.$login.clear();
                this.$router.push("/base/login");
            }
        },
    },
};
