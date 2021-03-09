import { saveAs } from "file-saver";
import { Loading } from "element-ui";
import SERVICE from "@/pages/defect/service";
import ItemEdit from "./dialogs/item-edit";
let uploading = null;

export default {
    name: "file-list",
    data() {
        return {
            fileList: [],
            page: 1,
            total: 0,
            pageCount: 10,
            date: "",
            uploadForm: {
                provider: "",
                memo: "",
            },
            dialogVisible: false,
        };
    },

    mounted() {
        this.fetchFileList(1);
    },

    components: { ItemEdit },

    methods: {
        fetchFileList(page) {
            SERVICE.fetchFileList({
                startdate: this.date ? this.date[0] : "",
                enddate: this.date ? this.date[1] : "",
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
        switchException(scope){
            this.$emit("switch-exception", scope.row);
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
        beforeUpload() {
            uploading = Loading.service({
                fullscreen: false,
                lock: true,
                text: "请稍候",
                customClass: "request-loading",
            });
        },
        uploadSuccess(res) {
            this.$refs.uploader.clearFiles();
            this.dialogVisible = false;
            uploading.close();
            if (res.status == "ng") {
                this.$notify.error({
                    title: "错误",
                    message: res.message || "文件上传失败",
                });
            } else {
                this.$notify.success({
                    title: "上传成功",
                    message: "所选文件已成功上传",
                });
                this.fetchFileList(1);
            }
        },

        fileChange(file, fileList) {
            if (fileList.length > 0) {
                this.dialogVisible = true;
            }
        },
        onSubmit() {
            this.$refs.uploader.submit();
        },
        updateAnalyse(id) {
            this.$confirm(
                "缺陷解析将根据当前规则重新生成并覆盖原数据，是否继续？"
            ).then(() => {
                SERVICE.updateConfig({
                    type: 1,
                    tid: id,
                }).then((res) => {
                    this.$emit("clear");
                    this.$notify.success({
                        title: "更新成功",
                        message: "所选文件已重新解析",
                    });
                });
            });
        },
        exportReport(id) {
            SERVICE.exportfile({
                tid: id,
            }).then((res) => {
                saveAs(
                    `/jtyh/mobile/busisafetycheck/download/${res.resdata.id}`,
                    res.resdata.filename
                );
                this.$notify.success({
                    title: "导出成功",
                    message: "文件已开始下载",
                });
            });
        },
        editItem(id) {
            this.$refs.itemEdit.open(id);
        },
    },
};
