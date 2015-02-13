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

var HistoryListItem = React.createClass({displayName: "HistoryListItem",

  propTypes: {
    historyIndex : ReactPropTypes.number.isRequired,
    historyEntry: ReactPropTypes.object.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {

    return React.createElement("li", {
      key: "history-entry-" + this.props.historyIndex}, 
      React.createElement("a", {onClick: TodoActions.goToHistory.bind(this, this.props.historyIndex)}, "Version: " + this.props.historyIndex)
    );

  }
});

module.exports = HistoryListItem;
