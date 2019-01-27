import React from 'react';
import { News } from '../news';
import { PLAIN_CARD, IMG_DOWN } from '../../utils/card/cardType';
import './contact.css'

const makeupLocation = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa908774225c0b31ef4ed42f9a404538a8e38a041e64ecefb327640265288fd74&amp;source=constructor";

export class Contact extends React.Component {
    stopZooming() {
        alert("reg");
    }

    render() {
        return (
            <div>
                <div className="contact">
                    <div className="contact-feedback">
                        <form>
                            <h4>Оставьте заявку я свяжусь с вами</h4>
                            <div className="form-group">
                                <label htmlFor="inputName">Ваше имя</label>
                                <input className="form-control" type="text" id="inputName"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPhone">Ваш номер телефона</label>
                                <input className="form-control" type="text" id="inputPhone"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Ваш email</label>
                                <input className="form-control" type="text" id="inputEmail"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Отправить</button>
                        </form>                    
                    </div>
                    <div className="contact-information">
                        <div>
                            <h4>Мы находимся по адресу:</h4>
                            <p>Ленинская 23,а</p>
                        </div>
                        <div>
                            <h4>Время работы:</h4>
                            <p>
                                Пн-Пт с 9.00 до 20.00
                            </p>
                            <p>
                                Сб. С 9.00 до 17.00
                            </p>
                            <p>
                                Воскресенье: выходной
                            </p>
                        </div>
                        <div>
                            <h4>Телефон для консультаций:</h4>
                            <p>+375 29 69 16 958</p>
                        </div>
                        <h4>Мы в социальных сетях:</h4>
                        <ul className="social-networks">
                            <li>
                                <a href="https://vk.com/elenastagge"><i className="fab fa-vk "></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/elenastagge"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="map">
                    <iframe onClick={this.stopZooming} src={makeupLocation} width="700" height="483"
                        frameBorder="0" scrolling="no">
                    </iframe>
                </div>
            </div>
        );
    }
}


