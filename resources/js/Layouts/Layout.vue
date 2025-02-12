<script setup>
import { Link, Head } from "@inertiajs/vue3";
</script>

<template>
    <div>
        <header class="text-white bg-indigo-500">
            <nav class="flex items-center justify-between max-w-screen-lg p-3 mx-auto">
                <h1>{{ $page.props.appName }}</h1>
                <div class="space-x-6 uppercase font-semibold">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
    </div>
</template>
