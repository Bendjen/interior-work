<template>
    <div class="left-side">
        <div flex="cross:center main:center" class="logo-container">
            <img src="@/assets/logo.png" width="32" />
            <p>陆海内业管理平台</p>
        </div>
        <el-menu
            default-active="index"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="selectMenu"
        >
            <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
                <template slot="title">{{ item.title }}</template>
                <el-menu-item
                    v-for="sub in item.children"
                    :index="sub.id"
                    :key="sub.id"
                    >{{ sub.title }}</el-menu-item
                >
            </el-submenu>
        </el-menu>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
