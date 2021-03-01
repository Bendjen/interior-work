<template>
    <div class="defect-info">
        <h1 class="page-title" flex="cross:center main:justify">
            <el-button type="text" class="returnIcon" @click="backToFileList">
                <i class="el-icon-arrow-left"></i>
                <span>返回文件列表</span>
            </el-button>
            <p>{{ title }}</p>
            <!-- <el-button
                v-if="chapterList.length > 0"
                type="text"
                size="large"
                @click="updateChapter"
                >更新当前章节</el-button
            > -->
            <el-dropdown @command="listenCommand">
                <span class="el-dropdown-link">
                    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="updateChapter"
                        >重新解析当前隧道缺陷数据</el-dropdown-item
                    >
                    <el-dropdown-item command="copyCad"
                        ><span id="copyBtn"
                            >复制当前隧道全部CAD命令</span
                        ></el-dropdown-item
                    >
                    <el-dropdown-item command="configData"
                        ><span id="configData"
                            >配置当前隧道基础数据</span
                        ></el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            <button class="copyWhole" v-show="false"></button>
            <button class="copyItem" v-show="false"></button>
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
                                <td rowspan="2" width="100">所处位置</td>
                                <td rowspan="2">缺陷简称</td>
                                <td rowspan="2">缺陷描述</td>
                                <td rowspan="1" colspan="3">处置方案</td>
                                <td rowspan="2" width="60">采用规则</td>
                                <td rowspan="2" width="60">CAD命令</td>
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
                                    @click="handleEvent(item, $event)"
                                    :style="{ width: item.width || 'auto' }"
                                    v-html="item.content"
                                    :title="item.desc"
                                ></td>
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
        <data-config ref="dataConfig" @update="pageChange(page)" />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
