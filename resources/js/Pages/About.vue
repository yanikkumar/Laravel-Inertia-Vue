<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "../Layouts/Layout.vue";
defineProps({
    user: String,
});
</script>

<template>
    <Layout>
        <div class="p-4 m-4">
            <Head title="Welcome"></Head>
            <h1 class="inline p-2 text-5xl font-bold border-2 rounded-lg">
                About {{ user }}
            </h1>
            <p class="mt-5">The name is passed dynamically using props!</p>
        </div>
    </Layout>
</template>
