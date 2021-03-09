import requestCreator from "@/utils/requestCreator";
export default requestCreator({
    fetchList: "/jtyh/qlqxgl/busisdqxgl/getradarview",
    fetchCad: "/jtyh/qlqxgl/busisdqxgl/getradarcadcmdist",
    exportExcel: "/jtyh/qlqxgl/busisdqxgl/exportradarfile",
});
