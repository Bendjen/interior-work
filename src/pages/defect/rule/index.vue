<template>
    <div class="defect-rule">
        <h1>规则配置</h1>
        <div flex="main:start cross:center">
            <el-button type="text" @click="addRule" flex="cross:center">
                <i class="el-icon-plus" style="font-size:24px"></i>
            </el-button>
        </div>
        <el-table :data="tableData" height="600" border style="width:100%;">
            <el-table-column label="黑名单">
                <template slot-scope="scope">
                    <el-tag
                        v-for="(tag, index) in scope.row.blackList"
                        :key="index"
                        closable
                        @close="deleteTag(scope.$index, 'blackList', index)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-button
                        type="text"
                        class="plusIcon"
                        @click="addTag(scope.$index, 'blackList')"
                    >
                        <i class="el-icon-plus"></i>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column label="必须存在的校验字段">
                <template slot-scope="scope">
                    <el-tag
                        v-for="(tag, index) in scope.row.whiteList"
                        :key="index"
                        closable
                        @close="deleteTag(scope.$index, 'whiteList', index)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-button
                        type="text"
                        class="plusIcon"
                        @click="addTag(scope.$index, 'whiteList')"
                    >
                        <i class="el-icon-plus"></i>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column label="校验参数">
                <template slot-scope="scope">
                    <el-tag
                        v-for="(tag, index) in scope.row.checkParam"
                        :key="index"
                        closable
                        @close="deleteTag(scope.$index, 'checkParam', index)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-button
                        type="text"
                        class="plusIcon"
                        @click="addTag(scope.$index, 'checkParam')"
                    >
                        <i class="el-icon-plus"></i>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column label="校验参数条件">
                <template slot-scope="scope">
                    <el-tag
                        v-for="(tag, index) in scope.row.paramLimit"
                        :key="index"
                        closable
                        @close="deleteTag(scope.$index, 'paramLimit', index)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-button
                        type="text"
                        class="plusIcon"
                        @click="addTag(scope.$index, 'paramLimit')"
                    >
                        <i class="el-icon-plus"></i>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="80" align="center">
                <template slot-scope="scope">
                    <el-button type="text" @click="deletItem(scope.$index)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
