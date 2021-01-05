export default {
    name: "left-side",
    data() {
        return {
            menu: [
                {
                    title: "缺陷分析",
                    id: "defect",
                    children: [
                        {
                            title: "文件解析",
                            id: "index",
                        },
                        {
                            title: "规则配置",
                            id: "rule",
                        },
                    ],
                },
                {
                    title: "安全检查",
                    id: "safe-check",
                    children: [
                        { title: "数据上报", id: "project" },
                        { title: "参数配置", id: "person" },
                        { title: "报告管理", id: "report" },
                    ],
                },
            ],
        };
    },

    mounted() {},

    methods: {
        selectMenu(index) {
            this.$router.push(`/defect/${index}`);
        },
    },
};
