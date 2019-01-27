import React from 'react';
import './about.css';

const aboutImgPath = 'https://sun9-3.userapi.com/c840736/v840736033/34bd7/U_lTnEM3rdc.jpg';

export class About extends React.Component {
    render() {
        return (
            <div className="row ">
                <div className="col ">
                    <img src={aboutImgPath} className='img-fluid'/>
                </div>
                <div className="col">
                    <p>Professional Make-up Artist Elena Stagge</p>
                    <p>Диплом участника World Bodypainting Festival \ World Award 2015: категория facepainting.</p>
                    <p>Призёр конкурса Интерстиль 2015 "Роза ветров" в категории -Креативный макияж и Боди-арт.</p>
                    <p>Призёр Открытого Международного Чемпионата на Кубок России Фестиваль красоты Невские Берега
                        2016: в категории- Креативный макияж. Мастера.</p>
                    <p> И в категории- Макияж для торжественного случая. Мастера.</p>
                </div>
            </div>
        );
    }
}


