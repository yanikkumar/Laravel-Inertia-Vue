<script setup>
import { useForm } from "@inertiajs/vue3";
import TextInput from "../Component/TextInput.vue";

const formData = useForm({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
});

const submit = () => {
    // console.log(formData);
    formData.post(route("register"), {
        onError: () => formData.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head :title="`| ${$page.component}`"></Head>
    <div class="p-4 m-4">
        <h1 class="title">Register</h1>
        <div class="mx-auto w2/4">
            <form @submit.prevent="submit">
                <TextInput
                    name="name"
                    v-model="formData.name"
                    :message="formData.errors.name"
                />
                <TextInput
                    name="email"
                    type="email"
                    v-model="formData.email"
                    :message="formData.errors.email"
                />
                <TextInput
                    name="password"
                    type="password"
                    v-model="formData.password"
                    :message="formData.errors.password"
                />
                <TextInput
                    name="Confirm Password"
                    type="password"
                    v-model="formData.password_confirmation"
                />
                <div>
                    <p class="mb-2 text-slate-600">
                        Already a user? <a href="#" class="text-link">Login</a>
                    </p>
                    <button class="primary-btn" :disabled="formData.processing">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
