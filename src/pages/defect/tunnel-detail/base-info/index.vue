<template>
    <div class="base-info">
        <el-form ref="form" :model="info" label-width="100px">
            <el-form-item label="隧道长度">
                <el-input
                    v-model="info.startstake"
                    style="width:120px"
                ></el-input>
                <span class="inline-lable">坐标标识</span>
                <el-input
                    v-model="info.endstake"
                    style="width:120px"
                ></el-input>
            </el-form-item>
            <el-form-item label="隧道起始桩号">
                <el-input
                    v-model="info.startstake"
                    style="width:120px"
                ></el-input>
                <span class="inline-lable">结束桩号</span>
                <el-input
                    v-model="info.endstake"
                    style="width:120px"
                ></el-input>
            </el-form-item>
            <el-form-item label="里程起始桩号">
                <el-input
                    v-model="info.lcstartstake"
                    style="width:120px"
                ></el-input>
                <span class="inline-lable">步长</span>
                <el-input
                    v-model="info.diseasedesc"
                    style="width:120px"
                ></el-input>
            </el-form-item>

            <el-form-item label="围岩">
                <div flex="main:start">
                    <div>
                        <excel
                            :row="2"
                            :col="3"
                            :thead="['', '里程', '类型']"
                        />
                    </div>
                    <div flex="main:start cross:top">
                        <span class="inline-lable" style="margin-left:40px">支护</span>
                        <div>
                            <excel
                                :row="2"
                                :col="3"
                                :thead="['', '里程', '类型']"
                            />
                        </div>
                    </div>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
