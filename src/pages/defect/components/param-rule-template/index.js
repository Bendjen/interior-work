import SERVICE from "@/pages/defect/service";

export default {
    name: "param-rule-template",
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
        };
    },

    mounted() {},

    methods: {
        addLine() {
            this.ruleList.push({ param: "", targets: [""] });
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
            this.ruleList[groupIndex].targets.push("");
        },
        deleteItem(groupIndex, itemIndex) {
            this.ruleList[groupIndex].targets.splice(itemIndex, 1);
        },
        inputParam(e, groupIndex) {
            this.$set(this.ruleList[groupIndex], "param", e.target.innerText);
        },
        inputItem(e, groupIndex, itemIndex) {
            this.$set(
                this.ruleList[groupIndex].targets,
                itemIndex,
                e.target.innerText
            );
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
                        return { param: "", targets: [] };
                    } else {
                        if (group.includes(":")) {
                            let index = group.indexOf(":");
                            return {
                                param: group.slice(0, index),
                                targets: group.slice(index + 1).split(","),
                            };
                        } else {
                            return {
                                param: "",
                                targets: group.split(","),
                            };
                        }
                    }
                });
            }
            return list;
        },
        tsToStr() {
            return this.ruleList
                .filter((item) => item.param !== "")
                .map((item) => {
                    return `${item.param}:${item.targets
                        .filter((sub) => sub !== "")
                        .join(",")}`;
                })
                .join(";");
        },
    },
};
