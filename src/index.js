import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tooltip, TooltipContent } from 'reactstrap';
import {Content} from './content';
import {Navigator} from "./navigator";
import {Footer} from './footer';
import {HashRouter as Router} from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <div className="mu-index"  >
        <div className="container">
       
          <Router>
            <div>
                <Navigator />  
                <Content />
            </div>        
          </Router>
<Footer/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Index />,
  document.getElementById("root"));
