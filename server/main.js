import { Meteor } from 'meteor/meteor';
// Webapp object is the server component of Meteor
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

// Import Links collection so server has access to any
// Meteor.mthods() declared
import { Links } from '../imports/collections/links';

Meteor.startup(() => {
  // code to run on server at startup
  // Setup publication for access on client-side
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

// Executed whenever a user visits with a route LinkCreate
// 'localhost:3000/abcd'
function onRoute(req, res, next) {
  // Take the token out of the url and try to find a
  // matching link in the Links collection
  const link = Links.findOne({ token: req.params.token });

  if (link) {
    // If we find a link object, redirect user to the long URL
    // 307 is the redirect
    res.writeHead(307, { 'Location': link.url});
    res.end();
  } else {
    // If we don't find a link object, send the user
    // to normal React App
    next();
  }
}

// Adding middleware here
// Middleware: functions called when a request comes in.
// ConnectRoute creates a middleware that takes in an incoming
// http request.
const middleware = ConnectRoute(function(router) {
  // if req matchs '/anything' it will run the next function
  router.get('/:token', onRoute);

  // localhist:3000/  NO MATCH
  // localhist:3000/books/harry_potter  NO MATCH
  // localhist:3000/abcd  WILL MATCH!!!

});

WebApp.connectHandlers.use(middleware);
