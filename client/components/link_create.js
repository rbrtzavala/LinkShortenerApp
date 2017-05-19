import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit(event) {
    // prevent browser default behavior
    event.preventDefault();

    // refs: reference => ref attribute on input tag
    // console.log(this.refs.input.value);
    // Call our Meteor Methiod
    Meteor.call('links.insert', this.refs.input.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="input" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
