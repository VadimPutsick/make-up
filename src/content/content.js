import React from 'react';

import "./content.css";
import {About,Main,Contact,Prices,Services,Trainings,ServicesFreeLessons,ServicesMakeUp,ServicesMerriage } from '../components';
import {Admin} from '../admin';

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
                <Route path="/services-free-lessons" component={ServicesFreeLessons} />
                <Route path="/services-makeUp" component={ServicesMakeUp} />
                <Route path="/admin" component={Admin} />
            </div>
        );
    }
}