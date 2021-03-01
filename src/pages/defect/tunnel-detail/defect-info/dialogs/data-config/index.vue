<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="900px"
        class="data-config"
        @close="closeDialog"
    >
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
            <el-form-item label="围岩类别">
                <el-input
                    v-model="info.wytype"
                    placeholder="围岩桩号1,类别,围岩桩号2,类别"
                ></el-input>
            </el-form-item>
            <el-form-item label="类别文字高度">
                <el-input v-model="info.wytype" style="width:120px"></el-input>
                <span class="inline-lable">文字角度</span>
                <el-input
                    v-model="info.diseasedesc"
                    style="width:120px"
                ></el-input>
            </el-form-item>
            <el-form-item label="桩号文字高度">
                <el-input v-model="info.wytype" style="width:120px"></el-input>
                <span class="inline-lable">文字角度</span>
                <el-input
                    v-model="info.diseasedesc"
                    style="width:120px"
                ></el-input>
            </el-form-item>
            <el-form-item label="支护类型">
                <el-input
                    v-model="info.zhtype"
                    placeholder="支护桩号1,类型,支护桩号2,类型"
                ></el-input>
            </el-form-item>
            <el-form-item label="类别文字高度">
                <el-input v-model="info.wytype" style="width:120px"></el-input>
                <span class="inline-lable">文字角度</span>
                <el-input
                    v-model="info.diseasedesc"
                    style="width:120px"
                ></el-input>
            </el-form-item>
            <el-form-item label="桩号文字高度">
                <el-input v-model="info.wytype" style="width:120px"></el-input>
                <span class="inline-lable">文字角度</span>
                <el-input
                    v-model="info.diseasedesc"
                    style="width:120px"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click="save"
                    size="small"
                    style="width:80px"
                    >保存</el-button
                >
                <el-button size="small" style="width:80px" @click="closeDialog"
                    >取消</el-button
                >
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
