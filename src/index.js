import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Tooltip,TooltipContent } from 'reactstrap';
import Navigator from "./components/navigator/index";
import Content from "./components/content/contnet";
class Index extends React.Component {
  render() {
    return (
      <div className="mu-index ">
      <div className="container">
      <Navigator/>
 <Content/>
      </div>

      </div>
    )
  }
}
ReactDOM.render(<Index />,
  document.getElementById("root"));
