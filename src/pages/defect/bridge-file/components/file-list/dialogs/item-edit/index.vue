<template>
    <el-dialog
        :title="id ? '方案编辑' : '添加方案'"
        :visible.sync="dialogVisible"
        width="900px"
        class="item-edit"
        @close="closeDialog"
    >
        <el-form ref="form" :model="info" label-width="100px">
            <el-form-item label="文件名">
                <el-input v-model="info.filename"></el-input>
            </el-form-item>
            <el-form-item label="提供方">
                <el-input v-model="info.provider"></el-input>
            </el-form-item>
          
            <el-form-item label="备注">
                <el-input v-model="info.memo"></el-input>
            </el-form-item>
            <el-form-item label="顺序号">
                <el-input v-model="info.serialnum"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否启用">
                <el-switch
                    v-model="info.status"
                    active-value="1"
                    inactive-value="0"
                >
                </el-switch>
            </el-form-item> -->

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
