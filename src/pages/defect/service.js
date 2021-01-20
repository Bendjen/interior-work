import requestCreator from "@/utils/requestCreator";
export default requestCreator({
    fetchFileList: "/jtyh/qlqxgl/busiqlqxgl/getwjlist",
    fetchFileChapter: "/jtyh/qlqxgl/busiqlqxgl/getzjlist",
    fetchDefectList: "/jtyh/qlqxgl/busiqlqxgl/getqxlist",
    deleteFile: "/jtyh//qlqxgl/busiqlqxgl/deletewj",
    uploadFile: "/jtyh/qlqxgl/busiqlqxgl/importfile",
    updateConfig: "/jtyh/qlqxgl/busiqlqxgl/updateqxcfg",
    exportfile: "/jtyh/qlqxgl/busiqlqxgl/exportfile",
    fetchRuleList: "/jtyh/qlqxgl/busiqlqxgl/getcfglist",
    fetchRuleItem: "/jtyh/qlqxgl/busiqlqxgl/getcfgitem",
    safeRule: "/jtyh/qlqxgl/busiqlqxgl/savecfg",
    fetchSolutionOption: {
        url: "/jtyh/qlqxgl/busiqlqxgl/getczfalist",
        hideLoading: true,
    },
    saveSolutionConfig: "/jtyh/qlqxgl/busiqlqxgl/saveqxfa",
    deleteSolution: "/jtyh/qlqxgl/busiqlqxgl/deleteqxfa",
    fetchSolutionList: "/jtyh/qlqxgl/busiqlqxgl/getczfalist",
    fetchSolutionItem: "/jtyh/qlqxgl/busiqlqxgl/getczfaitem",
    saveSolution: "/jtyh/qlqxgl/busiqlqxgl/saveczfa",
    fetchFileItem: "/jtyh/qlqxgl/busiqlqxgl/getwjitem",
    saveFile: "/jtyh/qlqxgl/busiqlqxgl/savewj",
});
