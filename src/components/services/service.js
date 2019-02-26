import React from 'react';
import beauty from './bg1.jpg';
import './service.css';
export class Service extends React.Component {
    render() {
        return (
            <div className="service">
                <div className="service-image">
                    <img src={beauty} />
                </div>
                <div className="service-info">
                    Визаж/прическа (полный образ)
                </div>
            </div>
        );
    }
}