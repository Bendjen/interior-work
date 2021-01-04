import SERVICE from "@/pages/defect/service";

export default {
    name: "file-list",
    data() {
        return {
            fileList: [],
            page: 1,
            total: 0,
            pageCount: 10,
            date: "",
            file: null,
            uploadForm: {
                supplier: "",
                remark: "",
            },
            dialogVisible: false,
        };
    },

    mounted() {
        this.fetchFileList(1);
    },

    methods: {
        fetchFileList(page) {
            SERVICE.fetchFileList({
                "page.count": this.pageCount,
                "page.start": page,
            }).then((res) => {
                this.fileList = res.resdata;
                this.page = res.reshead.page.start;
                this.total = parseInt(res.reshead.page.total);
            });
        },
        switchDetail(scope) {
            this.$emit("swicth-detail", scope.row);
        },
        pageChange(page) {
            this.fetchFileList(page);
        },
        deleteFile(scope) {
            this.$confirm("删除后不可恢复，确认要删除吗？").then(() => {
                SERVICE.deleteFile({ tid: scope.row.id }).then((res) => {
                    this.$notify.success({
                        title: "文件删除成功",
                        message: `${scope.row.detail.filename} 已被删除`,
                    });
                    let targetIndex = this.fileList.findIndex(
                        (item) => item.id == scope.row.id
                    );
                    this.fileList.splice(targetIndex, 1);
                });
            });
        },
        uploadSuccess(res) {
            if (res.status == "ng") {
                this.$notify.error({
                    title: "错误",
                    message: res.message || "文件上传失败",
                });
            } else {
                this.$notify.success({
                    title: "上次成功",
                    message: "所选文件已成功上传",
                });
                this.fetchFileList(1);
            }
        },

        fileChange(file, fileList) {
            this.file = file;
            this.dialogVisible = true;
        },
        onSubmit() {
            // const fileReader = new FileReader();
            // fileReader.readAsArrayBuffer(this.file);
            // fileReader.onload = (e) => {
            //     console.log(e.target.result);
            // };
            console.log(new Blob([this.file]))
            SERVICE.uploadFile({
                qxFiles: new Blob([this.file]),
            }).then((res) => {
                console.log(res);
            });
        },
    },
};
