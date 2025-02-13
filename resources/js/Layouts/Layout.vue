<script setup>
import { Link, Head } from "@inertiajs/vue3";
</script>

<template>
    <div>
        <header>
            <nav>
                <h1 class="font-semibold text-white uppercase">
                    {{ $page.props.appName }}
                </h1>
                <div class="space-x-6 font-semibold uppercase">
                    <Link :href="route('home')" class="nav-link">Home</Link>
                    <Link :href="route('about')" class="nav-link">About</Link>
                    <Link :href="route('register')" class="nav-link"
                        >Register</Link
                    >
                    <Link :href="route('login')" class="nav-link">Login</Link>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
    </div>
</template>
