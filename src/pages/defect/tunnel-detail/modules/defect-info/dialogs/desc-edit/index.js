import SERVICE from "./service";

export default {
    name: "desc-edit",
    data() {
        return {
            dialogVisible: false,
            recordId: "",
            ifEdit: "",
            info: {},
        };
    },

    mounted() {},

    methods: {
        open({ recordId }) {
            this.recordId = recordId;
            this.dialogVisible = true;
            this.fetchItemInfo();
        },

        fetchItemInfo() {
            SERVICE.fetchItem({ tid: this.recordId }).then((res) => {
                this.info = res.resdata;
            });
        },

        clear() {
            this.dialogVisible = false;
            this.recordId = "";
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
            SERVICE.saveItem(this.info).then((res) => {
                // this.$notify.success({
                //     title: "保存成功",
                //     message: "文件已保存",
                // });
                SERVICE.updateConfig({
                    type: 3,
                    tid: this.recordId,
                }).then((res) => {
                    this.closeDialog();
                    this.$emit("update");
                    this.$notify.success({
                        title: "保存成功",
                        message: "规则已更新",
                    });
                });

            });
        },
    },
};
