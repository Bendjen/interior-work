import SERVICE from "@/pages/defect/service";

export default {
    name: "rule-edit",
    data() {
        return {
            dialogVisible: false,
            ruleId: "",
            ifEdit: false,
            info: {
                filterval: "",
                judgeval: "",
                noneval: "",
                parameval: "",
            },

            filterList: [],
            judgeList: [],
            noneList: [],
            parameList: [],
        };
    },

    mounted() {},

    methods: {
        open({ ruleId }) {
            this.ifEdit = false;
            this.ruleId = ruleId;
            this.dialogVisible = true;
            this.fetchRuleInfo();
        },

        fetchRuleInfo() {
            SERVICE.fetchRuleItem({ tid: this.ruleId }).then((res) => {
                this.info = res.resdata;
                const { filterval, judgeval, noneval, parameval } = res.resdata;
                this.filterList = this.transformList(filterval);
                this.judgeList = this.transformList(judgeval);
                this.noneList = this.transformList(noneval);
                this.parameList = this.transformList(parameval);
            });
        },

        transformList(rule) {
            let list = [];
            if (rule.endsWith(";")) {
                list = rule.split(";").slice(0, -1);
            } else if (rule === "") {
                list = [];
            } else {
                let groupList = this.info.noneval.split(";");
                return groupList.map((group, groupIndex) => {
                    if (group === "") {
                        return [];
                    } else {
                        return group.split(",").map((sub, itemIndex) => {
                            return { value: sub, groupIndex, itemIndex };
                        });
                    }
                });
            }
            return list;
        },

        addLine(listType) {
            let cahceList = _.cloneDeep(this[listType]);
            cahceList.push([]);
            this[listType] = cahceList;
        },

        deleteLine(listType, groupIndex) {
            this.$confirm("确定要删除此行吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                let cahceList = _.cloneDeep(this[listType]);
                cahceList.splice(groupIndex, 1);
                this[listType] = cahceList;
            });
        },

        inputItem(e, item) {
            this.$set(item, "value", e.target.innerHTML);
        },
        addItem(listType, groupIndex) {
            let cahceList = _.cloneDeep(this[listType]);
            cahceList[groupIndex].push({
                value: "",
                groupIndex,
                itemIndex: cahceList[groupIndex] + 1,
            });
            this[listType] = cahceList;
        },
        deleteItem(typeList, item) {
            const { groupIndex, itemIndex } = item;
            this[typeList][groupIndex].splice(itemIndex, 1);
        },

        save() {},
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
