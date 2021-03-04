<template>
    <div class="defect-info">
        <div
            flex="main:right"
            class="operation-button"
            style="margin-bottom:10px"
        >
            <el-dropdown @command="listenCommand">
                <span class="el-dropdown-link">
                    <el-button
                        type="text"
                        class="refreshIcon"
                        icon="el-icon-s-unfold"
                    ></el-button>
                    <!-- <i class="el-icon-more el-icon--right"></i> -->
                    <!-- <el-button type="text" class="refreshIcon" @click="refresh" icon="el-icon-refresh-left"></el-button> -->
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="updateChapter"
                        >重新解析缺陷</el-dropdown-item
                    >
                    <el-dropdown-item command="copyCad"
                        ><span id="copyBtn">复制所有CAD</span></el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            <button class="copyWhole" v-show="false"></button>
            <button class="copyItem" v-show="false"></button>
        </div>
        <div v-if="defectList.length > 0">
            <table class="table" cellspacing="0">
                <thead>
                    <tr>
                        <td rowspan="2" width="100">所处位置</td>
                        <td rowspan="2" width="100">缺陷简称</td>
                        <td rowspan="2">缺陷描述</td>
                        <td rowspan="1" colspan="3">处置方案</td>
                        <td rowspan="2" width="60">采用规则</td>
                        <td rowspan="2" width="40">CAD命令</td>
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
        </div>

        <div v-else class="emptyBox" flex="dir:top main:center cross:center">
            <svg class="icon-empty" aria-hidden="true">
                <use xlink:href="#interior-empty"></use>
            </svg>
            <span>该文件解析无结果</span>
        </div>
        <solution-config-edit ref="solutionEdit" @update="pageChange(page)" />
        <rule-edit ref="ruleEdit" @update="pageChange(page)" />
        <desc-edit ref="descEdit" @update="pageChange(page)" />
        <!-- <data-config ref="dataConfig" @update="pageChange(page)" /> -->
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
