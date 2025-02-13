<script setup></script>

<template>
    <Head :title="`| ${$page.component}`"></Head>
    <div class="p-4 m-4">
        <h1 class="inline p-2 text-5xl font-bold border-2 rounded-lg">
            Let's Learn InertiaJS!
        </h1>
        <p class="mt-5">Hello
        <div class="inline font-semibold" v-if="$page.props.auth.user">
            {{ $page.props.auth.user.name }}
        </div>, welcome to your first Inertia app!</p>

        <hr class="my-3" />

        <Link
            class="mt-[600px] block bg-indigo-300 p-3 rounded-lg text-white text-center"
            href="/"
            preserve-scroll
            >Like post at this position will not push it to the top</Link
        >
    </div>
</template>
