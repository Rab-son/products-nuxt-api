<template>
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
  
      <!-- Show the data nicely -->
      <pre>{{ data }}</pre>
    </div>
  </template>
  
  <script setup>
  const { data, pending, error } = await useFetch('/api/coder')
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
  </style>
  