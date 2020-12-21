<template>
    <div class="bread-crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <template v-for="(item, index) in list">
                <el-breadcrumb-item
                    :key="index"
                    v-if="item.path"
                    :to="{ path: item.path }"
                >
                    {{ item.title }}
                </el-breadcrumb-item>
                <el-breadcrumb-item :key="index" v-else>
                    {{ item.title }}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
