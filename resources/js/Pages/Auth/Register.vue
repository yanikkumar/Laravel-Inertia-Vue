<script setup>
import { useForm } from '@inertiajs/vue3'

const formData = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
});

const submit = () => {
    // console.log(formData);
    formData.post(route('register'), {
        onError: () => formData.reset('password', 'password_confirmation')
    });
}
</script>

<template>

    <Head :title="`| ${$page.component}`"></Head>
    <div class="p-4 m-4">
        <h1 class="title">
            Register
        </h1>
        <div class="w2/4 mx-auto">
            <form @submit.prevent="submit">
                <div class="mb-6">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="formData.name">
                    <small class="text-red-500">{{ formData.errors.name }}</small>
                </div>
                <div class="mb-6">
                    <label for="email">email</label>
                    <input type="text" id="email" v-model="formData.email">
                    <small class="text-red-500">{{ formData.errors.email }}</small>
                </div>
                <div class="mb-6">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="formData.password">
                    <small class="text-red-500">{{ formData.errors.password }}</small>
                </div>
                <div class="mb-6">
                    <label for="password_confirmation">Confirm Password</label>
                    <input type="password" id="password_confirmation" v-model="formData.password_confirmation">
                    <small class="text-red-500">{{ formData.errors.password_confirmation }}</small>
                </div>
                <div>
                    <p class="text-slate-600 mb-2">Already a user? <a href="#" class="text-link">Login</a></p>
                    <button class="primary-btn" :disabled="formData.processing">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>
