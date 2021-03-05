export default {
    name: "excel",
    props: {
        thead: {
            type: Array,
            default: ["", "", ""],
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            excel: [],
            curLindex: "",
        };
    },

    components: {},

    mounted() {
        this.excel = [{ id: "", list: this.thead.map(() => "") }];
    },

    methods: {
        updateItem(e, lineIndex, itemIndex) {
            this.$set(
                this.excel[lineIndex].list,
                itemIndex,
                e.target.innerText
            );
            if (
                lineIndex == this.excel.length - 2 &&
                e.target.innerText === "" &&
                this.excel[this.excel.length - 1].every((item) => item === "")
            ) {
                this.excel.splice(this.excel.length - 1, 1);
            }
            e.target.removeEventListener("paste", this.pasteDeal);
        },
        addLine(e, lineIndex) {
            if (lineIndex == this.excel.length - 1) {
                this.excel.push({ id: "", list: this.thead.map(() => "") });
            }
            this.curLindex = lineIndex;
            e.target.addEventListener("paste", this.pasteDeal);
        },
        pasteDeal(event) {
            let clipText = event.clipboardData.getData("Text");
            let theadLength = this.thead.length;
            let curRowPosition = parseInt(
                event.target.attributes.rowIndex.nodeValue
            );
            let curColPosition = parseInt(
                event.target.attributes.colIndex.nodeValue
            );

            let brSymbol = "\n";
            if (clipText.includes("\r\n")) brSymbol = "\r\n";

            if (clipText.includes(brSymbol) || clipText.includes("\t")) {
                event.preventDefault();
                let list = clipText
                    .split(brSymbol)
                    .map((line) => line.split("\t"));
                let rowNum = list[0].length;
                let colNum = list.length;
                if (rowNum > theadLength) {
                    this.$message.warning("复制内容每行元素数量超出");
                } else {
                    if (rowNum > theadLength - curRowPosition) {
                        this.$message.warning(
                            "当前位置溢出，请在正确单元进行复制"
                        );
                    } else {
                        let needLine =
                            colNum - (this.excel.length - curColPosition);

                        if (needLine > 0) {
                            for (let i = 0; i < needLine; i++) {
                                this.excel.push({
                                    id: "",
                                    list: this.thead.map(() => ""),
                                });
                            }
                        }

                        list.forEach((line, lineIndex) => {
                            line.forEach((item, itemIndex) => {
                                this.$set(
                                    this.excel[curColPosition + lineIndex].list,
                                    curRowPosition + itemIndex,
                                    item
                                );
                            });
                        });
                    }
                }
            }
        },
        setExcel(excel) {
            this.excel = excel;
        },
        clear() {
            this.excel = [{ id: "", list: this.thead.map(() => "") }];
        },
        deleteLine(index, line) {
            if (this.excel.length > 1) {
                if (line.id === "") {
                    this.excel.splice(index, 1);
                } else {
                    this.$emit("delete-line", line.id);
                }
            } else {
                this.$message.warning("已经是最后一行");
            }
        },
    },
};
