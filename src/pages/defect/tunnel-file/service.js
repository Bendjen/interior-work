import requestCreator from "@/utils/requestCreator";
export default requestCreator({
    fetchFileList: "/jtyh/qlqxgl/busisdqxgl/getwjlist",
    fetchFileChapter: "/jtyh/qlqxgl/busisdqxgl/getzjlist",
    fetchDefectList: "/jtyh/qlqxgl/busisdqxgl/getqxlist",
    deleteFile: "/jtyh//qlqxgl/busisdqxgl/deletewj",
    uploadFile: "/jtyh/qlqxgl/busisdqxgl/importfile",
    updateConfig: "/jtyh/qlqxgl/busisdqxgl/updateqxcfg",
    exportfile: "/jtyh/qlqxgl/busisdqxgl/exportfile",
    fetchFileItem: "/jtyh/qlqxgl/busisdqxgl/getwjitem",
    saveFile: "/jtyh/qlqxgl/busisdqxgl/savewj",

    fetchRuleItem: "/jtyh/qlqxgl/busiqlqxgl/getcfgitem",
    safeRule: "/jtyh/qlqxgl/busiqlqxgl/savecfg",
    fetchSolutionOption: {
        url: "/jtyh/qlqxgl/busiqlqxgl/getczfalist",
        hideLoading: true,
    },
    saveSolutionConfig: "/jtyh/qlqxgl/busiqlqxgl/saveqxfa",
    deleteSolution: "/jtyh/qlqxgl/busiqlqxgl/deleteqxfa",
});
