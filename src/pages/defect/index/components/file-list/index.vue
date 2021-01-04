<template>
    <div class="defect-file-list">
        <h1 flex="main:center">文件解析列表</h1>

        <div flex="main:start cross:center" style="margin:25px 0">
            <el-date-picker
                v-model="date"
                type="monthrange"
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
            >
            </el-date-picker>
            <el-button type="primary" style="margin: 0 20px">查询</el-button>
            <el-upload
                action="/jtyh/qlqxgl/busiqlqxglwj/importfile"
                accept=".docx"
                name="qxFiles"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-change="fileChange"
                :before-upload="beforeUpload"
                :auto-upload="false"
                :http-request="httpRequest"
                ref="uploader"
            >
                <el-button>上传文件</el-button>
            </el-upload>
        </div>

        <el-table :data="fileList" border style="width:100%;">
            <el-table-column prop="fileName" label="文件名" width="400">
                <template slot-scope="scope">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#interior-word"></use>
                    </svg>
                    <span style="padding-left:5px;">{{
                        scope.row.detail.filename
                    }}</span>
                </template>
            </el-table-column>

            <el-table-column prop="supplier" label="提供方">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.provider || "--"
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="supplier" label="备注">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.provider || "--"
                    }}</span>
                </template>
            </el-table-column>
            <!-- <el-table-column prop="supplier" label="启用" width="100">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.provider || "--"
                    }}</span>
                </template>
            </el-table-column> -->
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button
                        type="text"
                        size="small"
                        @click="switchDetail(scope)"
                        >查看缺陷详情</el-button
                    >
                    <el-button type="text" size="small">重新解析</el-button>
                    <el-button
                        type="text"
                        size="small"
                        @click="deleteFile(scope)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <div style="margin-top:24px" flex="main:center">
            <el-pagination
                background
                v-if="fileList.length > 0"
                layout="prev, pager, next"
                :page-size="pageCount"
                :current-page="page"
                :total="total"
                @current-change="pageChange"
            >
            </el-pagination>
        </div>
        <el-dialog title="填写文件信息" :visible.sync="dialogVisible" width="450px">
            <el-form ref="form" :model="uploadForm" label-width="80px">
                <el-form-item label="提供方">
                    <el-input v-model="uploadForm.supplier" style="width:240px"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="uploadForm.remark"  style="width:240px"></el-input>
                </el-form-item>
            </el-form>
            <div flex="main:center cross:center">
                <el-button type="primary" @click="onSubmit">上传</el-button>
                <el-button>取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
