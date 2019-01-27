import React from 'react';
import "./admin.css";
import {CrudBlock} from './crud-block';
import { Button } from 'reactstrap';
//import 'whatwg-fetch';
//http://localhost:5000/data
export class Admin extends React.Component {
    componentDidMount() {
        // fetch('http://127.0.0.1:5000/', {
        //     method: 'GET',
        //     mode: 'no-cors'
        // })
        //     .then(
        //         function(response) {
        //             console.log(response.text());
        //         }
        //     )

      //  xhr.open('GET', 'http://localhost:5000/data', false);

    }

    render() {
        return (
            <div>

               Admin Panel
                  <Button color="success">Создать</Button>
               <CrudBlock/>
            </div>
        )
    }
}


