import React from 'react';
import './footer.css';

export class Footer extends React.Component {
    componentDidMount() {
        VK.Widgets.Group("vk_groups", {mode: 3, width: 320}, 55579723);
    }

    render() {
        return (
            <div>
                <hr/>
                <h3>Присоеденяйтесь</h3>
                <div id="contactVidgets">
                    <iframe
                        id="instagramVidget"
                        src="//widget.instagramm.ru/?imageW=2&imageH=1&thumbnail_size=147&type=0&typetext=elenastagge&head_show=1&profile_show=1&shadow_show=1&bg=255,255,255,1&opacity=true&head_bg=46729b&subscribe_bg=ad4141&border_color=c3c3c3&head_title="
                        frameBorder="0" scrolling="no">
                    </iframe>
                    <div id="vk_groups"></div>
                </div>
            </div>
        );
    }
}