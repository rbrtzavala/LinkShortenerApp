import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';
// Import Links collection so client has access to any
// Meteor.mthods() declared
import { Link } from '../imports/collections/links';

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
