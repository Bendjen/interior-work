<template>
    <div class="rule-template">
        <h3>
            <span>判断条件与对应结果</span>
            <el-button type="text" class="addLineBtn" @click="addLine"
                >增加组</el-button
            >
        </h3>
        <div>
            <div
                v-for="(group, groupIndex) in ruleList"
                :key="groupIndex"
                class="groupLine"
                style="margin-bottom:15px"
            >
                <div flex="main:start box:first">
                    <span class="indexSpan">{{ groupIndex + 1 }}</span>
                    <div class="tagGroup">
                        <span>判断条件：</span>
                        <el-tag>
                            <div
                                style="display:inline-block;padding:0 5px"
                                contenteditable
                                v-html="group.judge"
                                @blur="inputJudge($event, groupIndex)"
                            ></div>
                        </el-tag>
                        <el-button
                            type="text"
                            class="deleteLineBtn"
                            style="padding-left:16px"
                            @click="deleteLine(groupIndex)"
                            >删除此组</el-button
                        >
                    </div>
                </div>

                <div class="tagGroup" flex="main:start cross:top cross:center">
                    <span style="padding-left:16px;"
                        >对应结果：</span
                    >
                    <div style="padding:0 5px;max-width:650px;">
                        <template v-for="(item, itemIndex) in group.result">
                            <div :key="itemIndex" class="tagItem">
                                <el-select
                                    :value="computeDict(item.code).prjname"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="请输入关键词"
                                    :remote-method="remoteMethod"
                                    :loading="searchLoading"
                                    style="width:350px"
                                    size="small"
                                >
                                    <el-option
                                        v-for="option in options"
                                        :key="option.id"
                                        :value="option.detail.prjname"
                                        :label="option.detail.prjname"
                                        size="small"
                                        @click.native="
                                            confirmOption(item, option)
                                        "
                                    >
                                        <div flex="dir:top cross:top">
                                            <p
                                                class="text-overflow"
                                                style="max-width:550px;font-size: 13px"
                                            >
                                                {{ option.detail.prjname }}
                                            </p>
                                            <p
                                                class="text-overflow"
                                                style="max-width:350px; color: #8492a6; font-size: 12px"
                                            >
                                                - {{ option.detail.solution }}
                                            </p>
                                        </div>
                                    </el-option>
                                </el-select>
                                <el-tag>
                                    <div
                                        style="display:inline-block;padding:0 5px"
                                        contenteditable
                                        v-html="item.value"
                                        @blur="inputValue($event, item)"
                                    ></div>
                                </el-tag>
                                <el-input
                                    :value="computeDict(item.code).unitname"
                                    size="small"
                                    style="width:50px;text-align:center"
                                    disabled
                                ></el-input>
                                <el-button
                                    type="text"
                                    class="deleteIcon"
                                    @click="deleteItem(groupIndex, itemIndex)"
                                >
                                    <i class="el-icon-close"></i>
                                </el-button>
                                <el-button
                                    type="text"
                                    class="plusIcon"
                                    v-if="itemIndex == group.result.length - 1"
                                    @click="addItem(groupIndex)"
                                >
                                    <i class="el-icon-plus"></i>
                                </el-button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
