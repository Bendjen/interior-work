<template>
    <div class="top-side" flex="main:right cross:center">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link" flex="cross:center">
                <el-avatar
                    style="margin-right:15px;"
                    slot="reference"
                    size="small"
                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                ></el-avatar>
                <span>{{ user.username }}</span>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item command="logout" divided
                    >退出登录</el-dropdown-item
                >
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
