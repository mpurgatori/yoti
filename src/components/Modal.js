import React from "react";

export default class Modal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          selfie:''
        }
    }

    selfieDisplay() {
      let setSelfie = false;
      if (this.props.info.type === "application")
      {
        setSelfie = "../src/styles/assets/images/arnold.jpg"
      }
      else{
        console.log(this.props.info.transaction.attributes[1].selfie,'QWERT')

        for (let i = 0; i < this.props.info.transaction.attributes.length; i++)
        {
          if (this.props.info.transaction.attributes[i].selfie){
            setSelfie = this.props.info.transaction.attributes[i].selfie;
          }          
        }
      }
      this.setState({selfie: setSelfie});;
    }

    attrString(str) {
      let newStr = str.replace(/(\w)(-)(\w)/g, '$1 $3');
      const toTitleCase = str => {
        return str.replace(/\w\S*/g, (txt)=> {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    return toTitleCase(newStr);
  }

    componentWillMount() {
      this.selfieDisplay();
    }


    render() {
    console.log(this.state.selfie,'***&&&***')
    const displayModal = this.props.isOpen ? 'block' : 'none';

      return (
        <div className="modal-overlay" onClick={this.props.close} style={{display: displayModal}}>
          <div className="modal-content dont-close">
            <span className="close-button"></span>


          {
            this.props.info.type === "application" &&
            <div>
              <div className="modal-application-box dont-close" style={{backgroundColor: this.props.info.application.appearance["bg-color"]}}>
                {this.props.info.application.appearance["bg-img"] &&
                  <img className="application-image dont-close" src={this.props.info.application.appearance["bg-img"]} />
                }
                {this.props.info.application.appearance["bg-logo"] &&
                  <img className="application-image dont-close" src={this.props.info.application.appearance["bg-logo"]} />
                }
              </div>
              <div className="modal-middle-section">
                <img className="selfie" src={this.state.selfie}></img>
                <br/>
                <span className="icon icon-receipt_confirmed"></span>
                <div className="app-name">{this.props.info.application.name}</div>
                <div className="app-viewed">
                  <div>viewed this informtion about you</div>
                  <div>{`at ${this.props.time} on ${this.props.date}`}</div>
                </div>
                <div className="modal-attributes">
                  {
                    this.props.info.transaction.attributes.map( attr => {
                      if (attr.hasOwnProperty('selfie')){return}
                      return (
                        <div className="attribute">
                          <div className="attribute-key">{this.attrString(Object.keys(attr)[0])}</div>
                          <div className="attribute-value">{attr[Object.keys(attr)[0]]}</div>
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
              <div>
                <div className="modal-middle-section">
                  {!this.state.selfie ? (
                      <span className="icon icon-user_selfie_ph_medium"></span>
                    ) : (
                      <img className="selfie" src={this.state.selfie}></img>
                  )}
                  <br/>
                  <span className="icon icon-receipt_confirmed"></span>
                <div className="modal-attributes">
                  {
                    this.props.info.transaction.attributes.map( attr => {
                      console.log(typeof attr, 'ATTRIBUTE')
                      if (attr.hasOwnProperty('selfie')){return}
                      return (
                        <div className="attribute">
                          <div className="attribute-key">{this.attrString(Object.keys(attr)[0])}</div>
                          <div className="attribute-value">{attr[Object.keys(attr)[0]]}</div>
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