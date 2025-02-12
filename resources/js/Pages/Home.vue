<script setup>
</script>

<template>
    <Head :title="`| ${$page.component}`"></Head>
    <div class="p-4 m-4">
        <h1 class="inline p-2 text-5xl font-bold border-2 rounded-lg">
            Let's Learn InertiaJS!
        </h1>
        <p class="mt-5">Hello {{ $page.props.auth.user }}, welcome to your first Inertia app!</p>
    </div>
</template>
