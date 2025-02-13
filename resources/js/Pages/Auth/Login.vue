<script setup>
import { useForm } from "@inertiajs/vue3";
import TextInput from "../Component/TextInput.vue";

const formData = useForm({
    email: null,
    password: null,
    remember: null,
});

const submit = () => {
    // console.log(formData);
    formData.post(route("login"), {
        onError: () => formData.reset("password", "remember"),
    });
};
</script>

<template>
    <Head :title="`| ${$page.component}`"></Head>
    <div class="p-4 m-4">
        <h1 class="title">Login</h1>
        <div class="mx-auto w2/4">
            <form @submit.prevent="submit">
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
                <div class="flex justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <input
                            id="remember"
                            type="checkbox"
                            v-model="formData.remember"
                        />
                        <label for="remember">Remember Me</label>
                    </div>
                    <p class="text-slate-600">
                        Need an Account?
                        <a :href="route('register')" class="text-link"
                            >Register</a
                        >
                    </p>
                </div>
                <div>
                    <button class="primary-btn" :disabled="formData.processing">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
