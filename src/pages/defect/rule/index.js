import SERVICE from "../service";
import ruleEdit from "./dialogs/rule-edit";

export default {
    name: "rule-config",
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

    components: { ruleEdit },

    mounted() {
        this.pageChange(1);
    },

    methods: {
        editRule(item) {
            this.$refs.ruleEdit.open({ ruleId: item.id });
        },
        addRule() {
            this.$refs.ruleEdit.open({ ruleId: "" });
        },
        pageChange(page) {
            SERVICE.fetchRuleList({
                "page.start": page,
                "page.count": this.pageCount,
                cfgtype: this.cfgtype,
            }).then((res) => {
                this.tableData = res.resdata;
                this.page = res.reshead.page.start;
                this.total = parseInt(res.reshead.page.total);
            });
        },
        confirmType(type) {
            this.cfgtype = type;
        },
    },
};
