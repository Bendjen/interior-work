<template>
    <el-dialog
        :title="`当前规则 : ${info.id}`"
        :visible.sync="dialogVisible"
        width="900px"
        class="rule-edit"
        @close="closeDialog"
    >
        <div class="saveBtn">
            <el-button type="primary" size="text" @click="save">保存</el-button>
        </div>

        <div class="config-list">
            <except-rule-template :field="info.noneval" ref="exceptRule" />
            <contain-rule-template :field="info.filterval" ref="containRule" />
            <param-rule-template :field="info.parameval" ref="paramRule" />
            <condition-rule-template
                :field="info.judgeval"
                ref="conditionRule"
                :cfgtype="cfgtype"
            />
            <rule-info-template :info="info" :cfgtype="2" ref="ruleInfo" />
        </div>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
