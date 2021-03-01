import SERVICE from "@/pages/defect/service";

export default {
    name: "solution-edit",
    data() {
        return {
            dialogVisible: false,
            list: [],
            options: [],
            searchLoading: false,
            qxid: "",
            ifEdit: false,
        };
    },

    mounted() {},

    methods: {
        open({ qxid, list }) {
            this.ifEdit = false;
            this.qxid = qxid;
            this.list = _.cloneDeep(list) || [];
            this.dialogVisible = true;
            if (this.options.length == 0) {
                this.remoteMethod("");
            }
        },
        remoteMethod(query) {
            this.searchLoading = true;
            SERVICE.fetchSolutionOption({
                cfgtype:1,
                "page.search": query,
                "page.count": 999,
            }).then((res) => {
                this.options = res.resdata;
                this.searchLoading = false;
            });
        },
        changeItem(index, item) {
            const { solution, prjname, unitname } = item.detail;
            this.$set(this.list[index], "prjname", prjname);
            this.$set(this.list[index], "solution", solution);
            this.$set(this.list[index], "unitname", unitname);
            this.$set(this.list[index], "czfaid", item.id);
        },
        addLine() {
            this.list.push({
                id: "",
                solution: "",
                prjname: "",
                unitname: "",
                czfaval: "",
                czfaid: "",
                editdate: "",
            });
        },
        deleteLine(index, item) {
            if (item.id) {
                this.$confirm("确定要将现有方案删除吗?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(() => {
                    SERVICE.deleteSolution({ tid: item.id }).then((res) => {
                        this.list.splice(index, 1);
                        this.ifEdit = true;
                        this.$notify.success({
                            title: "删除成功",
                            message: "所选已删除",
                        });
                    });
                });
            } else {
                this.list.splice(index, 1);
            }
        },
        save() {
            if (this.list.some((item) => item.czfaval === "")) {
                this.$alert("请确保所有方案填写完整");
            } else {
                this.list.forEach((item) => {
                    const { id, czfaid, czfaval, editdate, solution } = item;
                    SERVICE.saveSolutionConfig({
                        qxid: this.qxid,
                        id,
                        czfaid,
                        czfaval,
                        editdate,
                    }).then((res) => {
                        this.$notify.success({
                            title: "保存成功",
                            message: solution,
                        });
                        this.ifEdit = true;
                        this.$set(item, "id", res.resdata.tid);
                    });
                });
            }
        },
        clear() {
            this.qxid = "";
            this.list = [];
            this.ifEdit = false;
        },
        closeDialog() {
            if (this.ifEdit) {
                this.$emit("update");
            }
            this.clear();
        },
    },
};
