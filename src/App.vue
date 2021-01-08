<template>
    <div class="full-height-container">
        <div id="app" flex="main:start box:first" v-if="loginStatus">
            <el-col class="full-height-container left-side-container">
                <left-side />
            </el-col>
            <el-col class=" full-height-container right-side-container">
                <top-side />
                <bread-crumb />
                <router-view class="router-view-container" />
                <footer-side />
            </el-col>
        </div>
        <router-view v-else />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    position: relative;
    background: #f0f2f5;
}

html,
body {
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
}

p {
    padding: 0;
    margin: 0;
}

.left-side-container {
    width: 220px !important;
}

.right-side-container {
    overflow-y: auto;
}

.full-height-container {
    height: 100%;
    position: relative;
    box-sizing: border-box;
}

.page-title {
    text-align: left;
    margin: 0;
    padding: 0;
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 22px;
    letter-spacing: 1px;
}

.el-table th {
    background: #3a8ee6 !important;
    color: #fff;
    font-size: 14px;
    padding: 12px;
    letter-spacing: 2px;
}
.el-table td {
    padding: 8px !important;
    font-size: 13px !important;
}
.el-tabs__content {
    padding-left: 40px;
}

.router-view-container {
    box-sizing: border-box;
    background: #fff;
    margin: 15px;
    margin-top: 20px;
    border-radius: 2px;
    padding: 20px;
    min-height: 800px;
}

.request-loading {
    background-color: rgba(0, 0, 0, 0.6) !important;
    display: flex;
    justify-content: center;
     z-index: 9999!important;
    .el-loading-spinner {
        background: #fff;
        width: auto !important;
        z-index: 9999!important;
        padding: 24px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .el-loading-text {
        padding: 0 15px;
    }
}

.el-dialog__header {
    background: #f5f7fa;
    padding: 15px !important;
    .el-dialog__title {
        font-size: 20px !important;
        font-weight: 600;
    }
}

.text-overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

// .el-loading-mask{
//     background-color: none !important;
// }
</style>

<script>
import LeftSide from "@/layouts/left-side";
import TopSide from "@/layouts/top-side";
import FooterSide from "@/layouts/footer-side";
import BreadCrumb from "@/layouts/bread-crumb";
import { mapState } from "vuex";

export default {
    name: "App",
    computed: {
        ...mapState(["loginStatus"]),
        layouts() {
            return this.loginStatus == 0 || this.$route.name == "base/login";
        },
    },
    components: {
        LeftSide,
        TopSide,
        FooterSide,
        BreadCrumb,
    },
};
</script>
