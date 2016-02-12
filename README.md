# Webpack & React ninjutsu playground

## Includes

- Webpack loaded with SASS / Bootstrap / Font Awesome
- advanced npm scripts
- React with ES6 (Babel)
- minimal authorization manager & policy (a la Pundit gem)
- routing example with react-router
- an example of async module loading (Webpack) from an entrypoint
- basic CRUD example with flux (Alt) backed by api server stub (Express)
- lazy image loading example (react-lazy-load)
- production focused Webpack config
- hot module loading (webpack-dev-server)

## TODO

- clean up the main page layout (but keep examples)
- clean up the mess in src/components/ (but keep examples working)
- take care of the tests (shallow rendering)

# install

$ node --version
v5.4.1

## node
npm install

## development - build index.html and run dev servers
npm run html
npm run webpack-server
npm run web-server

## browse
npm run browse

## production

npm run html-production
npm run web-server-production

## props

https://github.com/newtriks/generator-react-webpack
http://humaan.com/getting-started-with-webpack-and-react-es6-style/
