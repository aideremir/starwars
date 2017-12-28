# Starwars

Тестовое приложение для работы с Star Wars API (https://swapi.co/)

Нюансы разработки:
1. Учитывая, что в результирующих данных SW API у сущностей нет как такового свойства id, пришлось перед тем как складывать сущность в хранилище, отдельно вычислять id из свойства url
2. Заметил, что и список фильмов /films/, и единичный фильм /films/:id/ выводят одни и те же наборы свойств для фильма, то метод /films/:id/ для получения отдельного фильма я не использую, а беру нужный фильм из хранилища по заранее подготовленному айдишнику
3. если пользователь «браузерно» рефрешит страницу /movies  или /movies/:id , то вначале заполняется хранилище. Затем при переходах по страницам к серверу не обращаемся, используем только данные из хранилища. Могут быть проблемы с устареванием данных, но в данном случае ок
4. Использовал bootstrap CSS для красоты
5. Использовал axios для общения с сервером 

> Nuxt.js project


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
