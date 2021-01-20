import SERVICE from "@/pages/defect/tunnel-file/service";

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
            SERVICE.fetchFileItem({ tid: this.id }).then((res) => {
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
            SERVICE.saveFile(this.info).then((res) => {
                this.$notify.success({
                    title: "保存成功",
                    message: "文件已保存",
                });
                this.closeDialog();
                this.$emit("update")
            });
        },
    },
};
