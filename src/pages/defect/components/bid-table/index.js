import SERVICE from "./service";
import { saveAs } from "file-saver";

export default {
    name: "bid-table",
    data() {
        return {
            dialogVisible: false,
            table: [],
            thead: [],
            // page: 1,
            // total: 0,
            // pageCount: 50,
        };
    },

    props: {
        fileid: { default: "", type: String },
    },

    mounted() {},

    methods: {
        open() {
            this.dialogVisible = true;
            this.fetchTable();
        },

        fetchTable() {
            SERVICE.fetchTable({
                tid: this.fileid,
            }).then((res) => {
                this.table = res.resdata;
                if (res.resdata.length > 0) {
                    this.thead = res.resdata[1].map((item) => item.name);
                }
                // this.page = res.reshead.page.start;
                // this.total = parseInt(res.reshead.page.total);
            });
        },
        save() {
            this.dialogVisible = false;
        },
        configWidth(index) {
            switch (index) {
                case 0:
                    return "250";
                case 1:
                    return "80";
                case 2:
                    return "80";
                case 3:
                    return "80";
                default:
                    return "100";
            }
        },
        download() {
            SERVICE.exportTable({
                tid: this.fileid,
            }).then((res) => {
                saveAs(
                    `/jtyh/mobile/busisafetycheck/download/${res.resdata.id}`,
                    res.resdata.filename
                );
                this.$notify.success({
                    title: "下载",
                    message: "文件下载中",
                });
            });
        },
    },
};
