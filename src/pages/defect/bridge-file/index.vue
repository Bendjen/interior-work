<template>
    <div class="defect-analysis-index">
        <file-list
            v-show="pageIndex == 'file'"
            @swicth-detail="swicthDetail"
            @switch-exception="swicthException"
            @clear="clearFileInfo"
        />
        <defect-info
            v-show="pageIndex == 'defect'"
            @back="backToFileList"
            :id="currentFileId"
            :title="currentFileName"
            @scroll-top="scrollTop"
        />
        <exception-info
            v-show="pageIndex == 'exception'"
            @back="backToFileList"
            :id="currentFileId"
            :title="currentFileName"
            @scroll-top="scrollTop"
        />
        <el-backtop ref="topBtn" target=".right-side-container"></el-backtop>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
