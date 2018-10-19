import React from 'react';
import "./main.scss";
const mainImgPath = 'https://sun9-5.userapi.com/c845416/v845416782/80bf0/ahCDG7DC2k8.jpg';
export class Main extends React.Component {

    render() {
        return (
            <div className="container">


                <div className="row ">
                    <div className="coll">
                    <img src={mainImgPath} className='img-fluid'/>
                    </div>
                    
                </div>
                <div className="row">
                    Professional Make-up Artist Elena Stagge
                Диплом участника World Bodypainting Festival \ World Award 2015: категория facepainting.
                Призёр конкурса Интерстиль 2015 "Роза ветров" в категории -Креативный макияж и Боди-арт.
                Призёр Открытого Международного Чемпионата на Кубок России Фестиваль красоты Невские Берега 2016:
                в категории- Креативный макияж. Мастера. И в категории- Макияж для торжественного случая. Мастера.
                    </div>
                {/* <div class="row">
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                    <div class="w-100"></div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                </div> */}

            </div>

        )
    }
}


