import FileList from "./components/file-list";
import DefectInfo from "./components/defect-info";

export default {
    name: "defect-analysis-index",
    data() {
        return {
            pageIndex: 1,
            tableData: [
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
                {
                    fileName: "二季度检测报告分析.docx",
                    date: "2020-12-15",
                    supplier: "中建集团二局项目部",
                },
            ],
            detailList: [{ title: "华南小桥大桥", list: [] }],
            currentFileId: "",
            currentFileName: "",
        };
    },

    components: {
        FileList,
        DefectInfo,
    },

    mounted() {
        // this.fetchFileList();
    },

    methods: {
        backToFileList() {
            this.pageIndex = 1;
        },

        swicthDetail(item) {
            this.pageIndex = 2;
            this.currentFileId = item.id;
            this.currentFileName = item.detail.filename;
        },
    },
};
