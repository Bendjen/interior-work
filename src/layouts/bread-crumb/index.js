export default {
    name: "bread-crumb",
    data() {
        return {};
    },

    computed: {
        list() {
            const { meta, path } = this.$route;
            let list = [];
            if (meta.parent) {
                list.push(meta.parent);
            }
            list.push({ title: meta.title, path });
            return list;
        },
    },

    methods: {},
};
