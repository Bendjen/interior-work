<template>
    <div class="defect-analysis-index">
        <file-list v-show="pageIndex == 1" @swicth-detail="swicthDetail" />
        <defect-info
            v-show="pageIndex == 2"
            @back="backToFileList"
            :id="currentFileId"
            :title="currentFileName"
        />
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
