import FileList from "./components/file-list";
import DefectInfo from "./components/defect-info";
import ExceptionInfo from "./components/exception-info";

export default {
    name: "defect-analysis-index",
    data() {
        return {
            pageIndex: "file",
            tableData: [],
            detailList: [],
            currentFileId: "",
            currentFileName: "",
        };
    },

    components: {
        FileList,
        DefectInfo,
        ExceptionInfo,
    },

    mounted() {
        // this.fetchFileList();
    },

    methods: {
        backToFileList() {
            this.pageIndex = "file";
        },

        swicthDetail(item) {
            // this.pageIndex = "defect";
            // this.currentFileId = item.id;
            // this.currentFileName = item.detail.filename;
            this.$router.push({
                path: "tunnel-detail",
                query: {
                    fileid: item.id,
                    filename: item.detail.filename,
                },
            });
        },
        swicthException(item) {
            this.pageIndex = "exception";
            this.currentFileId = item.id;
            this.currentFileName = item.detail.filename;
        },
        clearFileInfo() {
            this.currentFileId = "";
            this.currentFileName = "";
        },
        scrollTop() {
            this.$refs.topBtn.scrollToTop();
        },
    },
};
