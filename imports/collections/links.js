import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

// Define a method that takes in an object
Meteor.methods({
  'links.insert': function(url) {
    // npm package that validates for us.
    // validUrl.isUri(url);
    check(url, Match.Where(url => validUrl.isUri(url)));

    // Generate random to token to assign to url
    const token = Math.random().toString(36).slice(-5);
    
    // Ready to save url
    Links.insert({ url, token, clicks: 0 });
  }
});

// create new collection 'Links'
export const Links = new Mongo.Collection('links');
