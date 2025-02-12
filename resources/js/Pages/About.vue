<script setup>
import Layout from "../Layouts/Layout.vue";
defineProps({
    name: String,
});
</script>

<template>
    <Head title="| About"></Head>
    <div class="p-4 m-4">
        <h1 class="inline p-2 text-5xl font-bold border-2 rounded-lg">
            About {{ name }}
        </h1>
        <p class="mt-5">The name is passed dynamically using props!</p>
    </div>
</template>
