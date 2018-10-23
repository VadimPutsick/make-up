import React from 'react';
import "./news.scss";
const mainImgPath = 'https://sun9-5.userapi.com/c845416/v845416782/80bf0/ahCDG7DC2k8.jpg';
let newsList = [
    {
        title: `Halloween makeup 😈`,
        text: `23 октября в 14.00 по адресу ул. Ленинская 23а пройдёт мой Мастер-класс на тему "Halloween makeup" 😈
        Запись на МК в директ или по телефону +375296916958 WhatsApp Viber`,
        imagePath: 'https://pp.userapi.com/c850124/v850124946/4d687/qkxQKfoiCsw.jpg'
    },
    {
        title: `Собирали на фотосессию Unreal @viktoryia.raynes `,
        text: `Собирали на фотосессию Unreal @viktoryia.raynes 😍 мой макияж для красотки Вики, 
        обалденные локоны от @gapeevakate 💜 Стильные серьги @bijuteri_mog 💙 Ждём не менее 
        крутых фото от @pyzhovds в обалденно-красном платье от @studia_prokata_mogilev 💕`,
        imagePath: 'https://pp.userapi.com/c844321/v844321794/108523/3YpzBi8kUac.jpg'
    },
    {
        title: `Halloween makeup 😈`,
        text: `23 октября в 14.00 по адресу ул. Ленинская 23а пройдёт мой Мастер-класс на тему "Halloween makeup" 😈
        Запись на МК в директ или по телефону +375296916958 WhatsApp Viber`,
        imagePath: 'https://pp.userapi.com/c850124/v850124946/4d687/qkxQKfoiCsw.jpg'
    },
    {
        title: `Halloween makeup 😈`,
        text: `23 октября в 14.00 по адресу ул. Ленинская 23а пройдёт мой Мастер-класс на тему "Halloween makeup" 😈
        Запись на МК в директ или по телефону +375296916958 WhatsApp Viber`,
        imagePath: 'https://pp.userapi.com/c850124/v850124946/4d687/qkxQKfoiCsw.jpg'
    }
];
function NewsItem(props) {
const item = props.item;
    return (      
            <div className="card mu-news__item" >
                <div className="card-body bg-secondary">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                        {item.text}
                    </p>
                </div>
                <img className="card-img-top" src={item.imagePath} alt="Card image cap" />
            </div>      
    );
}
export class News extends React.Component {

    render() {
        return (
            <div className="mu-news">               
                {
                    newsList.map(
                        (item, index) =>
                        <NewsItem  item={item} key={index}/>   
                    )
                }              

            </div >

        )
    }
}


