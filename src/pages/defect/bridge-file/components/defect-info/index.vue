<template>
    <div class="defect-info">
        <h1 class="page-title" flex="cross:center main:justify">
            <el-button type="text" class="returnIcon" @click="backToFileList">
                <i class="el-icon-arrow-left"></i>
                <span>返回文件列表</span>
            </el-button>
            <p>{{ title }}</p>
            <div>
                <el-dropdown @command="listenCommand" trigger="click">
                    <span class="el-dropdown-link">
                        <span class="iconText">更多</span>
                        <el-button
                            type="text"
                            style="font-size:20px"
                            icon="el-icon-caret-bottom"
                        >
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="openBidTable"
                            >报价清单</el-dropdown-item
                        >
                        <el-dropdown-item command="updateChapter"
                            >更新当前章节</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <!-- <el-button
                v-if="chapterList.length > 0"
                type="text"
                size="large"
                @click="updateChapter"
                >更新当前章节</el-button
            > -->
        </h1>

        <div v-if="chapterList.length > 0">
            <el-tabs tab-position="left" @tab-click="tabClick" v-model="tab">
                <el-tab-pane
                    v-for="(item, index) in chapterList"
                    :key="item.id"
                    :name="index.toString()"
                    :label="item.detail.bridgename"
                >
                    <table class="table" cellspacing="0">
                        <thead>
                            <tr>
                                <td rowspan="2" width="100">部位位置</td>
                                <td rowspan="2">缺陷简称</td>
                                <td rowspan="2">缺陷描述</td>
                                <td rowspan="1" colspan="3">处置方案</td>
                                <td rowspan="2" width="60">采用规则</td>
                            </tr>
                            <tr>
                                <td rowspan="1">工程名称</td>
                                <td rowspan="1">对应方法</td>
                                <td rowspan="1" width="60">工程用量</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(line, lineIndex) in defectList"
                                :key="lineIndex"
                            >
                                <td
                                    v-for="(item, index) in line"
                                    :key="index"
                                    :rowspan="item.rowspan"
                                    :class="item.class"
                                    @click="handleEvent(item)"
                                >
                                    {{ item.content }}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style="margin-top: 24px" flex="main:center">
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

        <!-- <defect-detail ref="defectDetail" /> -->
        <solution-config-edit ref="solutionEdit" @update="pageChange(page)" />
        <rule-edit ref="ruleEdit" @update="pageChange(page)" />
        <desc-edit ref="descEdit" @update="pageChange(page)" />
        <bid-table :fileid="id" ref="bidTable" />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
