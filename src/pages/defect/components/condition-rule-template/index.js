import SERVICE from "@/pages/defect/service";

export default {
    name: "condition-rule-template",
    props: {
        field: {
            type: String,
            default: "",
        },
    },

    watch: {
        field: {
            handler(value) {
                this.ruleList = this.tsToArr(value);
            },
            immediate: true,
        },
    },

    data() {
        return {
            ruleList: [],
            options: [],
            searchLoading: "",
        };
    },

    mounted() {
        this.remoteMethod("");
    },

    methods: {
        addLine() {
            this.ruleList.push({
                judge: "",
                result: [{ code: "", value: "" }],
            });
        },
        deleteLine(groupIndex) {
            this.$confirm("确定要删除此行吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                this.ruleList.splice(groupIndex, 1);
            });
        },
        addItem(groupIndex) {
            this.ruleList[groupIndex].result.push({ code: "", value: "" });
        },
        deleteItem(groupIndex, itemIndex) {
            this.ruleList[groupIndex].result.splice(itemIndex, 1);
        },
        inputJudge(e, groupIndex) {
            this.$set(this.ruleList[groupIndex], "judge", e.target.innerText);
        },
        inputValue(e, item) {
            this.$set(item, "value", e.target.innerText);
        },
        tsToArr(rule) {
            let list = [];
            if (rule.endsWith(";")) {
                rule = rule
                    .split(";")
                    .slice(0, -1)
                    .join(";");
            }
            if (rule === "") {
                list = [];
            } else {
                let groupList = rule.split(";");
                list = groupList.map((group, groupIndex) => {
                    if (group === "") {
                        return { judge: "", result: [] };
                    } else {
                        if (group.includes(":")) {
                            let index = group.indexOf(":");
                            let judge = group.slice(0, index);
                            let result = group
                                .slice(index + 1)
                                .split("|")
                                .map((sub) => {
                                    return {
                                        code: sub.split("#")[0] || "",
                                        value: sub.split("#")[1] || "",
                                    };
                                });
                            return { judge, result };
                        } else {
                            return {
                                judge: "",
                                result: group.split("|").map((sub) => {
                                    return {
                                        code: sub.split("#")[0] || "",
                                        value: sub.split("#")[1] || "",
                                    };
                                }),
                            };
                        }
                    }
                });
            }
            return list;
        },
        confirmOption(item, option) {
            this.$set(item, "code", option.detail.code);
        },
        computeDict(code) {
            const target = this.options.find(
                (item) => item.detail.code == code
            );
            return target ? target.detail : {};
        },
        remoteMethod(query) {
            this.searchLoading = true;
            SERVICE.fetchSolutionOption({
                "page.search": query,
                "page.count": 999,
                cfgtype:this.cfgtype || 1
            }).then((res) => {
                this.options = res.resdata;
                this.searchLoading = false;
            });
        },
        tsToStr() {
            return this.ruleList
                .map((item) => {
                    return `${item.judge}:${item.result
                        .map((sub) => `${sub.code}#${sub.value}`)
                        .join("|")}`;
                })
                .join(";");
        },
    },
};
