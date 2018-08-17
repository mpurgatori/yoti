import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";


//css entry
import './styles/main.scss';

//components
//import Navbar from './components/Navbar';


//Main component
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
       
      }
      //this.addCanvas = this.addCanvas.bind(this);
    }

  render() {
    return (
        <div className="content">
           HELLO
        </div>
    )
  }
}


const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
