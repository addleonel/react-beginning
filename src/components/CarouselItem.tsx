import * as React from 'react';

// Styles
import '../assets/styles/components/CarouselItem.scss';

// Static images
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';


interface Props {
  cover?: string;
  title?: string;
  year?: number;
  contentRating?: string;
  duration?: number;
}

const CarouselItem: React.FC<Props> = ({ cover, title, year, contentRating, duration }) => {
    return (
      <div className="carousel-item">
        <img className="carousel-item__img" src={ cover } alt={ title }  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={ playIcon } alt="Play Icon" /> 
            <img className="carousel-item__details--img" src={ plusIcon } alt="Plus Icon" /> 
          </div>
          <p className="carousel-item__details--title">{ title }</p>
          <p className="carousel-item__details--subtitle">
            `${year} ${contentRating} ${duration}`
          </p>
        </div>
      </div>
    );
}


export default CarouselItem;