<template>
    <el-dialog
        title="报价清单"
        :visible.sync="dialogVisible"
        class="bid-table"
        width="90%"
        top="6vh"
    >
        <el-button type="text" class="download" @click="download">
            下载
        </el-button>
        <el-table :data="table" style="width: 100%" :height="740">
            <el-table-column type="index" width="45" fixed align="center">
            </el-table-column>
            <el-table-column
                align="center"
                v-for="(item, index) in thead"
                :key="item"
                :width="configWidth(index)"
                :label="item"
                :fixed="index < 5"
            >
                <template slot-scope="scope">{{
                    scope.row[index].value
                }}</template>
            </el-table-column>
        </el-table>
        <!-- <div style="margin-top:20px">
            <el-pagination
                background
                v-if="table.length > 0"
                layout="prev, pager, next"
                :page-size="pageCount"
                :current-page="page"
                :total="total"
                @current-change="fetchTable"
            >
            </el-pagination>
        </div> -->
    </el-dialog>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
