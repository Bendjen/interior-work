import SERVICE from "./service";
import BaseInfo from "./base-info";
import DefectInfo from "./defect-info";
import WallInfo from "./wall-info";

export default {
    name: "tunnel-detail",
    data() {
        return {
            fileid: "",
            filename: "",
            chapterList: [],
            tunnelTab: 0,
            moduleTab: "defectInfo",
        };
    },

    components: { BaseInfo, DefectInfo, WallInfo },

    computed: {
        chapterid() {
            return this.chapterList[parseInt(this.tunnelTab)].id;
        },
    },

    mounted() {
        this.fileid = this.$route.query.fileid;
        this.filename = this.$route.query.filename;
        this.fetchFileChapter();
    },

    methods: {
        backToFileList() {
            this.$router.push("tunnel-file");
        },

        scrollTop() {
            this.$refs.topBtn.scrollToTop();
        },

        fetchFileChapter() {
            SERVICE.fetchFileChapter({
                pid: this.fileid,
                "page.count": 999,
            }).then((res) => {
                this.chapterList = res.resdata;
                this.tunnelTab = 0;
                this.$nextTick(() => {
                    this.swicthChapter();
                });
            });
        },
        swicthChapter() {
            this.$nextTick(() => {
                this.$refs[this.moduleTab][this.tunnelTab].refresh();
            });
        },
        swicthModule() {
            this.$nextTick(() => {
                this.$refs[this.moduleTab][this.tunnelTab].refresh();
            });
        },
    },
};
