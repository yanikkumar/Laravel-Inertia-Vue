<script setup>
import { useForm } from "@inertiajs/vue3";
import TextInput from "../Component/TextInput.vue";

const formData = useForm({
    avatar: null,
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    previewImg: null,
});

const change = (e) => {
    // console.log(e.target.files[0]);
    formData.avatar = e.target.files[0];
    formData.previewImg = URL.createObjectURL(e.target.files[0]);
};

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
                <div class="grid place-items-center">
                    <div
                        class="relative overflow-hidden border rounded-full border-slate-300 w-28 h-28"
                    >
                        <label
                            for="avatar"
                            class="absolute inset-0 grid content-end cursor-pointer"
                            ><span class="pb-2 text-center bg-white/70"
                                >Avatar</span
                            ></label
                        >
                        <input type="file" id="avatar" @input="change" hidden />
                        <img
                            class="object-cover w-28 h-28"
                            :src="
                                formData.previewImg ??
                                'storage/avatars/avatar.png'
                            "
                            alt=""
                            srcset=""
                        />
                    </div>
                    <p class="mt-2 error">
                        {{ formData.errors.avatar }}
                    </p>
                </div>
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
                        Already a user?
                        <a :href="route('login')" class="text-link">Login</a>
                    </p>
                    <button class="primary-btn" :disabled="formData.processing">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
