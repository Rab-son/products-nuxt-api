<template>
    <div>
        <header class="shadow-sm bg-white py-6">
            <nav class="container mx-auto px-4 flex justify-between">
                <NuxtLink to="/products">Rab Site Merch</NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Proudcts</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>