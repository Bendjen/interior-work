import SERVICE from "@/pages/defect/service";
import { mapState, mapMutations } from "vuex";

export default {
    name: "file-list",
    data() {
        return {
            fileList: [],
        };
    },

    mounted() {
        this.fetchFileList();
    },

    methods: {
        fetchFileList() {
            SERVICE.fetchFileList().then((res) => {
                this.fileList = res.resdata;
            });
        },
    },
};
