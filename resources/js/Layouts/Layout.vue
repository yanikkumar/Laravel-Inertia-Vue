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
                    <div class="flex space-x-2">
                        <Link
                            :href="route('home')"
                            class="nav-link"
                            :class="{
                                'bg-slate-700': $page.component === 'Home',
                            }"
                            >Home</Link
                        >
                        <Link
                            :href="route('about')"
                            class="nav-link"
                            :class="{
                                'bg-slate-700': $page.component === 'About',
                            }"
                            >About</Link
                        >
                        <div v-if="$page.props.auth.user">
                            <Link
                                :href="route('dashboard')"
                                class="nav-link"
                                :class="{
                                    'bg-slate-700':
                                        $page.component === 'Dashboard',
                                }"
                                >Dashboard</Link
                            >
                            <Link
                                :href="route('logout')"
                                method="post"
                                as="button"
                                type="button"
                                class="nav-link"
                                >Logout</Link
                            >
                        </div>
                        <div v-else>
                            <div class="mt-1 space-x-2">
                                <Link
                                    :href="route('register')"
                                    class="nav-link"
                                    :class="{
                                        'bg-slate-700':
                                            $page.component === 'Auth/Register',
                                    }"
                                    >Register</Link
                                >
                                <Link
                                    :href="route('login')"
                                    class="nav-link"
                                    :class="{
                                        'bg-slate-700':
                                            $page.component === 'Auth/Login',
                                    }"
                                    >Login</Link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
    </div>
</template>
