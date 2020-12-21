<template>
    <div class="defect-analysis-index">
        <file-list v-if="pageIndex == 1" />
        <div v-if="pageIndex == 1">
           
        </div>
        <div v-if="pageIndex == 2">
            <h1 style="margin-bottom:60px" flex="cross:center main:center">
                <el-button
                    type="text"
                    class="returnIcon"
                    @click="backToFileList"
                >
                    <i class="el-icon-arrow-left"></i>
                    <span>返回文件列表</span>
                </el-button>
                二季度检测报告分析
            </h1>

            <el-tabs tab-position="left">
                <el-tab-pane label="一号检测桥梁">
                    <el-table
                        :data="tableData"
                        height="600"
                        border
                        style="width:100%;"
                    >
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
                        <el-table-column
                            prop="date"
                            label="上传日期"
                            width="180px"
                        >
                        </el-table-column>
                        <el-table-column prop="supplier" label="提供方">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" size="small"
                                    >下载原件</el-button
                                >
                                <el-button type="text" size="small"
                                    >导出报告</el-button
                                >
                                <el-button type="text" size="small"
                                    >删除</el-button
                                >
                            </template>
                        </el-table-column>
                        <el-table-column label="配置">
                            <template slot-scope="scope">
                                <el-button type="text" size="small"
                                    >查看缺陷详情</el-button
                                >
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="二号检测桥梁">配置管理</el-tab-pane>
                <el-tab-pane label="三号检测桥梁">角色管理</el-tab-pane>
                <el-tab-pane label="四号检测桥梁">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
