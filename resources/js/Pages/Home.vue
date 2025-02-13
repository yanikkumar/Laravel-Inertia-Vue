<script setup>
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import PaginationLinks from './Component/PaginationLinks.vue';
import { debounce } from 'lodash';

const props = defineProps({
    users: Object,
    searchTerm: String,
    can: Object
});

const search = ref(props.searchTerm);

watch(search, debounce((q) => {
    router.get('/', { search: q }, { preserveState: true })
}, 500))

//Format Date
const getDate = (date) =>
    new Date(date).toLocaleDateString("en-us", {
        year: "numeric", month: "long", day: "numeric"
    })
</script>

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
        <div class="flex justify-end mb-3">
            <div class="w-1/4">
                <input type="search" placeholder="Search for users..." v-model="search">
            </div>
        </div>
        <table>
            <thead>
                <tr class="bg-slate-300">
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th v-if="can.delete_user">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users.data" :key="user.id">
                    <td><img :src="user.avatar ? 'storage/' + user.avatar : 'storage/avatars/avatar.png'" class="avatar"
                            alt="" srcset=""></td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ getDate(user.created_at) }}</td>
                    <td v-if="can.delete_user">
                        <button class="bg-red-600 p-1 text-sm text-white rounded-lg">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Pagination links -->
        <div class="flex">
            <!-- Old Way -->
            <!-- <Link v-for="link in users.links" :key="link.label" v-html="link.label" :href="link.url" class="p-2 mx-1"
                :class="{ 'text-slate-300': !link.url, 'text-blue-500': link.active }" preserve-scroll>
            </Link>

            <p class="text-slate-600 text-sm ms-auto m-2">Showing {{ users.from }} to {{ users.to }} of {{ users.total }}</p> -->

            <!-- New Way with created component -->
            <PaginationLinks :paginator="users" />
        </div>

        <hr class="my-3" />

        <Link class="mt-[600px] block bg-indigo-300 p-3 rounded-lg text-white text-center" href="/" preserve-scroll>Like
        post at this position will not push it to the top</Link>
        <hr>

    </div>
</template>
