<template>
    <div class="rule-template">
        <h3>
            <span>包含的字段</span>
            <el-button type="text" class="addLineBtn" @click="addLine"
                >增加组</el-button
            >
        </h3>
        <div>
            <div
                v-for="(group, groupIndex) in ruleList"
                :key="groupIndex"
                class="groupLine"
                flex="main:start box:first cross:center"
            >
                <span class="indexSpan">{{ groupIndex + 1 }}</span>
                <div class="tagGroup">
                    <template v-for="(item, itemIndex) in group">
                        <div :key="itemIndex" class="tagItem">
                            <el-tag
                                closable
                                type="success"
                                @close="deleteItem(groupIndex, itemIndex )"
                            >
                                <div
                                    style="display:inline-block;padding:0 5px"
                                    contenteditable
                                    v-html="item"
                                    @blur="
                                        inputItem($event, groupIndex, itemIndex)
                                    "
                                ></div>
                            </el-tag>
                            <span
                                class="orSpan"
                                v-if="itemIndex < group.length - 1"
                                >或</span
                            >
                        </div>
                    </template>
                    <el-button
                        type="text"
                        class="plusIcon"
                        @click="addItem(groupIndex)"
                    >
                        <i class="el-icon-plus"></i>
                    </el-button>

                    <el-button
                        type="text"
                        class="deleteLineBtn"
                        @click="deleteLine(groupIndex)"
                        >删除此组</el-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
