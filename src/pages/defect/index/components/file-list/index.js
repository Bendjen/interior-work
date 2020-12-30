import SERVICE from "@/pages/defect/service";

export default {
    name: "file-list",
    data() {
        return {
            fileList: [],
        };
    },

    mounted() {
        this.fetchFileList();
    },

    methods: {
        fetchFileList() {
            SERVICE.fetchFileList().then((res) => {
                this.fileList = res.resdata;
            });
        },
        switchDetail(scope) {
            this.$emit("swicth-detail", scope.row);
        },
        handlePreview(file) {
            console.log(file);
        },
    },
};
