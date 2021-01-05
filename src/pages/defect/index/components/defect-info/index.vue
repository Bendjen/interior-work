<template>
    <div class="defect-info">
        <h1 class="page-title" flex="cross:center main:justify">
            <el-button type="text" class="returnIcon" @click="backToFileList">
                <i class="el-icon-arrow-left"></i>
                <span>返回文件列表</span>
            </el-button>
            <p>{{ title }}</p>
            <el-button
                v-if="chapterList.length > 0"
                type="text"
                size="large"
                @click="updateChapter"
                >更新当前章节</el-button
            >
        </h1>

        <div v-if="chapterList.length > 0">
            <el-tabs tab-position="left" @tab-click="tabClick" v-model="tab">
                <el-tab-pane
                    v-for="(item, index) in chapterList"
                    :key="item.id"
                    :name="index.toString()"
                    :label="item.detail.bridgename"
                >
                    <el-table :data="defectList" border style="width:100%;">
                        <el-table-column prop="fileName" label="所属位置" fixed>
                            <template slot-scope="scope">
                                {{ scope.row.detail.parttype }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="fileName" label="所属部位" fixed>
                            <template slot-scope="scope">
                                {{ scope.row.detail.partdesc }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="fileName" label="缺陷简称">
                            <template slot-scope="scope">
                                {{ scope.row.detail.qxname }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="fileName"
                            label="缺陷描述"
                            width="260"
                        >
                            <template slot-scope="scope">
                                {{ scope.row.detail.diseasedesc }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="fileName" label="参数信息">
                            <template slot-scope="scope">
                                {{ scope.row.detail.paramval }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="fileName"
                            label="处置方案"
                            width="200"
                        >
                            <template slot-scope="scope">
                                {{ scope.row.detail.czfaid_cn }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="fileName" label="规则码匹配">
                            <template slot-scope="scope">
                                {{ scope.row.detail.cfgid_cn }}
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="60">
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
        </div>

        <div v-else class="emptyBox" flex="dir:top main:center cross:center">
            <svg class="icon-empty" aria-hidden="true">
                <use xlink:href="#interior-empty"></use>
            </svg>
            <span>该文件解析无结果</span>
        </div>

        <defect-detail ref="defectDetail" />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
