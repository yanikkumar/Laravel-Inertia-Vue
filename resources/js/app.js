import "./bootstrap";
import "flowbite";
import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import Layout from "./Layouts/Layout.vue";

createInertiaApp({
    title: (title) => `InertiaJS App ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
    progress: {
        delay: 250,
        color: "#fff",
        includeCSS: true,
        showSpinner: true,
    },
});
