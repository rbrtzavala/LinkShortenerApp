import React, { Component } from 'react';

class LinkCreate extends Component {
  // initialize component state inside a contructor
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    // prevent browser default behavior
    event.preventDefault();

    // refs: reference => ref attribute on input tag
    // console.log(this.refs.link.value);
    // Call our Meteor Methiod
    Meteor.call('links.insert', this.refs.link.value, (error) => {
      if (error) {
        this.setState({ error: 'Please enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
