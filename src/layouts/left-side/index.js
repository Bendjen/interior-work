export default {
    name: "left-side",
    data() {
        return {
            activeIndex: "bridge-file",
            menu: [
                {
                    title: "缺陷分析",
                    id: "defect",
                    icon: "el-icon-s-claim",
                    children: [
                        {
                            title: "桥梁文件",
                            id: "bridge-file",
                            icon: "el-icon-document-copy",
                        },
                        {
                            title: "隧道文件",
                            id: "tunnel-file",
                            icon: "el-icon-document-copy",
                        },
                        {
                            title: "规则配置",
                            id: "rule",
                            icon: "el-icon-s-tools",
                        },
                        {
                            title: "方案配置",
                            id: "solution",
                            icon: "el-icon-s-tools",
                        },
                    ],
                },
                {
                    title: "安全检查",
                    id: "safe-check",
                    icon: "el-icon-message-solid",
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
