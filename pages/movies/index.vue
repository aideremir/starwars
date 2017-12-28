<template>
  <sw-movies-list :movies="movies"/>
</template>

<script>
import SwMoviesList from '~/components/swMoviesList'

export default {
  components: {SwMoviesList},
  fetch ({store}) {
    if (!store.state.movies || store.state.movies.length === 0) {
      return store.dispatch('fetchMovies')
    }
  },
  computed: {
    movies () {
      return this.$store.state.movies
    }
  }
}
</script>

<style>
</style>
