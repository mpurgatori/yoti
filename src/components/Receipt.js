import React from "react";
import Modal from './Modal.js';


export default class Receipt extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            time: '',
            date: '',
            modalOpen: false
        }
        this.convertTimeStamp = this.convertTimeStamp.bind(this);
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

    convertTimeStamp(stamp) {
        const a = new Date(stamp * 1000);
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        let min = a.getMinutes();
        if (parseInt(min, 10) < 10)
        min = `0${min}`;
        const sec = a.getSeconds();
        const dateFormat = `${date} ${month} ${year}`;
        const timeFormat = `${hour}:${min}`;
        return [dateFormat, timeFormat];
    }

    componentWillMount() {
        const convertedTime = this.convertTimeStamp(this.props.receipt.transaction["unix-timestamp"])[1];
        const convertedDate = this.convertTimeStamp(this.props.receipt.transaction["unix-timestamp"])[0];
        this.setState({ time: convertedTime, date: convertedDate })
    }

    render() {
      return (
        <div>
            <div className="receipt" onClick={this.modalHandlerOpen}>
                <div className="receipt-date">{this.state.date}</div>
                <div className="receipt-info">
                   <div className="receipt-left">
                        <span className="icon icon-activity_tick"></span>
                        <span className="icon icon-user_selfie_ph"></span>
                        <span className="yoti-shared">Yoti shared</span>
                   </div>
                   <div className="receipt-right">
                        <div>{this.state.time}</div>
                        <div>{this.state.date}</div>
                   </div> 
                </div>
             </div>
            <Modal date={this.state.date} time={this.state.time} info={this.props.receipt} isOpen={this.state.modalOpen} close={this.modalHandlerClose} />
        </div>
      )
    }
  }