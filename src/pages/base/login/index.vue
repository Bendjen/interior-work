<template>
    <div class="login-page" flex="main:center cross:center">
        <div class="login-container">
            <div flex="cross:center main:center" class="logo-container">
                <img src="@/assets/logo.png" width="64" />
                <h1>陆海数据中心</h1>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input
                        v-model="form.username"
                        style="width:260px"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        v-model="form.password"
                        type="password"
                        style="width:260px"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        style="width:120px;margin-right:40px"
                        @click="clickLogin"
                        >登录</el-button
                    >
                    <el-button type="text">忘记密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
