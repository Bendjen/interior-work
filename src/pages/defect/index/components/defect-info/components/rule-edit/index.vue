<template>
    <el-dialog
        title="当前规则"
        :visible.sync="dialogVisible"
        width="800px"
        top="20vh"
        class="rule-edit"
        @close="closeDialog"
    >
        <div class="config-list">
            <div>
                <h3>
                    <span>被排除关键字</span>
                    <el-button
                        type="text"
                        class="addLineBtn"
                        @click="addLine('noneList')"
                        >增加行</el-button
                    >
                </h3>
                <div>
                    <div
                        v-for="(group, groupIndex) in noneList"
                        :key="groupIndex"
                        class="groupLine"
                        flex="main:start box:first"
                    >
                        <span class="indexSpan">{{ groupIndex + 1 }}</span>
                        <div class="tagGroup">
                            <template v-for="(item, itemIndex) in group">
                                <div :key="itemIndex" class="tagItem">
                                    <el-tag
                                        closable
                                        type="success"
                                        @close="deleteItem('noneList', item)"
                                    >
                                        <div
                                            style="display:inline-block;padding:0 5px"
                                            contenteditable
                                            v-html="item.value"
                                            @blur="inputItem($event, item)"
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
                                @click="addItem('noneList', groupIndex)"
                            >
                                <i class="el-icon-plus"></i>
                            </el-button>

                            <el-button
                                type="text"
                                class="deleteLineBtn"
                                @click="deleteLine('noneList', groupIndex)"
                                >删除行</el-button
                            >
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
