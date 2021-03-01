<template>
    <el-dialog
        title="编辑方案"
        :visible.sync="dialogVisible"
        width="800px"
        top="20vh"
        class="solution-edit"
        @close="closeDialog"
    >
        <div class="solution-list">
            <el-button type="text" class="addButton" @click="addLine">
                <div flex="cross:center">
                    <i class="el-icon-plus"></i>
                    <span>添加方案</span>
                </div>
            </el-button>
            <el-button class="saveBtn" type="text" @click="save">保存</el-button>
            <div
                v-for="(item, index) in list"
                :key="index"
                flex="main:start cross:center"
                style="margin-bottom:15px"
            >
                <el-tag
                    type="success"
                    v-if="item.id"
                    style="margin-right:10px"
                    >现有</el-tag
                >
                <el-tag type="info" v-else style="margin-right:10px"
                    >新增</el-tag
                >
                <el-select
                    :value="`${item.prjname} - ${item.solution}`"
                    filterable
                    remote
                    reserve-keyword
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="searchLoading"
                    style="width:550px"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="
                            `${item.detail.prjname} - ${item.detail.solution}`
                        "
                        :value="item.id"
                        @click.native="changeItem(index, item)"
                    >
                        <div flex="dir:top cross:top">
                            <p
                                class="text-overflow"
                                style="max-width:550px;font-size: 13px"
                            >
                                {{ item.detail.prjname }}
                            </p>
                            <p
                                class="text-overflow"
                                style="max-width:600px; color: #8492a6; font-size: 12px"
                            >
                                - {{ item.detail.solution }}
                            </p>
                        </div>
                    </el-option>
                </el-select>
                <el-input
                    v-model="item.czfaval"
                    class="valueInput"
                    :disabled="!item.czfaid"
                    style="width:60px;margin:0 10px;text-align:center"
                ></el-input>
                <el-input
                    v-model="item.unitname"
                    style="width:50px;text-align:center"
                    disabled
                ></el-input>
                <el-button
                    type="text"
                    class="deleteButton"
                    icon="el-icon-close"
                    @click="deleteLine(index,item)"
                ></el-button>
            </div>
        </div>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
