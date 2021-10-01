import * as React from 'react';

// Styles 
import '../assets/styles/components/Carousel.scss';

const Carousel: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return (
        <section className="carousel">
            <div className="carousel__container">
                { children }
            </div>
        </section>
    );
}

export default Carousel;