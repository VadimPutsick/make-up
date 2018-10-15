import React from 'react';
import "./content.scss";
import About from '../about/index';
import Main from '../main/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Content extends React.Component {
    render() {
        return (
            <div className="mu-content">
                <Router>
                    <Route  path="/" component={Main} />
                    <Route path="/about" component={About} />
                </Router>
                {/* Эволюция человеческой цивилизации имеет тенденцию к поглощению естественного искусственным.
    Это проявляется в создании множества опосредующих звеньев между естественными способностями и потребностям
     человека и искусственными формами их проявления и удовлетворения.
Так специалисты в области кибернетики сразу же указали на принципиальную возможность моделирования сознания,
ак индивидуального, так и общественного, при помощи технических средств. Уже в середине 90-х годов была решена
проблема моделирования нейронных систем, находящихся на уровне нервной системы головоногого моллюска (порядка 100 тысяч нейронов).
 Такие системы способны к самообучению, к образованию условных рефлексов и даже к простейшим «умозаключениям», основанным на выявлении аналогий.
Интеллект (по Пиаже Ж.) – высшая форма духовного приспособления к среде путем мгновенной организации стабильных пространственно-временных
логических структур. */}
      </div>
        );
    }
}