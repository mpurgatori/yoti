import React from "react";
import Receipt from './Receipt';
import { timeStampHour } from '../helpers/helpers';


export default class MainPanel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            filter: false
        }

        this.checkBoxHandler = this.checkBoxHandler.bind(this);
    }

    checkBoxHandler(e) {
        this.setState({filter: e.target.checked})
    }


    render() {
        const displayMessage = this.state.filter ? "You are viewing receipts before 10" : "Displaying All";
        const filteredDisplay = this.props.activity.filter( receipt => {
            const hour = timeStampHour(receipt.transaction["unix-timestamp"])
            return hour <= 10;
        } )
        const displayActivity = this.state.filter ? filteredDisplay : this.props.activity
      return (
        <div className="main-panel">
            <div className="main-panel-header">Activity</div>
            <div>
                <label for="hideTen" style={{marginRight:"10px"}}>Hide After 10</label>
                <input id="hideTen" type="checkbox" onChange={this.checkBoxHandler}></input>
            </div>
            <div>{displayMessage}</div>
            <div className="main-panel-subheader">
                <div>Activity</div>
                <div className="main-panel-subheader-text">See a record of everyone you have shared details with.</div>
            </div>
            <div className="receipt-container">
            {
                displayActivity.map( receipt => {
                   return <Receipt receipt={receipt} />
                })
            }
            </div>
        </div>
      )
    }
  }