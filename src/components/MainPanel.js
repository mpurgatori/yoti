import React from "react";
import Receipt from './Receipt';

export default class MainPanel extends React.Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
      return (
        <div className="main-panel">
            <div className="main-panel-header">Activity</div>
            <div className="main-panel-subheader">
                <div>Activity</div>
                <div className="main-panel-subheader-text">See a record of everyone you have shared details with.</div>
            </div>
            <div className="receipt-container">
            {
                this.props.activity.map( receipt => {
                   return <Receipt receipt={receipt} />
                })
            }
            </div>
        </div>
      )
    }
  }