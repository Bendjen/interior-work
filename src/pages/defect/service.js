import requestCreator from "@/utils/requestCreator";
export default requestCreator({
    fetchFileList: "/jtyh/qlqxgl/busiqlqxglwj/getwjlist",
    fetchFileChapter: "/jtyh/qlqxgl/busiqlqxglwj/getzjlist",
    fetchDefectList: "/jtyh/qlqxgl/busiqlqxglwj/getqxlist",
    deleteFile: "/jtyh//qlqxgl/busiqlqxglwj/delete",
    uploadFile: "/jtyh/qlqxgl/busiqlqxglwj/importfile",
    updateConfig: "/jtyh/qlqxgl/busiqlqxglwj/updateqxcfg",
    exportfile: "/jtyh/qlqxgl/busiqlqxglwj/exportfile",
    fetchRuleList: "/jtyh/qlqxgl/busiqlqxglwj/getcfglist",
    fetchRuleItem: "/jtyh/qlqxgl/busiqlqxglwj/getcfgitem",
    fetchSolutionList: {
        url: "/jtyh/qlqxgl/busiqlqxglwj/getczfalist",
        hideLoading: true,
    },
    saveSolution: "/jtyh/qlqxgl/busiqlqxglwj/saveqxfa",
    deleteSolution: "/jtyh/qlqxgl/busiqlqxglwj/deleteqxfa",
});
