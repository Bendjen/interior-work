import requestCreator from "@/utils/requestCreator";

export default {
    name: "defect-detail",
    data() {
        return {
            dialogVisible: false,
        };
    },

    mounted() {},

    methods: {
        open(url) {
            requestCreator({ fetch: `/jtyh${url}` })
                .fetch()
                .then((res) => {
                    console.log(res);
                    this.dialogVisible = true;
                });
        },
    },
};
