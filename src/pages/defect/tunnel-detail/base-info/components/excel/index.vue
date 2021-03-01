<template>
    <div class="excel">
        <table class="table" cellspacing="0">
            <thead>
                <tr>
                    <td
                        v-for="(title, index) in thead"
                        :key="index"
                        class="inputCell"
                    >
                        {{ title }}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(line, lineIndex) in excel" :key="lineIndex">
                    <td v-for="(item, itemIndex) in line" :key="itemIndex">
                        <div
                            :contenteditable="true"
                            class="inputCell"
                            @blur="updateItem($event, lineIndex, itemIndex)"
                            @focus="addLine($event,lineIndex)"
                            v-html="item"
                            :rowIndex="itemIndex"
                            :colIndex="lineIndex"
                        ></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
