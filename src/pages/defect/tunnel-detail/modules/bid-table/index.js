import SERVICE from "./service";

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
                console.log(this.thead)
                // this.page = res.reshead.page.start;
                // this.total = parseInt(res.reshead.page.total);
            });
        },
        save() {
            this.dialogVisible = false;
        },
    },
};
