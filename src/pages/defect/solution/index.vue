<template>
    <div class="defect-solution">
        <div class="page-title" flex="main:justify cross:center">
            <div flex="cross:center">
                <span style="padding-right:20px">方案配置</span>
                <el-radio-group
                    v-model="cfgtype"
                    size="small"
                    fill="#67c23a"
                    text-color="#fff"
                >
                    <el-radio-button label="1">桥梁</el-radio-button>
                    <el-radio-button label="2">隧道</el-radio-button>
                </el-radio-group>
            </div>

            <el-button type="text" @click="addSolution">
                <div flex="cross:center">
                    <i class="el-icon-plus" style="font-size:18px"></i>
                    <span style="font-size:16px">添加处置方案</span>
                </div>
            </el-button>
        </div>
        <el-table :data="tableData" border style="width:100%;">
            <el-table-column label="编码" prop="code" width="70" align="center">
                <template slot-scope="scope">{{
                    scope.row.detail.code
                }}</template>
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
                width="70"
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
        <item-edit ref="itemEdit" @update="pageChange(page)" />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
