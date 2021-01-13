<template>
    <div class="defect-rule">
        <p class="page-title" flex="main:justify cross:center">
            <span>方案配置</span>
            <el-button type="text" @click="addSolution">
                <div flex="cross:center">
                    <i class="el-icon-plus" style="font-size:18px"></i>
                    <span style="font-size:16px">添加处置方案</span>
                </div>
            </el-button>
        </p>
        <el-table :data="tableData" border style="width:100%;">
            <el-table-column label="编码" prop="code" width="60" align="center">
                <template slot-scope="scope">{{
                    scope.row.detail.code
                }}</template>
            </el-table-column>
            <el-table-column label="工程名称" prop="prjname">
                <template slot-scope="scope">{{
                    scope.row.detail.prjname
                }}</template>
            </el-table-column>
            <el-table-column label="处置方案" prop="solution">
                <template slot-scope="scope">{{
                    scope.row.detail.solution
                }}</template>
            </el-table-column>
            <el-table-column label="备注" prop="unitname" width="200">
                <template slot-scope="scope">{{
                    scope.row.detail.remark
                }}</template>
            </el-table-column>
            <el-table-column
                label="单位"
                prop="unitname"
                width="60"
                align="center"
            >
                <template slot-scope="scope">{{
                    scope.row.detail.unitname
                }}</template>
            </el-table-column>

            <el-table-column label="操作" width="80" align="center">
                <template slot-scope="scope">
                    <el-button type="text" @click="editItem(scope.row.id)"
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
        <item-edit ref="itemEdit" @update="pageChange(page)"/>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
