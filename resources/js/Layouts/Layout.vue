<script setup>
import { Link, Head } from "@inertiajs/vue3";
</script>

<template>
    <div>
        <header>
            <nav>
                <h1 class="uppercase font-semibold text-white">{{ $page.props.appName }}</h1>
                <div class="space-x-6 uppercase font-semibold">
                    <Link :href="route('home')" class="nav-link">Home</Link>
                    <Link :href="route('about')" class="nav-link">About</Link>
                    <Link :href="route('register')" class="nav-link">Register</Link>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
    </div>
</template>
