const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy( '/login/google',   { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/*',          { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/user/*',     { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/uses',       { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/tasklist/*', { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/usertask',   { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/task',       { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/addsequence/*', { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/set',        { target: 'http://localhost:5000/' }));
  app.use(proxy( '/api/position',   { target: 'http://localhost:5000/' }));
};