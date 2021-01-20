import FileList from "./components/file-list";
import DefectInfo from "./components/defect-info";

export default {
    name: "defect-analysis-index",
    data() {
        return {
            pageIndex: 1,
            tableData: [],
            detailList: [],
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
