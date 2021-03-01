<template>
    <el-dialog
        title="描述编辑"
        :visible.sync="dialogVisible"
        width="900px"
        class="desc-edit"
        @close="closeDialog"
    >
        <el-form ref="form" :model="info" label-width="100px">
            <el-form-item label="缺陷名称">
                <el-input v-model="info.qxname"></el-input>
            </el-form-item>
            <el-form-item label="提取描述">
                <el-input v-model="info.diseasedesc"></el-input>
            </el-form-item>
            <el-form-item label="参数规则" >
                <el-input v-model="info.paramval" disabled></el-input>
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
