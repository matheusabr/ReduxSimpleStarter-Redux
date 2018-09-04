import React, { Component } from 'react';
import { connect } from 'react-redux';

// React
class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started!</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

// Redux
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

// Container
export default connect(mapStateToProps)(BookDetail);
