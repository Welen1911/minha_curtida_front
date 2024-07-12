<script setup lang="ts">
import services from '~/services';
import type Login from '~/utils/interfaces/login';

const state = reactive<Login>({
    name: '',
    email: '',
    password: ''
});

const handleSubmit = async () => {
    try {
        const { data } = await services.user.create(state);

        console.log(data);
    } catch (e) {
        console.error(e);
    }
}
</script>

<template>
    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>
        <form @submit.prevent="handleSubmit">
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput id="name" v-model="state.name" type="text" class="mt-1 block w-full" required autofocus
                    autocomplete="username" />
                <InputError class="mt-2" :message="'iahdohao'" />
            </div>
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput id="email" v-model="state.email" type="email" class="mt-1 block w-full" required autofocus
                    autocomplete="username" />
                <InputError class="mt-2" :message="'iahdohao'" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput id="password" v-model="state.password" type="password" class="mt-1 block w-full" required
                    autocomplete="current-password" />
                <InputError class="mt-2" :message="'oahd'" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <span class="ms-2 text-sm text-gray-600">
                        <NuxtLink to="/login">Já tenho uma conta</NuxtLink>
                    </span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton class="ms-4">
                    Criar
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>

<style scoped></style>