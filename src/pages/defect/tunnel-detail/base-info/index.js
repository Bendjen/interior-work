import SERVICE from "./service";
import Excel from "./components/excel";
import ClipboardJS from "clipboard";

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
                sidestake: "",
            },
            sdStartThousandStake: "",
            sdStartHundredStake: "",
            sdEndThousandStake: "",
            sdEndHundredStake: "",
            lcStartThousandStake: "",
            lcStartHundredStake: "",
            // typeOriginData: [],
        };
    },

    watch: {
        sdStartThousandStake(value) {
            let thousandStake = parseInt(value) || 0;
            let hundredStake = parseInt(this.sdStartHundredStake) || 0;
            this.$set(
                this.info,
                "startstake",
                thousandStake * 1000 + hundredStake
            );
        },
        sdStartHundredStake(value) {
            let thousandStake = parseInt(this.sdStartThousandStake) || 0;
            let hundredStake = parseInt(value) || 0;
            this.$set(
                this.info,
                "startstake",
                thousandStake * 1000 + hundredStake
            );
        },
        sdEndThousandStake(value) {
            let thousandStake = parseInt(value) || 0;
            let hundredStake = parseInt(this.sdEndHundredStake) || 0;
            this.$set(
                this.info,
                "endstake",
                thousandStake * 1000 + hundredStake
            );
        },
        sdEndHundredStake(value) {
            let thousandStake = parseInt(this.sdEndThousandStake) || 0;
            let hundredStake = parseInt(value) || 0;
            this.$set(
                this.info,
                "endstake",
                thousandStake * 1000 + hundredStake
            );
        },
        lcStartThousandStake(value) {
            let thousandStake = parseInt(value) || 0;
            let hundredStake = parseInt(this.lcStartHundredStake) || 0;
            this.$set(
                this.info,
                "lcstartstake",
                thousandStake * 1000 + hundredStake
            );
        },
        lcStartHundredStake(value) {
            let thousandStake = parseInt(this.lcStartThousandStake) || 0;
            let hundredStake = parseInt(value) || 0;
            this.$set(
                this.info,
                "lcstartstake",
                thousandStake * 1000 + hundredStake
            );
        },
    },

    components: { Excel },

    props: {
        chapterid: { default: "", type: String },
        fileid: { default: "", type: String },
    },
    mounted() {
        let clipboardWhole = new ClipboardJS(".copyWhole", {
            text: (trigger) => {
                return this.wholeClipBoard;
            },
        });
        clipboardWhole.on("success", (e) => {
            this.$message.success("命令已复制到剪贴板");
        });
        let clipboardItem = new ClipboardJS(".copyItem", {
            text: (trigger) => {
                return this.itemClipBoard;
            },
        });
        clipboardItem.on("success", (e) => {
            this.$message.success("命令已复制到剪贴板");
        });
    },

    methods: {
        refresh() {
            this.fetchInfo();
            this.fetchTypeList();
            this.fetchTechList(1);
            this.fetchTechList(2);
        },
        switch() {
            if (!this.info.id) {
                this.fetchInfo();
                this.fetchTypeList();
                this.fetchTechList(1);
                this.fetchTechList(2);
            }
        },
        fetchTypeList() {
            SERVICE.fetchTypeList({ tid: this.fileid }).then((res) => {
                let excel = res.resdata.map((item) => {
                    return {
                        id: item.id,
                        list: [
                            item.detail.zhtypeid,
                            item.detail.cqtypeid,
                            item.detail.echd,
                        ],
                    };
                });
                excel.push({ id: "", list: ["", "", ""] });
                // this.typeOriginData = res.resdata;
                this.$refs[`excel3`].setExcel(excel);
            });
        },
        saveTypeList() {
            let data = this.$refs[`excel3`].excel.filter(
                (item) => item.list[0]
            );
            let TransData = data.map(({ id, list }, index) => {
                const [zhtypeid, cqtypeid, echd] = list;
                return {
                    fileid: this.fileid,
                    zhtypeid,
                    cqtypeid,
                    echd,
                    serialnum: index,
                    id: id || "",
                    memo: "",
                };
            });
            SERVICE.saveTypeList(TransData)
                .then((res) => {
                    this.$notify.success({
                        title: "保存成功",
                        message: "基础数据已更新",
                    });
                    this.fetchTypeList();
                })
                .catch((e) => {
                    this.fetchTypeList();
                });
        },
        fetchInfo() {
            SERVICE.fetchInfo({ tid: this.chapterid }).then((res) => {
                this.$set(this.$data, "info", res.resdata);
                const {
                    startstake,
                    endstake,
                    lcstartstake,
                    cadholewidth,
                } = res.resdata;
                if (startstake) {
                    this.sdStartThousandStake = Math.floor(
                        parseInt(startstake) / 1000
                    );
                    this.sdStartHundredStake = parseInt(startstake) % 1000;
                }
                if (endstake) {
                    this.sdEndThousandStake = Math.floor(
                        parseInt(endstake) / 1000
                    );
                    this.sdEndHundredStake = parseInt(endstake) % 1000;
                }
                if (lcstartstake) {
                    this.lcStartThousandStake = Math.floor(
                        parseInt(lcstartstake) / 1000
                    );
                    this.lcStartHundredStake = parseInt(lcstartstake) % 1000;
                }
                this.info.cadholewidth = cadholewidth || 128;
            });
        },
        save() {
            SERVICE.saveInfo(this.info)
                .then((res) => {
                    this.$notify.success({
                        title: "保存成功",
                        message: "基础数据已更新",
                    });
                    this.fetchInfo();
                })
                .catch((e) => {
                    this.fetchInfo();
                });
        },
        fetchTechList(type) {
            SERVICE.fetchTechList({ zjid: this.chapterid, type }).then(
                (res) => {
                    let excel = res.resdata.map((item) => {
                        return {
                            // id: item.id,
                            id: "",
                            list: [item.detail.startstake, item.detail.typeid],
                        };
                    });
                    excel.push({ id: "", list: ["", ""] });
                    this.$refs[`excel${type}`].setExcel(excel);
                }
            );
        },
        saveTechList(type) {
            let data = this.$refs[`excel${type}`].excel.filter(
                (item) => item.list[0] !== ""
            );

            let TransData = data.map(({ id, list }, index) => {
                const [startstake, typeid] = list;
                return {
                    zjid: this.chapterid,
                    startstake: startstake,
                    jstype: type,
                    typeid: typeid,
                    serialnum: index,
                    id: id || "",
                    memo: "",
                };
            });

            SERVICE.saveTechList({
                id: this.chapterid,
                jstype: type,
                lstWyJscs: TransData,
            })
                .then((res) => {
                    this.$notify.success({
                        title: "保存成功",
                        message: "基础数据已更新",
                    });
                    this.fetchTechList(type);
                })
                .catch((e) => {
                    this.fetchTechList(type);
                });
        },
        clearExcel(type) {
            if (type != 3) {
                this.$refs[`excel${type}`].clear();
            }
        },
        deleteLine(id) {
            let data = this.$refs[`excel3`].excel.filter((item) => item[0]);
            SERVICE.deleteLine({ tid: id }).then((res) => {
                this.refresh();
            });
        },
        listenCommand(command) {
            this[command]();
        },
        copyCad() {
            SERVICE.fetchCad({ tid: this.chapterid }).then((res) => {
                this.wholeClipBoard = res.resdata
                    .map((item) => item.item)
                    .join("\n");
                document.querySelector(".copyWhole").click();
            });
        },
    },
};
