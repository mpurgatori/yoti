import React from "react";

export default class LeftPanel extends React.Component {
    render() {
      return (
          <div className="left-panel">
            <div className="activity">
                <span className="icon icon-activity"></span>
                <span>Activity</span>
            </div>
          </div>
      )
    }
  }