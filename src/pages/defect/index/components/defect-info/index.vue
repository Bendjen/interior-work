<template>
    <div class="defect-info">
        <h1 style="margin-bottom:60px" flex="cross:center main:center">
            <el-button type="text" class="returnIcon" @click="backToFileList">
                <i class="el-icon-arrow-left"></i>
                <span>返回文件列表</span>
            </el-button>
            {{ title }}
        </h1>

        <el-tabs tab-position="left" @tab-click="tabClick" v-model="tab">
            <el-tab-pane
                v-for="(item, index) in chapterList"
                :key="item.id"
                :name="index.toString()"
                :label="item.detail.bridgename"
            >
                <el-table :data="defectList" border style="width:100%;">
                    <el-table-column label="缺陷名称" width="150">
                        <template slot-scope="scope">{{
                            scope.row.detail.qxname
                        }}</template>
                    </el-table-column>
                    <el-table-column label="病害描述">
                        <template slot-scope="scope">{{
                            scope.row.detail.diseasedesc
                        }}</template>
                    </el-table-column>
                    <el-table-column label="处置方案">
                        <template slot-scope="scope">{{
                            scope.row.detail.czfaid_cn
                        }}</template>
                    </el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                size="small"
                                @click="openDetail(scope.row.linkmod)"
                                >详情</el-button
                            ></template
                        >
                    </el-table-column>
                </el-table>
                <div style="margin-top:24px" flex="main:center">
                    <el-pagination
                        background
                        v-if="defectList.length > 0"
                        layout="prev, pager, next"
                        :page-size="pageCount"
                        :current-page="page"
                        :total="total"
                        @current-change="pageChange"
                    >
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
        <defect-detail ref="defectDetail" />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
