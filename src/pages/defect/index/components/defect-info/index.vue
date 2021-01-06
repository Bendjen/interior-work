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
                    <table class="table" cellspacing="0">
                        <thead>
                            <tr>
                                <td rowspan="2">部位位置</td>
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
                            <template v-for="(item, index) in defectList">
                                <tr :key="item.id">
                                    <td
                                        :rowspan="
                                            item.detail.jsonCzfa.length || 1
                                        "
                                    >
                                        {{ item.detail.partdesc }}
                                    </td>
                                    <td
                                        :rowspan="
                                            item.detail.jsonCzfa.length || 1
                                        "
                                    >
                                        {{ item.detail.qxname }}
                                    </td>
                                    <td
                                        :rowspan="
                                            item.detail.jsonCzfa.length || 1
                                        "
                                    >
                                        {{ item.detail.diseasedesc }}
                                    </td>

                                    <!-- 处置方案 -->

                                    <template
                                        v-if="item.detail.jsonCzfa.length > 1"
                                    >
                                        <td :rowspan="1" class="buttonText">
                                            {{
                                                item.detail.jsonCzfa[0].prjname
                                            }}
                                        </td>
                                        <td :rowspan="1" class="buttonText">
                                            {{
                                                item.detail.jsonCzfa[0].solution
                                            }}
                                        </td>
                                        <td :rowspan="1" class="buttonText">
                                            {{
                                                item.detail.jsonCzfa[0].czfaval
                                            }}
                                            {{
                                                item.detail.jsonCzfa[0].unitname
                                            }}
                                        </td>
                                    </template>

                                    <template v-else>
                                        <td :rowspan="1" colspan="3">
                                            --
                                        </td>
                                    </template>

                                    <td
                                        :rowspan="
                                            item.detail.jsonCzfa.length || 1
                                        "
                                    >
                                        <!-- <el-button
                                            type="text"
                                            size="small"
                                            @click="updateItem(scope.row.id)"
                                            >方案</el-button
                                        > -->
                                        <el-button
                                            type="text"
                                            size="small"
                                            @click="updateItem(scope.row.id)"
                                            >查看规则</el-button
                                        >
                                        <!-- <el-button
                                            type="text"
                                            size="small"
                                            @click="updateItem(scope.row.id)"
                                            >重新解析</el-button
                                        > -->
                          
                                    </td>
                                </tr>

                                <!-- 多于一行的部分 -->
                                <template
                                    v-if="item.detail.jsonCzfa.length > 1"
                                >
                                    <tr
                                        v-for="(sub,
                                        i) in item.detail.jsonCzfa.slice(1)"
                                        :key="sub.id"
                                        :rowspan="1"
                                    >
                                        <td :rowspan="1" class="buttonText">
                                            {{ sub.prjname }}
                                        </td>
                                        <td :rowspan="1" class="buttonText">
                                            {{ sub.solution }}
                                        </td>
                                        <td :rowspan="1" class="buttonText">
                                            {{ sub.czfaval }}
                                            {{ sub.unitname }}
                                        </td>
                                    </tr>
                                </template>
                            </template>
                        </tbody>
                    </table>

                  
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
