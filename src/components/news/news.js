import React from 'react';
import "./news.css";
import {PLAIN_CARD, IMG_DOWN} from '../../utils/card/cardType';

const mainImgPath = 'https://sun9-5.userapi.com/c845416/v845416782/80bf0/ahCDG7DC2k8.jpg';
const newsList = [
    {
        id: 1,
        title: `Halloween makeup 😈`,
        date: `27.10.2018`,
        text: `23 октября в 14.00 по адресу ул. Ленинская 23а пройдёт мой Мастер-класс на тему "Halloween makeup" 😈
        Запись на МК в директ или по телефону +375296916958 WhatsApp Viber`,
        imagePath: 'https://pp.userapi.com/c850124/v850124946/4d687/qkxQKfoiCsw.jpg'
    },
    {
        id: 2,
        title: `Собирали на фотосесс,ию Unreal @viktoryia.raynes `,
        date: `27.10.2018`,
        text: `Собирали на фотосессию Unreal @viktoryia.raynes 😍 мой макияж для красотки Вики, 
        обалденные локоны от @gapeevakate 💜 Стильные серьги @bijuteri_mog 💙 Ждём не менее 
        крутых фото от @pyzhovds в обалденно-красном платье от @studia_prokata_mogilev 💕`,
        imagePath: 'https://pp.userapi.com/c844321/v844321794/108523/3YpzBi8kUac.jpg'
    },
    {
        id: 3,
        title: `Halloween makeup 😈`,
        date: `27.10.2018`,
        text: `23 октября в 14.00 по адресу ул. Ленинская 23а пройдёт мой Мастер-класс на тему "Halloween makeup" 😈
        Запись на МК в директ или по телефону +375296916958 WhatsApp Viber`,
        imagePath: 'https://pp.userapi.com/c850124/v850124946/4d687/qkxQKfoiCsw.jpg'
    },
    {
        id: 4,
        title: `Halloween makeup 😈`,
        date: `27.10.2018`,
        text: `23 октября в 14.00 по адресу ул. Ленинская 23а пройдёт мой Мастер-класс на тему "Halloween makeup" 😈
        Запись на МК в директ или по телефону +375296916958 WhatsApp Viber`,
        imagePath: 'https://pp.userapi.com/c850124/v850124946/4d687/qkxQKfoiCsw.jpg'
    }
];

function NewsItem(props) {
    let footer;
    console.log(props);
    if (props.type === IMG_DOWN) {
        footer = <img className="card-img-top" src={props.item.imagePath} alt="Card image cap"/>;
    }
    return (
        <div className="card mu-news__item">
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">
                    {props.item.text}
                </p>
            </div>
            {footer}
        </div>
    );
}


export class News extends React.Component {

    render() {
        return (
            <div className="mu-news">
                {
                    newsList.map((item, index) =>
                        <NewsItem type={this.props.cardType} item={item} key={index}/>
                    )
                }
            </div>
        );
    }
}


