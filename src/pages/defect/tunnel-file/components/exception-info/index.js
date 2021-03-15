import SERVICE from "@/pages/defect/service";
// import DefectDetail from "../defect-detail";
import SolutionConfigEdit from "./dialogs/solution-edit";
import RuleEdit from "./dialogs/rule-edit";
import DescEdit from "./dialogs/desc-edit";

export default {
    name: "defect-info",
    data() {
        return {
            tab: "0",
            chapterList: [],
            defectList: [],
            page: 1,
            total: 0,
            pageCount: 50,
        };
    },
    props: {
        id: { default: "", type: String },
        title: { default: "", type: String },
    },

    components: { SolutionConfigEdit, RuleEdit, DescEdit },

    watch: {
        id() {
            this.fetchFileChapter();
        },
    },

    computed: {
        chapterId() {
            return this.chapterList[parseInt(this.tab)].id;
        },
    },

    methods: {
        fetchFileChapter() {
            if (this.id) {
                SERVICE.fetchFileChapter({
                    pid: this.id,
                    "page.count": 999,
                }).then((res) => {
                    this.chapterList = res.resdata;
                    this.tab = "0";
                    this.tabClick();
                });
            }
        },
        fetchDetail() {
            this.$emit();
        },
        backToFileList() {
            this.$emit("back");
        },
        tabClick() {
            this.defectList = [];
            this.page = 1;
            this.total = 0;
            this.pageChange(1);
        },
        pageChange(page) {
            SERVICE.fetchTunnelException({
                // tid: this.chapterId,
                fid: this.id,
                "page.start": page,
                "page.count": this.pageCount,
            }).then((res) => {
                if (page != this.page) {
                    this.$emit("scroll-top");
                }
                // console.log(this.serialize2(res.resdata));
                this.defectList = this.serialize(res.resdata);
                this.page = res.reshead.page.start;
                this.total = parseInt(res.reshead.page.total);
            });
        },

        serialize(inputList) {
            let list = [];
            let serializeList = Object.entries(
                _.groupBy(inputList, (item) => item.detail.stakedesc)
            ).map(([position, children]) => {
                return { position, children, rowspan: 0 };
            });
            serializeList.forEach((group) => {
                group.rowspan = group.children.reduce((pre, sub) => {
                    let subRowspan = sub.detail.jsonCzfa.length || 1;
                    sub.rowspan = subRowspan;
                    return pre + subRowspan;
                }, 0);
            });
            console.log(serializeList);
            serializeList.forEach((group, groupIndex) => {
                let positionPool = [
                    {
                        content: group.position || "",
                        rowspan: group.rowspan,
                    },
                ];
                let qxNamePool = [];
                let qxDescPool = [];
                let rulePool = [];
                group.children.forEach((record, recordIndex) => {
                    qxNamePool.push({
                        content: record.detail.qxname,
                        rowspan: record.rowspan,
                    });
                    qxDescPool.push({
                        content: record.detail.diseasedesc,
                        rowspan: record.rowspan,
                        recordId: record.id,
                        class: "buttonText",
                        event: "editDesc",
                    });
                    rulePool.push({
                        content:
                            record.detail.cfgid == 0
                                ? ""
                                : record.detail.cfgid_cn,
                        // content: record.detail.cfgid_cn,
                        rowspan: record.rowspan,
                        class: "buttonText",
                        event: record.detail.cfgid == 0 ? "" : "editRule",
                        ruleId: record.detail.cfgid,
                        recordId: record.id,
                    });
                    if (record.detail.jsonCzfa.length == 0) {
                        list.push([
                            ...positionPool.splice(0, 1),
                            ...qxNamePool.splice(0, 1),
                            ...qxDescPool.splice(0, 1),
                            {
                                content: "--",
                                rowspan: 1,
                                event: "editSolution",
                                class: "buttonText",
                                qxid: record.id,
                                list: [],
                            },
                            {
                                content: "--",
                                rowspan: 1,
                                event: "editSolution",
                                class: "buttonText",
                                qxid: record.id,
                                list: [],
                            },
                            {
                                content: "--",
                                rowspan: 1,
                                event: "editSolution",
                                class: "buttonText",
                                qxid: record.id,
                                list: [],
                            },
                            ...rulePool.splice(0, 1),
                        ]);
                    } else {
                        record.detail.jsonCzfa.forEach((item, index) => {
                            let prjname = {
                                content: item.prjname,
                                rowspan: 1,
                                class: "buttonText",
                                event: "editSolution",
                                list: record.detail.jsonCzfa,
                                qxid: record.id,
                            };
                            let solution = {
                                content: item.solution,
                                rowspan: 1,
                                class: "buttonText",
                                event: "editSolution",
                                list: record.detail.jsonCzfa,
                                qxid: record.id,
                            };
                            let czfaval = {
                                content: `${item.czfaval}${item.unitname}`,
                                rowspan: 1,
                                class: "buttonText",
                                event: "editSolution",
                                list: record.detail.jsonCzfa,
                                qxid: record.id,
                            };
                            list.push([
                                ...positionPool.splice(0, 1),
                                ...qxNamePool.splice(0, 1),
                                ...qxDescPool.splice(0, 1),
                                prjname,
                                solution,
                                czfaval,
                                ...rulePool.splice(0, 1),
                            ]);
                        });
                    }
                });
            });
            return list;
        },
        handleEvent(item) {
            if (item.event) {
                this[item.event](item);
            }
        },
        editSolution(item) {
            this.$refs.solutionEdit.open({ qxid: item.qxid, list: item.list });
        },

        editRule(item) {
            this.$refs.ruleEdit.open({
                ruleId: item.ruleId,
                recordId: item.recordId,
            });
        },

        editDesc(item) {
            this.$refs.descEdit.open({
                recordId: item.recordId,
            });
        },

        // openDetail(url) {
        //     this.$refs.defectDetail.open(url);
        // },
        updateChapter() {
            this.$confirm(
                "缺陷解析将根据当前规则重新生成并覆盖原数据，是否继续？"
            ).then(() => {
                SERVICE.updateConfig({
                    type: 2,
                    tid: this.chapterId,
                }).then((res) => {
                    this.$notify.success({
                        title: "更新成功",
                        message: "当前章节已更新",
                    });
                    this.pageChange(this.page);
                });
            });
        },
        updateItem(id) {
            this.$confirm(
                "缺陷解析将根据当前规则重新生成并覆盖原数据，是否继续？"
            ).then(() => {
                SERVICE.updateConfig({
                    type: 3,
                    tid: id,
                }).then((res) => {
                    this.$notify.success({
                        title: "更新成功",
                        message: "当前章节已更新",
                    });
                    this.pageChange(this.page);
                });
            });
        },
    },
};
