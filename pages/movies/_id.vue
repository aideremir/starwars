<template>
    <div>
        <sw-movie :movie="movie" />
    </div>
</template>

<script>
  import SwMovie from '~/components/swMovie'

  export default {
    validate ({params}) {
      return /^\d+$/.test(params.id)
    },
    fetch ({store, error, params}) {
      return store.dispatch('fetchMovies').then(() => {
        if (!store.getters.getMovieById(params.id)) {
          return error({ statusCode: 404, message: 'Movie not found' })
        }
      })
    },
    computed: {
      movie () {
        return this.$store.getters.getMovieById(this.$route.params.id)
      }
    },
    components: {
      SwMovie
    }
  }
</script>

<style>
</style>
