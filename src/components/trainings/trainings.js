import React from 'react';
import './trainings.css'
import trainingsData from '../../../data/trainings.json';
const Training = function (props) {
    return (
        <div className="row training-head">
            <div className="col-sm-4">
                <h5>{props.value.title}</h5>
                <span className="badge badge-danger enroll">{props.value.status ? 'идет набор' : false}</span>
            </div>
            <div className="col-sm-8">
                <p>
                    {`${props.value.content.slice(0, 200)}...`}
                </p>
            </div>
        </div>
    );
}
// "id": "0001",
// "title": "BROW MASTER. Искусство бровей",
// "content": "Тому, кто умеет пользоваться карандашом для бровей, ботокс не нужен. Умение сделать правильную линию и нужный акцент - это искусство, способное полностью изменить ваш образ",
// "status": "идет набор"
export class Trainings extends React.Component {
    render() {
        return (
            <div className="container">
                {trainingsData.map((trainingData) =>
                    <Training key={trainingData.id}
                        value={trainingData} />
                )}

            </div>
        );
    }
}


