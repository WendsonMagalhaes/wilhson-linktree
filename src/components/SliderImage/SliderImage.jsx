import React, { useState, useEffect } from 'react';
import './SliderImage.css';

const SliderImage = ({ images }) => {
    const [selectedSlide, setSelectedSlide] = useState(1);

    // Função para alternar os slides automaticamente
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedSlide((prevIndex) =>
                prevIndex === images.length ? 1 : prevIndex + 1
            );
        }, 5000); // 5000ms = 5 segundos

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, [images.length]);

    const handleChangeSlide = (slideIndex) => {
        setSelectedSlide(slideIndex);
    };

    return (
        <div className="section-slider-image">
            <div className="container-slider-image">
                <div>
                    <div>
                        <div className="section-slider-image-input slider-height-padding">
                            {images.map((image, index) => (
                                <React.Fragment key={index}>
                                    <input
                                        className={`checkbox ${index === 0 ? 'frst' : index === 1 ? 'scnd' : index === 2 ? 'thrd' : 'foth'}`}
                                        type="radio"
                                        id={`slide-${index + 1}`}
                                        name="slider"
                                        checked={selectedSlide === index + 1}
                                        onChange={() => handleChangeSlide(index + 1)}
                                    />
                                    <label
                                        htmlFor={`slide-${index + 1}`}
                                        style={{
                                            backgroundImage: `url(${image})`
                                        }}
                                    ></label>
                                </React.Fragment>
                            ))}
                            <ul>
                                {images.map((image, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            opacity: selectedSlide === index + 1 ? 1 : 0,
                                            pointerEvents: selectedSlide === index + 1 ? 'auto' : 'none',
                                        }}
                                    >
                                        <img src={image} alt={`Image ${index + 1}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderImage;
