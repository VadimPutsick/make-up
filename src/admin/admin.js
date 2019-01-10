import React from 'react';
import "./admin.css";
import {CrudBlock} from './crud-block';
import { Button } from 'reactstrap';
export class Admin extends React.Component {

    render() {
        return (
            <div >
               Admin Panel
                <Button color="success">Создать</Button>
               <CrudBlock/>
            </div>

        )
    }
}


