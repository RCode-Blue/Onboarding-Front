const proxy = require('http-proxy-middleware');

console.log(process.env);


// #region Local
// module.exports = function(app) {
  // app.use(proxy( '/api',               { target: 'http://localhost:5000/'}));

  // app.use(proxy( '/login/google/*',    { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/*',             { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/user/*',        { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/uses',          { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/tasklist/*',    { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/usertask',      { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/task',          { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/addsequence/*', { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/set',           { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/position',      { target: 'http://localhost:5000/' }));
// };
// #endregion



module.exports = function(app) {

  // #region Local
  // -------------
  // app.use(proxy( '/login/google',      { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api',               { target: 'http://localhost:5000/' }));

  // app.use(proxy( '/api/user/*',        { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/uses',          { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/tasklist/*',    { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/usertask',      { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/task',          { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/addsequence/*', { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/set',           { target: 'http://localhost:5000/' }));
  // app.use(proxy( '/api/position',      { target: 'http://localhost:5000/' }));
  // // -------------
  // endregion



  // #region Heroku
  // --------------
  // app.use(proxy( '/api',               { target: 'http://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/login/google',      { target: 'https://pure-sands-57711.herokuapp.com/' }));

  // app.use(proxy( '/api/*',             { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/user/*',        { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/uses',          { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/tasklist/*',    { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/usertask',      { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/task',          { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/addsequence/*', { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/set',           { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/position',      { target: 'https://pure-sands-57711.herokuapp.com/' }));
  // app.use(proxy( '/api/getcurrentuser',{ target: 'https://pure-sands-57711.herokuapp.com/' }));
  // --------------
  // #endregion



  // #region Azure
  // ------------
  app.use(proxy( '/login/google',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api',               { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  
  app.use(proxy( '/api/user/*',        { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/uses',          { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/tasklist/*',    { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/usertask',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/task',          { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/addsequence/*', { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/set',           { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/position',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/getcurrentuser',{ target: 'https://onb0ardingapp.azurewebsites.net/' }));
  // #endregion

};


