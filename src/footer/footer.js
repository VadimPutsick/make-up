import React from 'react';
import 'instafeed.js';
// import 'https://vk.com/js/api/openapi.js?159';


export class Footer extends React.Component {
    componentDidMount() {
        VK.Widgets.Group("vk_groups", { mode: 3 }, 55579723);
        // var feed = new Instafeed({
        //     get: 'tagged',
        //     tagName: 'awesome',
        //     clientId: 'YOUR_CLIENT_ID'
        // });
        // feed.run();
    }
    render() {
        return (
            <div>
                <h1>Присоеденяйтесь</h1>
                <div id="vk_groups"></div>
                <div id="instafeed"></div>
            </div>
        )

    }

}