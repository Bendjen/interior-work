<template>
    <div class="defect-rule">
        <p class="page-title" flex="main:justify cross:center">
            <span>规则配置</span>
            <el-button type="text" @click="addRule">
                <div flex="cross:center">
                    <i class="el-icon-plus" style="font-size:18px"></i>
                    <span style="font-size:16px">添加处置方案</span>
                </div>
            </el-button>
        </p>
        <el-table :data="tableData" border style="width:100%;">
            <el-table-column label="id" prop="code" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column label="状态" prop="code" width="70" align="center">
                <template slot-scope="scope">
                    <span
                        v-if="scope.row.detail.status == 1"
                        style="color:#67c23a"
                        >启用</span
                    >
                    <span v-else style="color:#f56c6c">禁用</span>
                </template>
            </el-table-column>
            <el-table-column label="必须包含字符" prop="filterval">
                <template slot-scope="scope">
                    {{ scope.row.detail.filterval }}
                </template>
            </el-table-column>
            <el-table-column label="提取参数" prop="parameval" width="200">
                <template slot-scope="scope">{{
                    scope.row.detail.parameval
                }}</template>
            </el-table-column>
            <el-table-column label="检验条件结果" prop="judgeval">
                <template slot-scope="scope">{{
                    scope.row.detail.judgeval
                }}</template>
            </el-table-column>
            <el-table-column
                label="优先级"
                prop="serialnum"
                width="70"
                align="center"
            >
                <template slot-scope="scope">{{
                    scope.row.detail.serialnum
                }}</template>
            </el-table-column>
            <el-table-column
                label="单位类型"
                prop="unittype"
                width="90"
                align="center"
            >
                <template slot-scope="scope">{{
                    scope.row.detail.unittype
                }}</template>
            </el-table-column>
            <el-table-column
                label="不存在字符"
                prop="noneval"
                align="center"
                width="200"
            >
                <template slot-scope="scope">{{
                    scope.row.detail.noneval
                }}</template>
            </el-table-column>
            <el-table-column
                label="检验部位"
                prop="parttype"
                width="140"
                align="center"
            >
                <template slot-scope="scope">{{
                    scope.row.detail.parttype
                }}</template>
            </el-table-column>

            <el-table-column label="操作" width="70" align="center">
                <template slot-scope="scope">
                    <el-button type="text" @click="editRule(scope.row)"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 24px" flex="main:center">
            <el-pagination
                background
                v-if="tableData.length > 0"
                layout="prev, pager, next"
                :page-size="pageCount"
                :current-page="page"
                :total="total"
                @current-change="pageChange"
            >
            </el-pagination>
        </div>
        <rule-edit ref="ruleEdit" @update="pageChange(page)" />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
