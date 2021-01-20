<template>
    <el-dialog
        :title="`当前规则 : ${info.id}`"
        :visible.sync="dialogVisible"
        width="900px"
        class="rule-edit"
        @close="closeDialog"
    >
        <div class="saveBtn">
            <el-button type="primary" size="text" @click="save"
                >仅保存</el-button
            >
            <el-button type="primary" size="text" @click="saveAndApply"
                >保存并应用</el-button
            >
        </div>

        <div class="config-list">
            <except-rule-template :field="info.noneval" ref="exceptRule" />
            <contain-rule-template :field="info.filterval" ref="containRule" />
            <param-rule-template :field="info.parameval" ref="paramRule" />
            <condition-rule-template
                :field="info.judgeval"
                ref="conditionRule"
            />
        </div>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
