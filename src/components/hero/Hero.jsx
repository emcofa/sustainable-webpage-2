import React, { useState } from 'react';
import './hero.css';
import Lake from '../../assets/lake-unsplash.webp';
import Sea from '../../assets/sea-unsplash.webp';
import Nature from '../../assets/nature-unsplash.webp';
import Svg from '../../assets/static-svg.svg';

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <div className="hero-container">
            <div className="hero-heading">
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className="svg-container">
                    <img src={Svg} alt="SVG 1" className="moving__svg" />
                </div>
            </div>
            <div className="hero-container-button">
                <div className="hero-button">
                    <button className="my-button" onClick={handleButtonClick}>
                        Button
                    </button>
                </div>
            </div>
            <div className="hero-gallery">
                <img
                    src={Lake}
                    alt="First Image"
                    className={activeIndex === 0 ? "active" : ""}
                    loading="lazy"
                    srcSet={`${Lake} 400w, ${Lake} 800w, ${Lake} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
                <img
                    src={Sea}
                    alt="Second Image"
                    className={activeIndex === 1 ? "active" : ""}
                    loading="lazy"
                    srcSet={`${Sea} 400w, ${Sea} 800w, ${Sea} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
                <img
                    src={Nature}
                    alt="Third Image"
                    className={activeIndex === 2 ? "active" : ""}
                    loading="lazy"
                    srcSet={`${Nature} 400w, ${Nature} 800w, ${Nature} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                />
                <button
                    className="next-button"
                    onClick={() => setActiveIndex((activeIndex + 1) % 3)}
                >
                    Next
                </button>
            </div>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h2>Popup Window</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores voluptatem velit tempora minus ipsa libero, ut animi sed perspiciatis culpa ipsam similique quae. Voluptatibus illo quia similique! Vero, natus.</p>
                        <button className="popup-close-button" onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
