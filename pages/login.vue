<script setup lang="ts">
import services from '~/services';
import type Login from '~/utils/interfaces/login';

    const state = reactive<Login>({
        email: '',
        password: ''
    });

    const handleSubmit = async () => {
        try {
            const { data } = await services.auth.login(state);

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
                    <Checkbox name="remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton class="ms-4">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>

<style scoped></style>