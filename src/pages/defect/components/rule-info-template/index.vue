<template>
    <div class="rule-template">
        <h3>
            <span>其他配置</span>
        </h3>
        <div>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="类型单位">
                    <el-input
                        v-model="form.unittype"
                        style="width:400px"
                    ></el-input>
                </el-form-item>
                <el-form-item label="检验部位">
                    <el-select
                        v-model="form.parttype"
                        style="width:400px"
                        multiple
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="item in typeOption"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="优先级">
                    <el-input
                        v-model="form.serialnum"
                        style="width:400px"
                    ></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input
                        v-model="form.memo"
                        style="width:400px"
                    ></el-input>
                </el-form-item>
                <el-form-item label="是否启用">
                    <el-switch
                        v-model="form.status"
                        active-value="1"
                        inactive-value="0"
                    >
                    </el-switch>
                </el-form-item>

                <!-- <el-form-item>
                    <el-button
                        type="primary"
                        @click="save"
                        size="small"
                        style="width:80px"
                        >保存</el-button
                    >
                    <el-button
                        size="small"
                        style="width:80px"
                        @click="closeDialog"
                        >取消</el-button
                    >
                </el-form-item> -->
            </el-form>
        </div>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
