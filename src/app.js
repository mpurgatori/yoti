import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import activityData from './data/mock-data.json'

import { descending } from './helpers/helpers';

import './styles/_main.scss';

import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import MainPanel from './components/MainPanel';




class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        activity: descending(activityData)
      }
    }

  

  render() {
    return (
        <div className="content">
            <Navbar />
            <LeftPanel />
            <MainPanel activity={this.state.activity} />
        </div>
    )
  }
}


const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
