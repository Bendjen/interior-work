import SERVICE from "./service";

export default {
    name: "data-config",
    data() {
        return {
            dialogVisible: false,
            recordId: "",
            ifEdit: "",
            title: "",
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

    mounted() {},

    methods: {
        open({ chapter }) {
            console.log(chapter);
            this.chapterId = chapter.id;
            this.title = chapter.detail.bridgename;
            this.dialogVisible = true;
            this.fetchItemInfo();
        },

        fetchItemInfo() {
            SERVICE.fetchItem({ tid: this.chapterId }).then((res) => {
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
                this.closeDialog();
                // this.$emit("update");
                this.$notify.success({
                    title: "保存成功",
                    message: "配置已更新",
                });
            });
        },
    },
};
