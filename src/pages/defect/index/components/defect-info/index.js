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

    methods: {
        fetchFileChapter() {
            SERVICE.fetchFileChapter({
                pid: this.id,
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
            this.pageCount = 10;
            this.pageChange(1);
        },
        pageChange(page) {
            SERVICE.fetchDefectList({
                pid: this.chapterList[parseInt(this.tab)].id,
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
    },
};
