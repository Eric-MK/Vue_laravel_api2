<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="m-2 p-2">
        <RouterLink
          class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
          to="/skills"
          >Skills</RouterLink
        >
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView /><!-- <RouterView> is used to display the component that matches the current route. It is placed within the main element to fill the content area of the app with the appropriate component based on the current route. -->
  </main>
  
</template>
