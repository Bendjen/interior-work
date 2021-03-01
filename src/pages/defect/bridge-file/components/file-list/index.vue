<template>
    <div class="defect-file-list">
        <p class="page-title">桥梁文件解析列表</p>
        <div flex="main:start cross:center" style="margin-bottom:15px">
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                value-format="yyyy-MM-dd"
            >
            </el-date-picker>
            <el-button
                type="primary"
                style="margin: 0 20px"
                @click="fetchFileList(1)"
                >查询</el-button
            >
            <el-upload
                action="/jtyh/qlqxgl/busiqlqxgl/importfile"
                accept=".docx"
                name="qxFiles"
                :show-file-list="false"
                :before-upload="beforeUpload"
                :on-success="uploadSuccess"
                :on-change="fileChange"
                :data="uploadForm"
                :auto-upload="false"
                ref="uploader"
            >
                <el-button>上传文件</el-button>
            </el-upload>
        </div>

        <el-table :data="fileList" border style="width:100%;">
            <el-table-column prop="fileName" label="缺陷文件名" width="360">
                <template slot-scope="scope">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#interior-word"></use>
                    </svg>
                    <el-button
                        class="buttonText"
                        type="text"
                        size="small"
                        @click="switchDetail(scope)"
                    >
                        <span style="padding-left:5px;">{{
                            scope.row.detail.filename
                        }}</span>
                    </el-button>
                </template>
            </el-table-column>

            <el-table-column prop="supplier" label="文件提供方">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.provider || "--"
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="supplier" label="备注">
                <template slot-scope="scope">
                    <span style="padding-left:5px;">{{
                        scope.row.detail.memo || "--"
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
            <el-table-column
                prop="supplier"
                label="最后编辑信息"
                align="center"
                width="170"
            >
                <template slot-scope="scope">
                    <p v-if="scope.row.detail.editor">
                        {{ scope.row.detail.editor }}
                    </p>
                    <p v-if="scope.row.detail.editdate">
                        {{ scope.row.detail.editdate }}
                    </p>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="450" align="center">
                <template slot-scope="scope">
                    <el-button
                        type="success"
                        size="small"
                        @click="exportReport(scope.row.id)"
                        >导出报告</el-button
                    >
                    <el-button
                        type="warning"
                        size="small"
                        @click="updateAnalyse(scope.row.id)"
                        >缺陷解析</el-button
                    >
                    <el-button
                        type="info"
                        size="small"
                        @click="switchException(scope)"
                        >查看异常</el-button
                    >
                    <el-button
                        type="primary"
                        size="small"
                        @click="editItem(scope.row.id)"
                        >修改</el-button
                    >

                    <el-button
                        type="danger"
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
        <el-dialog
            title="填写文件信息"
            :visible.sync="dialogVisible"
            width="450px"
        >
            <el-form ref="form" :model="uploadForm" label-width="80px">
                <el-form-item label="提供方">
                    <el-input
                        v-model="uploadForm.provider"
                        style="width:240px"
                    ></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input
                        v-model="uploadForm.memo"
                        style="width:240px"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div flex="main:center cross:center">
                <el-button type="primary" @click="onSubmit">上传</el-button>
                <el-button @click="dialogVisible = false">取消</el-button>
            </div>
        </el-dialog>
        <item-edit ref="itemEdit" @update="pageChange(page)"/>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
