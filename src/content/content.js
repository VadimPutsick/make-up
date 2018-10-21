import React from 'react';

import "./content.scss";
import {About,Main,Contact,Prices,Services,Trainings } from '../components';

import {  Route, Link } from "react-router-dom";

export  class Content extends React.Component {
    render() {
        return (
            <div className="mu-content">
          
                <Route exact  path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/prices" component={Prices} />
                <Route path="/services" component={Services} />
                <Route path="/trainings" component={Trainings} />
               
            </div>
        );
    }
}