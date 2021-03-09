<template>
    <div class="wall-info">
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
                        ><span id="copyBtn">复制雷达CAD</span></el-dropdown-item
                    >
                    <el-dropdown-item command="exportExcel"
                        ><span id="copyBtn">导出excel</span></el-dropdown-item
                    >
                    <el-dropdown-item command="rebuildExcel"
                        ><span id="copyBtn">重新生成</span></el-dropdown-item
                    >
                    <el-dropdown-item command="refresh"
                        ><span id="copyBtn">刷新</span></el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            <button id="radarCopyWhole" v-show="false"></button>
            <button id="radarCopyItem" v-show="false"></button>
        </div>
        <div v-if="list.length > 0">
            <el-table :data="list" style="width: 100%" :height="600">
                <el-table-column align="center" label="桩号" fixed width="100">
                    <template slot-scope="scope">{{
                        scope.row.fullstake
                    }}</template>
                </el-table-column>
                <el-table-column
                    align="center"
                    label="衬砌类型"
                    width="60"
                    fixed
                >
                    <template slot-scope="scope">{{
                        scope.row.cqtype
                    }}</template>
                </el-table-column>
                <el-table-column
                    align="center"
                    label="围岩类型"
                    width="60"
                    fixed
                >
                    <template slot-scope="scope">{{
                        scope.row.wytype
                    }}</template>
                </el-table-column>
                <el-table-column
                    align="center"
                    label="衬砌设计厚度(cm)"
                    width="90"
                    fixed
                >
                    <template slot-scope="scope">{{ scope.row.ply }}</template>
                </el-table-column>
                <el-table-column label="衬砌实测厚度(cm)" align="center">
                    <el-table-column align="center" label="左边墙" width="70">
                        <template slot-scope="scope">{{
                            scope.row.lwall
                        }}</template>
                    </el-table-column>
                    <el-table-column align="center" label="左拱腰" width="70">
                        <template slot-scope="scope">{{
                            scope.row.lhance
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="拱顶" width="70">
                        <template slot-scope="scope">{{
                            scope.row.vault
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="右拱腰" width="70">
                        <template slot-scope="scope">{{
                            scope.row.rhance
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="右边墙" width="70">
                        <template slot-scope="scope">{{
                            scope.row.rwall
                        }}</template></el-table-column
                    >
                </el-table-column>
                <el-table-column align="center" label="病害描述" width="250">
                    <template slot-scope="scope">{{
                        scope.row.disdesc
                    }}</template>
                </el-table-column>
                <el-table-column align="center" label="处置方案" width="150">
                    <template slot-scope="scope">{{
                        scope.row.czfadesc
                    }}</template>
                </el-table-column>
                <el-table-column label="衬砌对照范围" align="center">
                    <el-table-column align="center" label="左边墙" width="120">
                        <template slot-scope="scope">{{
                            scope.row.zbq
                        }}</template>
                    </el-table-column>
                    <el-table-column align="center" label="左拱腰" width="120">
                        <template slot-scope="scope">{{
                            scope.row.zgy
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="拱顶" width="120">
                        <template slot-scope="scope">{{
                            scope.row.gd
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="右拱腰" width="120">
                        <template slot-scope="scope">{{
                            scope.row.ygy
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="右边墙" width="120">
                        <template slot-scope="scope">{{
                            scope.row.ybq
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
            <svg class="icon-empty" aria-hidden="true">
                <use xlink:href="#interior-empty"></use>
            </svg>

            <div class="text" flex="main:start cross:center">
                <span>暂无对应雷达检测表</span>
            </div>
        </div>
        <!-- <el-backtop ref="topBtn" target=".right-side-container"></el-backtop> -->
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
