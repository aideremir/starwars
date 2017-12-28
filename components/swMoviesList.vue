<template>
    <div>
        <h1>Movies</h1>
        <ul>
            <li v-for="movie in movies">
                <nuxt-link :to="'/movies/' + movie.id">{{ movie.title }}</nuxt-link>
            </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: 'sw-movies-list',
    props: ['movies']
  }
</script>

<style scoped>

</style>