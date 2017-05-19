import { Meteor } from 'meteor/meteor';

// Import Links collection so server has access to any
// Meteor.mthods() declared
import { Links } from '../imports/collections/links';

Meteor.startup(() => {
  // code to run on server at startup
});
