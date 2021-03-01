import SERVICE from "./service";
import Excel from "./components/excel";
export default {
    name: "base-info",
    data() {
        return {
            info: {
                startstake: "",
                endstake: "",
                lcstartstake: "",
                lcstep: "",
                wytype: "",
                zhtype: "",
            },
        };
    },

    components: { Excel },

    mounted() {},

    methods: {
        refresh() {},
    },
};
