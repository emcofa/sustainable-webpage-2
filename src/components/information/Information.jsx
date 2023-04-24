import React from 'react';
import './information.css';
import Lion from '../../assets/lion.webp'
import Gorilla from '../../assets/gorilla.webp'
import Butterfly from '../../assets/butterfly.webp'
import Polarbear from '../../assets/polarbear.webp'


function Information() {
    return (
        <div className="information-container">
            <h2>Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem asperiores quod ea odio dicta dolore dolores necessitatibus quos, sequi debitis aut et quibusdam. Aspernatur mollitia culpa aut eum iure.</p>
            <div className="image-container">
                <img
                    src={Lion}
                    alt="Lion"
                    loading="lazy"
                    srcSet={`${Lion} 400w, ${Lion} 800w, ${Lion} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
                <img
                    src={Gorilla}
                    alt="Gorilla"
                    loading="lazy"
                    srcSet={`${Gorilla} 400w, ${Gorilla} 800w, ${Gorilla} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
                <img
                    src={Butterfly}
                    alt="Butterfly"
                    loading="lazy"
                    srcSet={`${Butterfly} 400w, ${Butterfly} 800w, ${Butterfly} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
                <img
                    src={Polarbear}
                    alt="Polarbear"
                    loading="lazy"
                    srcSet={`${Polarbear} 400w, ${Polarbear} 800w, ${Polarbear} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
            </div>
            <div className="special-font__container">
                <p className='special-font'>Lorem ipsum</p>
                <p className='special-font'>12 3456</p>
                <p className='special-font'>Dolorem asperiores</p>
                <p className='special-font'>Aspernatur mollitia</p>
            </div>
        </div>
    );
}

export default Information;
