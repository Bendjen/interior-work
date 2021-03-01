import SERVICE from "@/pages/defect/service";
import exceptRuleTemplate from "@/pages/defect/components/except-rule-template";
import containRuleTemplate from "@/pages/defect/components/contain-rule-template";
import paramRuleTemplate from "@/pages/defect/components/param-rule-template";
import conditionRuleTemplate from "@/pages/defect/components/condition-rule-template";
import ruleInfoTemplate from "@/pages/defect/components/rule-info-template";

export default {
    name: "rule-edit",
    data() {
        return {
            dialogVisible: false,
            ruleId: "",
            recordId: "",
            info: {
                filterval: "",
                judgeval: "",
                noneval: "",
                parameval: "",
            },
        };
    },

    props: {
        cfgtype: {
            type: [String, Number],
            default: 1,
        },
    },

    mounted() {},

    components: {
        exceptRuleTemplate,
        containRuleTemplate,
        paramRuleTemplate,
        conditionRuleTemplate,
        ruleInfoTemplate,
    },

    methods: {
        open({ ruleId, recordId }) {
            this.ifEdit = false;
            this.ruleId = ruleId;
            this.recordId = recordId;
            this.dialogVisible = true;
            this.fetchRuleInfo();
        },

        close() {
            this.dialogVisible = false;
            this.ruleId = "";
            this.recordId = "";
            this.info = {
                filterval: "",
                judgeval: "",
                noneval: "",
                parameval: "",
            };
        },

        fetchRuleInfo() {
            SERVICE.fetchRuleItem({ tid: this.ruleId }).then((res) => {
                this.info = res.resdata;
            });
        },

        save(callback) {
            let params = {
                ...this.info,
                noneval: this.$refs.exceptRule.tsToStr(),
                filterval: this.$refs.containRule.tsToStr(),
                parameval: this.$refs.paramRule.tsToStr(),
                judgeval: this.$refs.conditionRule.tsToStr(),
                ...this.$refs.ruleInfo.fetchForm(),
                cfgtype: this.cfgtype,
            };
            if (params.serialnum === "") {
                return this.$alert("优先级必须填写");
            }
            SERVICE.safeRule(params).then((res) => {
                this.$set(this.info, "editdate", res.resdata.editdate);
                if (typeof callback == "function") {
                    callback();
                } else {
                    this.$notify.success({
                        title: "保存成功",
                        message: "规则已更新",
                    });
                }
                this.close();
                this.$emit("update");
            });
        },

        saveAndApply() {
            this.$confirm(
                "缺陷解析将根据新规则重新生成并覆盖此条数据，是否继续？"
            ).then(() => {
                this.save(() => {
                    SERVICE.updateConfig({
                        type: 3,
                        tid: this.recordId,
                    }).then((res) => {
                        this.$emit("update");
                        this.close();
                        this.$notify.success({
                            title: "保存成功",
                            message: "规则已更新",
                        });
                    });
                });
            });
        },
        clear() {
            this.ruleId = "";
            this.recordId = "";
            this.info = {
                filterval: "",
                judgeval: "",
                noneval: "",
                parameval: "",
            };
        },
        closeDialog() {
            if (this.ifEdit) {
                this.$emit("update");
            }
            this.clear();
        },
    },
};

