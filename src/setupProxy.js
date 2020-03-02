const proxy = require('http-proxy-middleware');

console.log(process.env);


// module.exports = function(app) {
//   app.use(proxy( '/login/google',   { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/*',          { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/user/*',     { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/uses',       { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/tasklist/*', { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/usertask',   { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/task',       { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/addsequence/*', { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/set',        { target: 'http://localhost:5000/' }));
//   app.use(proxy( '/api/position',   { target: 'http://localhost:5000/' }));
// };


module.exports = function(app) {
  app.use(proxy( '/login/google',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/*',             { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/user/*',        { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/uses',          { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/tasklist/*',    { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/usertask',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/task',          { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/addsequence/*', { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/set',           { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/position',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
  app.use(proxy( '/api/getcurrentuser',{ target: 'https://onb0ardingapp.azurewebsites.net/' }));
};


// #region
// if(process.env.NODE_ENV === "development")
//   {
// //     console.log("dev");
//     module.exports = function(app) {
//       app.use(proxy( '/login/google',   { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/*',          { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/user/*',     { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/uses',       { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/tasklist/*', { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/usertask',   { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/task',       { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/addsequence/*', { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/set',        { target: 'http://localhost:5000/' }));
//       app.use(proxy( '/api/position',   { target: 'http://localhost:5000/' }));
//     };
  // }

// if(process.env.NODE_ENV === "test")
// else if(process.env.NODE_ENV === "test")
//   {
    // console.log("test!!!!!");
    // module.exports = function(app) {
    //   app.use(proxy( '/login/google',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/*',             { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/user/*',        { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/uses',          { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/tasklist/*',    { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/usertask',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/task',          { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/addsequence/*', { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/set',           { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/position',      { target: 'https://onb0ardingapp.azurewebsites.net/' }));
    //   app.use(proxy( '/api/getcurrentuser',{ target: 'https://onb0ardingapp.azurewebsites.net/' }));
    // };
  // }
  // #endregion
