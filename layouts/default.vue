<template>
    <div>
        <header class="shadow-sm bg-white py-6">
            <nav class="container mx-auto px-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Rab Site</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>