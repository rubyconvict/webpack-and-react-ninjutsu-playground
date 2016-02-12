var express = require('express');
var path = require('path');
var port = process.env.PORT || 9000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1/posts', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'posts.json'))
})

app.get('/api/v1/posts/1', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'post.json'))
})

app.post('/api/v1/posts', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'post.json'))
})

app.put('/api/v1/posts/1', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'post.json'))
})

app.delete('/api/v1/posts/1', function (request, response){
  response.send('{}')
})

app.get('/api/v1/categories', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'categories.json'))
})

app.get('/profile', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'profile.json'))
})

app.post('/users', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'users.json'))
})

app.post('/users/sign_in', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'sign_in.json'))
})

app.delete('/users/sign_out', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev-http-server', 'sign_out.json'))
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
