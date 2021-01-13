import SERVICE from "@/pages/defect/service";

export default {
    name: "item-edit",
    data() {
        return {
            dialogVisible: false,
            id: "",
            ifEdit: "",
            info: {},
        };
    },

    mounted() {},

    methods: {
        open(id) {
            this.id = id;
            this.dialogVisible = true;
            this.fetchItemInfo();
        },

        fetchItemInfo() {
            SERVICE.fetchSolutionItem({ tid: this.id }).then((res) => {
                this.info = res.resdata;
            });
        },

        clear() {
            this.dialogVisible = false;
            this.id = "";
            this.ifEdit = false;
            this.info = {};
        },
        closeDialog() {
            if (this.ifEdit) {
                this.$emit("update");
            }
            this.clear();
        },
        save() {
            SERVICE.saveSolution(this.info).then((res) => {
                this.$notify.success({
                    title: "保存成功",
                    message: "方案编辑已保存",
                });
                this.closeDialog();
                this.$emit("update")
            });
        },
    },
};
