export default {
    id: "base",
    children: [
        {
            id: "login",
            meta: {
                requireAuth: false,
            },
        },
        {
            id: "safeguard",
            meta: {
                requireAuth: false,
            },
        },
        { id: "home" },
    ],
};
