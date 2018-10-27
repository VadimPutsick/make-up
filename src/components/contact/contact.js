import React from 'react';
import {News} from '../news';

import {PLAIN_CARD,IMG_DOWNN,IMG_BACKGOUND} from '../../utils/card/cardType';
export  class Contact extends React.Component{

    render( ){
        return (
            <div>
                This is Contact
                <News cardType={IMG_DOWNN}/>
              
            </div>
          
        )
    }
}


