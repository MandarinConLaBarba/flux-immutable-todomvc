/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var HistoryList = require('./HistoryList.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    allHistoryEntries : TodoStore.getHistory(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

var TodoApp = React.createClass({displayName: "TodoApp",

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
  	return (
      React.createElement("div", null, 
        React.createElement(HistoryList, {allHistoryEntries: this.state.allHistoryEntries}), 
        React.createElement(Header, null), 
        React.createElement(MainSection, {
          allTodos: this.state.allTodos, 
          areAllComplete: this.state.areAllComplete}
        ), 
        React.createElement(Footer, {allTodos: this.state.allTodos})
      )
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = TodoApp;
