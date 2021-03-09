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
                     <el-dropdown-item command="exportExcel"
                        ><span id="copyBtn">导出excel</span></el-dropdown-item
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
                <el-table-column align="center" label="位置">
                    <template slot-scope="scope">{{
                        scope.row.disdesc
                    }}</template>
                </el-table-column>
                <el-table-column align="center" label="二衬类型" width="100">
                    <template slot-scope="scope">{{
                        scope.row.cqtype
                    }}</template>
                </el-table-column>
                <el-table-column align="center" label="病害描述" width="100">
                    <template slot-scope="scope">{{
                        scope.row.qxname
                    }}</template>
                </el-table-column>
                <el-table-column label="设计参数" align="center">
                    <el-table-column align="center" label="围岩" width="80">
                        <template slot-scope="scope">{{
                            scope.row.wytype
                        }}</template>
                    </el-table-column>
                    <el-table-column align="center" label="二衬厚度" width="80">
                        <template slot-scope="scope">{{
                            scope.row.cqhd
                        }}</template></el-table-column
                    >
                    <el-table-column align="center" label="素砼或钢筋砼" width="80">
                        <template slot-scope="scope">{{
                            scope.row.concrete
                        }}</template></el-table-column
                    >
                </el-table-column>
                <el-table-column align="center" label="二衬厚度情况">
                    <template slot-scope="scope">{{
                        scope.row.cqhddesc
                    }}</template></el-table-column
                >
                <el-table-column align="center" label="初期支护缺陷情况">
                    <template slot-scope="scope">{{
                        scope.row.czdesc
                    }}</template></el-table-column
                >
                <el-table-column align="center" label="修复方案">
                    <template slot-scope="scope">{{
                        scope.row.czfadesc
                    }}</template></el-table-column
                >
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
                <span>暂无对应衬砌处治表</span>
            </div>
        </div>
        <!-- <el-backtop ref="topBtn" target=".right-side-container"></el-backtop> -->
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
