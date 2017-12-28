<template>
  <div class="container">
    <nav class="navbar  navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link class="navbar-brand" to="/">Star Wars</nuxt-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
              <nuxt-link to="/movies">Movies</nuxt-link>
            </li>
          </ul>

        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>
    <nuxt/>
  </div>
</template>

<style>
  body {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
