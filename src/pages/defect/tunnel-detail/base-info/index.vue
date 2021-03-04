<template>
    <div class="base-info" flex="main:start">
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
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="copyCad"
                        ><span id="copyBtn">复制基线CAD</span></el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            <button class="copyWhole" v-show="false"></button>
            <button class="copyItem" v-show="false"></button>
        </div>
        <div flex="dir:top main:start cross:center" style="width:100%">
            <div flex="main:start cross:center box:first">
                <h3>隧道数据</h3>
                <el-button style="margin-left:40px" type="text" @click="save"
                    >保存</el-button
                >
            </div>

            <el-form ref="form" :model="info" label-width="100px">
                <el-form-item label="隧道起始桩号">
                    <el-input
                        v-model="info.sidestake"
                        style="width:70px;margin-right:10px"
                        placeholder="类型"
                    ></el-input>
                    <el-input
                        v-model="sdStartThousandStake"
                        placeholder="千米"
                        style="width:70px"
                    ></el-input>
                    <span style="margin:0 10px">+</span>
                    <el-input
                        v-model="sdStartHundredStake"
                        placeholder="百米"
                        style="width:70px"
                    ></el-input>
                    <span class="inline-lable">隧道结束桩号</span>
                    <el-input
                        v-model="info.sidestake"
                        style="width:70px;margin-right:10px"
                        placeholder="类型"
                    ></el-input>
                    <el-input
                        v-model="sdEndThousandStake"
                        placeholder="千米"
                        style="width:70px"
                    ></el-input>
                    <span style="margin:0 10px">+</span>
                    <el-input
                        v-model="sdEndHundredStake"
                        placeholder="百米"
                        style="width:70px"
                    ></el-input>
                </el-form-item>
                <el-form-item label="里程起始桩号">
                    <el-input
                        v-model="info.sidestake"
                        style="width:70px;margin-right:10px"
                        placeholder="类型"
                    ></el-input>
                    <el-input
                        v-model="lcStartThousandStake"
                        placeholder="千米"
                        style="width:70px"
                    ></el-input>
                    <span style="margin:0 10px">+</span>
                    <el-input
                        v-model="lcStartHundredStake"
                        placeholder="百米"
                        style="width:70px"
                    ></el-input>
                    <span class="inline-lable">里程距离步长</span>
                    <el-input
                        v-model="info.lcstep"
                        style="width:70px;"
                    ></el-input>
                    <span class="inline-lable">洞门宽度</span>
                    <el-input
                        v-model="info.cadholewidth"
                        style="width:80px;padding-right:20px"
                    ></el-input>
                </el-form-item>
            </el-form>
        </div>

        <div flex="main:center box:mean" class="excel-content">
            <div style="position:relative;">
                <div flex="cross:center" class="saveBtn">
                    <el-button type="text" @click="saveTechList(1)"
                        >保存</el-button
                    >
                    <el-button
                        style="margin-left:10px"
                        type="text"
                        @click="clearExcel(1)"
                        >清空</el-button
                    >
                </div>

                <excel
                    ref="excel1"
                    title="围岩桩号列表"
                    :thead="['里程', '类型']"
                />
            </div>
            <div style="position:relative;">
                <div flex="cross:center" class="saveBtn">
                    <el-button type="text" @click="saveTechList(2)"
                        >保存</el-button
                    >
                    <el-button
                        style="margin-left:10px"
                        type="text"
                        @click="clearExcel(2)"
                        >清空</el-button
                    >
                </div>
                <excel
                    ref="excel2"
                    title="支护桩号列表"
                    :thead="['里程', '类型']"
                />
            </div>
            <div style="position:relative;">
                <div flex="cross:start" class="saveBtn">
                    <el-button type="text" @click="saveTypeList"
                        >保存</el-button
                    >
                    <!-- <el-button
                        style="margin-left:10px"
                        type="text"
                        @click="clearExcel(3)"
                        >清空</el-button
                    > -->
                </div>
                <excel
                    ref="excel3"
                    title="支护类型表"
                    :thead="['支护类型', '衬砌类型', '二衬厚度']"
                    @delete-line="deleteLine"
                />
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
