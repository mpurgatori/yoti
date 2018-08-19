import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";


//css entry
import './styles/_main.scss';

//components
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import MainPanel from './components/MainPanel';

import activityData from './data/mock-data.json'


//Main component
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        activity: activityData
      }
      //this.addCanvas = this.addCanvas.bind(this);
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
