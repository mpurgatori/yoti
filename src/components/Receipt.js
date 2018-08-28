import React from "react";
import Modal from './Modal.js';

import { convertTimeStamp } from '../helpers/helpers';

export default class Receipt extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            modalOpen: false
        }
        this.modalHandlerOpen = this.modalHandlerOpen.bind(this);
        this.modalHandlerClose = this.modalHandlerClose.bind(this);
    }

    modalHandlerOpen(){
        this.setState({modalOpen: true})
    }

    modalHandlerClose(e){
        if (e.target.classList.contains("dont-close"))
        {
            return false;
        }
        this.setState({modalOpen: false})
    }

    componentdidMount() {
        
        this.setState({ time: convertedTime, date: convertedDate })
    }

    render() {
        const convertedTime = convertTimeStamp(this.props.receipt.transaction["unix-timestamp"])[1];
        const convertedDate = convertTimeStamp(this.props.receipt.transaction["unix-timestamp"])[0];
      return (
        <div>
            <div className="receipt" onClick={this.modalHandlerOpen}>
                <div className="receipt-date">{convertedDate}</div>
                <div className="receipt-info">
                   <div className="receipt-left">
                        <span className="icon icon-activity_tick"></span>
                        <span className="icon icon-user_selfie_ph"></span>
                        <span className="yoti-shared">Yoti shared</span>
                   </div>
                   <div className="receipt-right">
                        <div>{convertedTime}</div>
                        <div>{convertedDate}</div>
                   </div> 
                </div>
             </div>
            <Modal date={convertedDate} time={convertedTime} info={this.props.receipt} isOpen={this.state.modalOpen} close={this.modalHandlerClose} />
        </div>
      )
    }
  }