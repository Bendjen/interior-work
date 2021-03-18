import SERVICE from "./service";
import BaseInfo from "./modules/base-info";
import DefectInfo from "./modules/defect-info";
import WallInfo from "./modules/wall-info";
import RadarInfo from "./modules/radar-info";
import DealInfo from "./modules/deal-info";
import BidTable from "../components/bid-table";

export default {
    name: "tunnel-detail",
    data() {
        return {
            fileid: "",
            filename: "",
            chapterList: [],
            tunnelTab: 0,
            moduleTab: "baseInfo",
        };
    },

    components: {
        BaseInfo,
        DefectInfo,
        WallInfo,
        RadarInfo,
        DealInfo,
        BidTable,
    },

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
                console.log(this.moduleTab);
                this.$refs[this.moduleTab][this.tunnelTab].switch();
            });
        },
        swicthModule() {
            this.$nextTick(() => {
                this.$refs[this.moduleTab][this.tunnelTab].switch();
            });
        },
        refresh() {
            this.$refs[this.moduleTab][this.tunnelTab].refresh();
        },
        listenCommand(command) {
            this[command]();
        },
        openBidTable() {
            this.$refs.bidTable.open();
        },
    },
};
