export default {
    name: "left-side",
    data() {
        return {
            menu: [
                {
                    title: "缺陷分析",
                    id: "defect-analysis",
                    children: [
                        { title: "缺陷管理", id: "defect-manage" },
                        { title: "分析视图", id: "analysis-view" },
                    ],
                },
                {
                    title: "安全检查",
                    id: "safe-check",
                    children: [
                        { title: "工地配置", id: "project" },
                        { title: "人员配置", id: "person" },
                        { title: "报告管理", id: "report" },
                    ],
                },
            ],
        };
    },

    mounted() {},

    methods: {},
};
