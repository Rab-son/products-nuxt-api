<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" :key="product.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

// Fetching data from the API
const { data: products } =  await useFetch('https://fakestoreapi.com/products');

</script>

<style scoped>

</style>