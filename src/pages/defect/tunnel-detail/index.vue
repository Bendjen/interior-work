<template>
    <div class="tunnel-detail">
        <h1 class="page-title" flex="cross:center main:justify">
            <el-button type="text" class="returnIcon" @click="backToFileList">
                <i class="el-icon-arrow-left"></i>
                <span>返回文件列表</span>
            </el-button>
            <p>{{ filename }}</p>
            <div></div>
        </h1>
        <div v-if="chapterList.length > 0" style="position:relative">
            <el-button type="text" class="refreshIcon" @click="refresh" icon="el-icon-refresh-left"></el-button>
            <el-tabs
                tab-position="left"
                @tab-click="swicthChapter"
                v-model="tunnelTab"
            >
                <el-tab-pane
                    v-for="(item, index) in chapterList"
                    :key="item.id"
                    :name="index.toString()"
                    :label="item.detail.bridgename"
                >
                    <el-tabs
                        type="border-card"
                        v-model="moduleTab"
                        @tab-click="swicthModule"
                    >
                        <el-tab-pane label="缺陷分析" name="defectInfo">
                            <defect-info
                                ref="defectInfo"
                                :chapterid="chapterid"
                                :fileid="fileid"
                            />
                        </el-tab-pane>
                        <el-tab-pane label="基础数据" name="baseInfo">
                            <base-info
                                ref="baseInfo"
                                :chapterid="chapterid"
                                :fileid="fileid"
                            />
                        </el-tab-pane>
                        <el-tab-pane label="衬砌数据" name="wallInfo">
                            <wall-info
                                ref="wallInfo"
                                :chapterid="chapterid"
                                :fileid="fileid"
                            />
                        </el-tab-pane>
                        <el-tab-pane label="雷达检测表" name="radarInfo">
                            <radar-info
                                ref="radarInfo"
                                :chapterid="chapterid"
                                :fileid="fileid"
                            />
                        </el-tab-pane>
                        <el-tab-pane label="衬砌处治表" name="dealInfo">
                            <deal-info
                                ref="dealInfo"
                                :chapterid="chapterid"
                                :fileid="fileid"
                            />
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div v-else class="emptyBox" flex="dir:top main:center cross:center">
            <svg class="icon-empty" aria-hidden="true">
                <use xlink:href="#interior-empty"></use>
            </svg>
            <span>该文件下无隧道</span>
        </div>
        <el-backtop ref="topBtn" target=".right-side-container"></el-backtop>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
