import React from 'react'
import Lake from '../../assets/mountain.webp'
import './image.css'

function Image() {

    return (
        <div className="scroll__image-container">
            <img
                id="image"
                src={Lake}
                alt="Example image"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                srcSet={`${Lake} 400w, ${Lake} 800w, ${Lake} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
            />
            <div className="scroll__text-container">
                <h2>Lorem ipsum dolor</h2>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, numquam dicta optio culpa consequatur explicabo saepe aliquam ex assumenda nesciunt labore eius facere eaque quis dolorem, amet deserunt molestias architecto?</p>
                <div className='scroll__button-container'>
                    <button className='scroll__button'>button 1</button>
                    <button className='scroll__button'>button 2</button>
                </div>
            </div>
        </div>
    )
}

export default Image
