import SERVICE from "../service";
import itemEdit from "./dialogs/item-edit";

export default {
    name: "solution-config",
    data() {
        return {
            tableData: [],
            page: 1,
            total: 0,
            pageCount: 10,
            cfgtype: 1,
        };
    },

    watch:{
        cfgtype(){
            this.pageChange(1)
        }
    },
    
    components: { itemEdit },

    mounted() {
        this.pageChange(1);
    },

    methods: {
        editItem(id) {
            this.$refs.itemEdit.open(id);
        },
        addSolution() {
            this.$refs.itemEdit.open("");
        },
        pageChange(page) {
            SERVICE.fetchSolutionList({
                "page.start": page,
                "page.count": this.pageCount,
                cfgtype: this.cfgtype,
            }).then((res) => {
                this.tableData = res.resdata;
                this.page = res.reshead.page.start;
                this.total = parseInt(res.reshead.page.total);
            });
        },
    },
};
