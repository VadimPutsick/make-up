import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Tooltip,TooltipContent } from 'reactstrap';

class Index extends React.Component {
  render() {
    return (
      <div className="mu-index">
    
    <Button color="danger">danger</Button>{' '}
      </div>
    )
  }
}
ReactDOM.render(<Index />,
  document.getElementById("root"));
