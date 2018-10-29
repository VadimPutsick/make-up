import React from 'react';
import './footer.css';
// import 'instafeed.js';
// import 'https://vk.com/js/api/openapi.js?159';


export class Footer extends React.Component {
    componentDidMount() {
        VK.Widgets.Group("vk_groups", { mode: 3 }, 55579723);
        
    }
    render() {
        return (
            <div>
                <hr/>
                <h3>Присоеденяйтесь</h3>
                <div  id="vk_groups"></div>
                
            </div>
        )

    }

}