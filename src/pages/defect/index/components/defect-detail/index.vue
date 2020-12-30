<template>
    <el-dialog
        title="详情"
        :visible.sync="dialogVisible"
        width="400"
        class="defect-detail"
    >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
            >
        </span>
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
