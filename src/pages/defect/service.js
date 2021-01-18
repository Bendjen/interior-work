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
    safeRule: "/jtyh/qlqxgl/busiqlqxglwj/savecfg",
    fetchSolutionOption: {
        url: "/jtyh/qlqxgl/busiqlqxglwj/getczfalist",
        hideLoading: true,
    },
    saveSolutionConfig: "/jtyh/qlqxgl/busiqlqxglwj/saveqxfa",
    deleteSolution: "/jtyh/qlqxgl/busiqlqxglwj/deleteqxfa",
    fetchSolutionList: "/jtyh/qlqxgl/busiqlqxglwj/getczfalist",
    fetchSolutionItem: "/jtyh/qlqxgl/busiqlqxglwj/getczfaitem",
    saveSolution: "/jtyh/qlqxgl/busiqlqxglwj/saveczfa",
    fetchFileItem: "/jtyh/qlqxgl/busiqlqxglwj/getwjitem",
    saveFile: "/jtyh/qlqxgl/busiqlqxglwj/save",
});
