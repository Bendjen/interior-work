import SERVICE from "@/pages/defect/service";

export default {
    name: "except-rule-template",
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
            this.ruleList.push([""]);
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
            this.ruleList[groupIndex].push("");
        },
        deleteItem(groupIndex, itemIndex) {
            this.ruleList[groupIndex].splice(itemIndex, 1);
        },
        inputItem(e, groupIndex, itemIndex) {
            this.$set(this.ruleList[groupIndex], itemIndex, e.target.innerText);
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
                        return [];
                    } else {
                        return group.split(",").map((sub, itemIndex) => {
                            return sub;
                        });
                    }
                });
            }
            return list;
        },
        tsToStr() {
            return this.ruleList
                .filter((item) => item.length > 0)
                .map((group) => {
                    return group
                        .filter((item) => item !== "")
                        .join(",");
                })
                .join(";");
        },
    },
};
