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
var HistoryListItem = require('./HistoryListItem.react');

var HistoryList = React.createClass({displayName: "HistoryList",

  propTypes: {
    allHistoryEntries: ReactPropTypes.array.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {

    var historyNodes = this._getHistoryListItemNodes();

    //TODO: return history item nodes..
    return React.createElement("div", {id: "history"}, 
      React.createElement("h3", null, "History"), 
      React.createElement("ul", {id: "history-list"}, 
      historyNodes.length ? historyNodes : "No entries.."
      )
    );

  },

  _getHistoryListItemNodes: function () {
    return this.props.allHistoryEntries.map(function (entry, index) {

      return React.createElement(HistoryListItem, {historyIndex: index, historyEntry: entry});
    });
  }
});

module.exports = HistoryList;
