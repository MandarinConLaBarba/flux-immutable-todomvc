/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem.react');

var MainSection = React.createClass({displayName: "MainSection",

  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos) {
      todos.push(React.createElement(TodoItem, {key: key, todo: allTodos[key]}));
    }

    return (
      React.createElement("section", {id: "main"}, 
        React.createElement("input", {
          id: "toggle-all", 
          type: "checkbox", 
          onChange: this._onToggleCompleteAll, 
          checked: this.props.areAllComplete ? 'checked' : ''}
        ), 
        React.createElement("label", {htmlFor: "toggle-all"}, "Mark all as complete"), 
        React.createElement("ul", {id: "todo-list"}, todos)
      )
    );
  },

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll: function() {
    TodoActions.toggleCompleteAll();
  }

});

module.exports = MainSection;
