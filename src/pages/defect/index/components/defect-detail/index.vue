<template>
    <el-dialog
        title="详情"
        :visible.sync="dialogVisible"
        width="400"
        class="defect-detail"
    >
        <el-form ref="form" label-width="120px" class="form-container">
            <template v-for="item in info">
                <el-form-item
                    :label="item.coldesc"
                    :key="item.colname"
                    v-if="item.visible == 1"
                >
                    <el-input
                        v-model="item.datavalue"
                        style="width:420px"
                    ></el-input>
                </el-form-item>
            </template>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
