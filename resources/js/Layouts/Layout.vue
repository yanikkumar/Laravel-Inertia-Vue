<template>
    <div>
        <header class="text-white bg-indigo-500">
            <nav
                class="flex items-center justify-between max-w-screen-lg p-3 mx-auto"
            >
                <div class="space-x-6">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
    </div>
</template>
