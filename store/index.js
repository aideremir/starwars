import axios from 'axios'

export const strict = process.env.NODE_ENV !== 'production'

const swApiUrl = 'https://swapi.co/api'

export const state = () => ({
  movies: null
})

export const mutations = {
  SET_MOVIES (state, value) {
    state.movies = value
  }
}

export const actions = {
  fetchMovies ({ commit }) {
    return axios.get(swApiUrl + '/films/').then(
      response => {
        response.data.results.map(movie => {
          movie.id = +movie.url.replace(/https:\/\/swapi.co\/api\/films\/(\d+)\//g, '$1')
        })
        commit('SET_MOVIES', response.data.results)
      }
    )
  }
}

export const getters = {
  getMovieById (state) {
    return (id) => {
      return state.movies.find(movie => movie.id === +id)
    }
  }
}
