import SERVICE from "@/pages/defect/service";

export default {
    name: "rule-info-template",
    props: {
        info: {
            type: Object,
            default: {},
        },
    },

    watch: {
        info: {
            handler(info = {}) {
                console.log(info);
                const { unittype, parttype, serialnum, memo, status } = info;
                this.form = {
                    unittype,
                    serialnum,
                    memo,
                    status,
                    parttype: parttype ? parttype.split(",") : "",
                };
            },
            immediate: true,
        },
    },

    data() {
        return {
            form: {
                unittype: "",
                parttype: [],
                serialnum: "",
                memo: "",
                status: "1",
            },
            typeOption: [
                { id: "110", name: "承重构件" },
                { id: "120", name: "一般构件" },
                { id: "200", name: "桥面系、支座、附属工程及其它" },
                { id: "300", name: "基础" },
                { id: "400", name: "桥梁下部" },
            ],
        };
    },

    mounted() {},

    methods: {
        fetchForm() {
            return { ...this.form, parttype: this.form.parttype.join(",") };
        },
    },
};
