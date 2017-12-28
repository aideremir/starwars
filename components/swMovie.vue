<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.opening_crawl}}</p>
    </div>
</template>

<script>
  export default {
    name: 'sw-movie',
    props: [
      'movie'
    ]
  }
</script>

<style scoped>

</style>