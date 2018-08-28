import React from "react";

import { attrString } from '../helpers/helpers';



export default class Modal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          selfie: this.selfieDisplay()
        }
    }

    selfieDisplay() {
      let setSelfie = false;
      if (this.props.info.type === "application")
      {
        setSelfie = "../src/styles/assets/images/arnold.jpg"
      }
      else{

        for (let i = 0; i < this.props.info.transaction.attributes.length; i++)
        {
          if (this.props.info.transaction.attributes[i].selfie){
            setSelfie = this.props.info.transaction.attributes[i].selfie;
          }          
        }
      }
      return setSelfie;
    }


    render() {
    const displayModal = this.props.isOpen ? 'block' : 'none';

      return (
        <div className="modal-overlay" onClick={this.props.close} style={{display: displayModal}}>
          <div className="modal-content dont-close">
            <span className="close-button"></span>


          {
            this.props.info.type === "application" &&
            <div className="dont-close">
              <div className="modal-application-box dont-close dont-close" style={{backgroundColor: this.props.info.application.appearance["bg-color"]}}>
                {this.props.info.application.appearance["bg-img"] &&
                  <img className="application-image dont-close dont-close" src={this.props.info.application.appearance["bg-img"]} />
                }
                {this.props.info.application.appearance["bg-logo"] &&
                  <img className="application-image dont-close dont-close" src={this.props.info.application.appearance["bg-logo"]} />
                }
              </div>
              <div className="modal-middle-section dont-close">
                <img className="selfie dont-close" src={this.state.selfie}></img>
                <br/>
                <span className="icon icon-receipt_confirmed dont-close"></span>
                <div className="app-name dont-close">{this.props.info.application.name}</div>
                <div className="app-viewed dont-close">
                  <div className="dont-close">viewed this informtion about you</div>
                  <div className="dont-close">{`at ${this.props.time} on ${this.props.date}`}</div>
                </div>
                <div className="modal-attributes dont-close">
                  {
                    this.props.info.transaction.attributes.map( attr => {
                      if (attr.hasOwnProperty('selfie')){return}
                      return (
                        <div className="attribute dont-close">
                          <div className="attribute-key dont-close">{attrString(Object.keys(attr)[0])}</div>
                          <div className="attribute-value dont-close">{attr[Object.keys(attr)[0]]}</div>
                        </div>     
                      )
                    })
                  }
                </div>
              </div>
            </div>
            }
            {
              this.props.info.type === "share" &&
              <div className="dont-close">
                <div className="modal-middle-section dont-close">
                  {!this.state.selfie ? (
                      <span className="icon icon-user_selfie_ph_medium dont-close"></span>
                    ) : (
                      <img className="selfie dont-close" src={this.state.selfie}></img>
                  )}
                  <br/>
                  <span className="icon icon-receipt_confirmed dont-close"></span>
                  <div className="app-name dont-close">Yoti Shared</div>
                <div className="modal-attributes dont-close">
                  {
                    this.props.info.transaction.attributes.map( attr => {
                      if (attr.hasOwnProperty('selfie')){return}
                      return (
                        <div className="attribute dont-close">
                          <div className="attribute-key dont-close">{attrString(Object.keys(attr)[0])}</div>
                          <div className="attribute-value dont-close">{attr[Object.keys(attr)[0]]}</div>
                        </div>     
                      )
                    })
                  }
                </div>
              </div>
              </div>
            }
          </div>
        </div>
      )
    }
  }