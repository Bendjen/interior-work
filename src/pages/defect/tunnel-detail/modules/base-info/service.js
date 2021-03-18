import requestCreator from "@/utils/requestCreator";
export default requestCreator({
    saveTechList: {
        url: "/jtyh/qlqxgl/busisdqxgl/savejscs",
        // headers: {
        //     "Content-Type": "application/json;charset=UTF-8",
        // },
        // array: true,
        formData: true,
    },
    fetchTechList: "/jtyh/qlqxgl/busisdqxgl/getjscslist",
    fetchInfo: "/jtyh/qlqxgl/busisdqxgl/getzjitem",
    saveInfo: "/jtyh/qlqxgl/busisdqxgl/savezj",
    fetchTypeList: "/jtyh/qlqxgl/busisdqxgl/getzhtocqlist",
    saveTypeList: {
        url: "/jtyh/qlqxgl/busisdqxgl/savezhtocq",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        array: true,
        // formData: true,
    },
    deleteLine: "/jtyh/qlqxgl/busisdqxgl/deletezhtocq",
    fetchCad: "/jtyh/qlqxgl/busisdqxgl/getzjcadcmdist",
});
