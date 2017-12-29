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
    fetch ({store}) {
      return store.dispatch('fetchMovies')
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
