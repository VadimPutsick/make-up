import React from 'react';
import './crud-block.css';
import { Button } from 'reactstrap';


export class CrudBlock extends React.Component {
    // flex-row
    render() {
        return (
            <div >

                <Button color="primary">Изменить</Button>
                <Button color="danger">Удалить</Button>
            </div>

        );
    }
}


