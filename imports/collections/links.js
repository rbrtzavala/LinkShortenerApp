import { Mongo } from 'meteor/mongo';

// Define a method that takes in an object
Meteor.methods({
  'links.insert': function(url) {
    console.log('attempting to save', url);
  }
});

// create new collection 'Links'
export const Links = new Mongo.Collection('links');
