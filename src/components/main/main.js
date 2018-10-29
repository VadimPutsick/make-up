import React from 'react';
import './main.css';
import { PLAIN_CARD, IMG_DOWNN, IMG_BACKGOUND } from '../../utils/card/cardType';
import { News } from '../news';
const mainImgPath = 'https://sun9-5.userapi.com/c845416/v845416782/80bf0/ahCDG7DC2k8.jpg';
const img2 = '../../img/background-images/bg1.jpg';

export class Main extends React.Component {

    render() {
        return (
            <div className="container">

                <div className="row ">
                    <img src={mainImgPath} className='img-fluid' />
                </div>
                <div className="row">
                    <div className="col mu-news_plain">
                        <News  cardType={PLAIN_CARD} />
                    </div>
                    <div className="col">
                        <p>
                            Открыта для сотрудничества с творческими людьми, а также с фото студиями, стилистами,
                            модельными и свадебными агентствами, фотографами и видеографами для создания и реализации
                            креативных проектов!
                        </p>
                        <p>
                            Исходя из ваших желаний и модных тенденций мы вместе создадим незабываемый образ!
                        </p>
                    </div>

                </div>
            </div>

        )
    }
}


