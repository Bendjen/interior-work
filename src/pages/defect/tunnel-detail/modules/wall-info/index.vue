<template>
    <div class="wall-info">
        <div
            flex="main:right"
            class="operation-button"
            style="margin-bottom:10px"
        >
            <el-dropdown @command="listenCommand" trigger="click">
                <span class="el-dropdown-link">
                    <el-button
                        type="text"
                        class="refreshIcon"
                        icon="el-icon-s-unfold"
                    ></el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="fitData"
                        ><span id="copyBtn">重新匹配</span></el-dropdown-item
                    >
                    <el-dropdown-item command="refresh"
                        ><span id="copyBtn">刷新</span></el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            <button class="copyWhole" v-show="false"></button>
            <button class="copyItem" v-show="false"></button>
        </div>
        <div v-if="list.length > 0">
            <el-table :data="list" style="width: 100%" :height="600">
                <el-table-column align="center" label="桩号">
                    <template slot-scope="scope"
                        >{{ scope.row.detail.sidestake
                        }}{{ Math.floor(scope.row.detail.stake / 1000) }}+{{
                            scope.row.detail.stake % 1000
                        }}</template
                    >
                </el-table-column>
                <el-table-column align="center" label="衬砌设计厚度(cm)">
                    <template slot-scope="scope">{{
                        scope.row.detail.ply
                    }}</template>
                </el-table-column>
                <el-table-column label="衬砌实测厚度(cm)" align="center">
                    <el-table-column align="center" label="左边墙">
                        <template slot-scope="scope">{{
                            scope.row.detail.lwall
                        }}</template>
                    </el-table-column>
                    <el-table-column align="center" label="左拱腰">
                        <template slot-scope="scope">{{
                            scope.row.detail.lhance
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="拱顶">
                        <template slot-scope="scope">{{
                            scope.row.detail.vault
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="右拱腰">
                        <template slot-scope="scope">{{
                            scope.row.detail.rhance
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="右边墙">
                        <template slot-scope="scope">{{
                            scope.row.detail.rwall
                        }}</template></el-table-column
                    >
                </el-table-column>
            </el-table>
            <div style="margin-top:20px">
                <el-pagination
                    background
                    v-if="list.length > 0"
                    layout="prev, pager, next"
                    :page-size="pageCount"
                    :current-page="page"
                    :total="total"
                    @current-change="fetchList"
                >
                </el-pagination>
            </div>
        </div>

        <div v-else class="emptyBox" flex="dir:top main:center cross:center">
            <div class="text" flex="main:start cross:center">
                <span>尚无任何衬砌数据，</span>
                <el-upload
                    action="/jtyh/qlqxgl/busisdqxgl/importcqhdfile"
                    accept=".docx"
                    name="cqhdFiles"
                    :show-file-list="false"
                    :before-upload="beforeUpload"
                    :on-success="uploadSuccess"
                    :data="{ fileid: fileid }"
                    :auto-upload="true"
                    ref="uploader"
                >
                    <el-button type="text" class="importBtn">导入</el-button>
                </el-upload>
            </div>
            <svg class="icon-empty" aria-hidden="true">
                <use xlink:href="#interior-empty"></use>
            </svg>
        </div>
        <!-- <el-backtop ref="topBtn" target=".right-side-container"></el-backtop> -->
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
