var React = require('react');
var ReactPropTypes = React.PropTypes;
var HistoryListItem = require('./HistoryListItem.react');

var HistoryList = React.createClass({

  propTypes: {
    allHistoryEntries: ReactPropTypes.array.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {

    var historyNodes = this._getHistoryListItemNodes();

    //TODO: return history item nodes..
    return <div id="history">
      <h3>History</h3>
      <ul id="history-list">
      {historyNodes.length ? historyNodes : "No entries.."}
      </ul>
    </div>;

  },

  _getHistoryListItemNodes: function () {
    return this.props.allHistoryEntries.map(function (entry, index) {

      return <HistoryListItem historyIndex={index} historyEntry={entry} />;
    });
  }
});

module.exports = HistoryList;
