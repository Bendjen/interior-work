import SERVICE from "../service";

export default {
    name: "defect-rule",
    data() {
        return {
            tableData: [
                {
                    blackList: ["横向裂缝:横向裂缝", "梁底"],
                    whiteList: [],
                    checkParam: [],
                    paramLimit: [],
                },
            ],
        };
    },

    components: {},

    mounted() {},

    methods: {
        addTag(line, key) {
            this.$prompt("请输入匹配字符串", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
            }).then(({ value }) => {
                let list = value.split(";");
                this.tableData[line][key].push(...list);
            });
        },
        deleteTag(line, key, index) {
            this.tableData[line][key].splice(index, 1);
        },
        addRule() {
            this.tableData.push({
                blackList: [],
                whiteList: [],
                checkParam: [],
                paramLimit: [],
            });
        },
        deletItem(index) {
            this.tableData.splice(index, 1);
        },
    },
};
