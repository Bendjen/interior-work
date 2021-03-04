import SERVICE from "./service";
import { Loading } from "element-ui";
import ClipboardJS from "clipboard";
let uploading = null;

export default {
    name: "wall-info",
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            pageCount: 50,
        };
    },

    props: {
        chapterid: { default: "", type: String },
        fileid: { default: "", type: String },
    },

    components: {},

    mounted() {
        let clipboardWhole = new ClipboardJS(".copyWhole", {
            text: (trigger) => {
                return this.wholeClipBoard;
            },
        });
        clipboardWhole.on("success", (e) => {
            this.$message.success("命令已复制到剪贴板");
        });
        let clipboardItem = new ClipboardJS(".copyItem", {
            text: (trigger) => {
                return this.itemClipBoard;
            },
        });
        clipboardItem.on("success", (e) => {
            this.$message.success("命令已复制到剪贴板");
        });
    },

    methods: {
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
            }
        },

        refresh() {
            this.list = [];
            this.page = 1;
            this.total = 0;
            this.fetchList(1);
        },

        switch() {
            if (this.list.length == 0) {
                this.list = [];
                this.page = 1;
                this.total = 0;
                this.fetchList(1);
            }
        },

        fetchList(page) {
            SERVICE.fetchList({
                tid: this.chapterid,
                "page.start": page,
                "page.count": this.pageCount,
            }).then((res) => {
                if (page != this.page) {
                    this.$emit("scroll-top");
                }
                this.list = res.resdata;
                this.page = res.reshead.page.start;
                this.total = parseInt(res.reshead.page.total);
            });
        },

        listenCommand(command) {
            this[command]();
        },
        copyCad() {
            SERVICE.fetchCad({ tid: this.chapterid }).then((res) => {
                this.wholeClipBoard = res.resdata
                    .map((item) => item.item)
                    .join("\n");
                document.querySelector(".copyWhole").click();
            });
        },
    },
};
