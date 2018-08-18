import React from "react";

export default class Navbar extends React.Component {
    render() {
      return (
        <nav id="top-navbar" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-left">
                    <span className="navbar-brand">
                        <span className="icon icon-logo"></span>
                    </span>
                </div>
                <div className="navbar-right">
                    <div className="navbar-brand navbar-connected">
                        <span className="navbar-connected-text">Connected</span>
                        <span className="icon icon-connect-on"></span>
                    </div>
                    <div className="navbar-user-container">
                        <span className="icon icon-user_selfie_ph"></span>
                    </div>
                </div>
            </div>
        </nav>
      )
    }
  }