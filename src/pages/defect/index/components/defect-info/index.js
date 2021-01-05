import SERVICE from "@/pages/defect/service";
import DefectDetail from "../defect-detail";

export default {
    name: "defect-info",
    data() {
        return {
            tab: "0",
            chapterList: [],
            defectList: [],
            page: 1,
            total: 0,
            pageCount: 8,
        };
    },
    props: {
        id: { default: "", type: String },
        title: { default: "", type: String },
    },

    components: { DefectDetail },

    watch: {
        id() {
            this.fetchFileChapter();
        },
    },

    computed: {
        chapterId() {
            return this.chapterList[parseInt(this.tab)].id;
        },
    },

    methods: {
        fetchFileChapter() {
            SERVICE.fetchFileChapter({
                pid: this.id,
                "page.count": 999,
            }).then((res) => {
                this.chapterList = res.resdata;
                this.tab = "0";
                this.tabClick();
            });
        },
        fetchDetail() {
            this.$emit();
        },
        backToFileList() {
            this.$emit("back");
        },
        tabClick() {
            this.defectList = [];
            this.page = 1;
            this.total = 0;
            this.pageChange(1);
        },
        pageChange(page) {
            SERVICE.fetchDefectList({
                pid: this.chapterId,
                "page.start": page,
                "page.count": this.pageCount,
            }).then((res) => {
                this.defectList = res.resdata;
                this.page = res.reshead.page.start;
                this.total = parseInt(res.reshead.page.total);
            });
        },
        openDetail(url) {
            this.$refs.defectDetail.open(url);
        },
        updateChapter() {
            this.$confirm(
                "缺陷解析将根据当前规则重新生成并覆盖原数据，是否继续？"
            ).then(() => {
                SERVICE.updateConfig({
                    type: 2,
                    tid: this.chapterId,
                }).then((res) => {
                    this.$notify.success({
                        title: "更新成功",
                        message: "当前章节已更新",
                    });
                    this.pageChange(this.page);
                });
            });
        },
    },
};
