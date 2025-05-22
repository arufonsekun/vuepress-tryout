<template>
    <nav class="breadcrumb">
      <span v-for="(item, index) in crumbs" :key="index">
        <RouterLink :to="item.link">{{ item.text }}</RouterLink>
        <span v-if="index < crumbs.length - 1"> › </span>
      </span>
    </nav>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const crumbs = route.path
        .split('/')
        .filter(Boolean)
        .map((segment, index, array) => {
          return {
            text: decodeURIComponent(segment),
            link: '/' + array.slice(0, index + 1).join('/') + '/',
          };
        });
      return { crumbs };
    }
  }
  </script>
  
  <style>
  .breadcrumb {
    font-size: 0.9rem;
    margin: 1em 0;
  }
  .breadcrumb a {
    text-decoration: none;
    color: #42b983;
  }
</style>