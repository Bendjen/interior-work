<template>
    <div class="defect-rule">
        <h1>规则配置</h1>
        <el-table :data="tableData" height="600" border style="width:100%;">
            <el-table-column prop="fileName" label="文件名">
                <template slot-scope="scope">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#interior-word"></use>
                    </svg>
                    <span style="padding-left:5px;">{{
                        scope.row.fileName
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="上传日期" width="180px">
            </el-table-column>
            <el-table-column prop="supplier" label="提供方"> </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small">下载原件</el-button>
                    <el-button type="text" size="small">导出报告</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column label="配置">
                <template slot-scope="scope">
                    <el-button type="text" size="small">查看缺陷详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
