import requestCreator from "@/utils/requestCreator";

export default {
    name: "defect-detail",
    data() {
        return {
            dialogVisible: false,
            info: [],
        };
    },

    mounted() {},

    methods: {
        open(url) {
            requestCreator({ fetch: `/jtyh${url}` })
                .fetch()
                .then((res) => {
                    this.info = res.resdata;
                    this.dialogVisible = true;
                });
        },
        save() {
            this.dialogVisible = false;
        },
    },
};
