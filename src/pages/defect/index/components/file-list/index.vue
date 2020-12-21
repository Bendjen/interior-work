<template>
    <div class="defect-file-list">
        <h1 flex="main:center">文件解析列表</h1>
        <el-table
            :data="fileList"
            height="600"
            border
            style="width:100%;margin-top:60px"
        >
            <el-table-column prop="fileName" label="文件名">
                <template slot-scope="scope">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#interior-word"></use>
                    </svg>
                    <span style="padding-left:5px;">{{
                        scope.row.detail.filename
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="上传日期" width="180px">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.creatdate || "--"
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="supplier" label="提供方">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.provider || "--"
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small">下载原件</el-button>
                    <el-button type="text" size="small">导出报告</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column label="缺陷分析">
                <template slot-scope="scope">
                    <el-button
                        type="text"
                        size="small"
                        @click="switchDetail"
                        >查看缺陷详情</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
