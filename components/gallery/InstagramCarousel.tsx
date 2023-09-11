
"use client";
import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface InstaCarouselProps{
    images: [
        {
        media_url: string,
        media_type: string,
        id: string
        },
    ]
}

interface ImageStyle{
  opacity: string,
  transition?: string
}

const InstagramCarousel: React.FC<InstaCarouselProps> = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [imageStyle, setImageStyle] = useState<ImageStyle>({
        opacity: '1',
    })

  
    const nextSlide = () => {
      setImageStyle({
        opacity: '0',
        transition: 'opacity .5s ease-in-out'
      })
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      setTimeout(() => {
        setImageStyle({...imageStyle})
      },500)
    };
  
    const prevSlide = () => {
      setImageStyle({
        opacity: '0',
        transition: 'opacity .5s ease-in-out'
      })
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      
      setTimeout(() => {
        setImageStyle({...imageStyle})
      },500)
    };
  
    const currentImage = images[currentIndex]; // Get the current image to display
  
    return (
      <div className="instagram-carousel relative">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <CaretLeft size={28} color="#2E5F9E" weight="bold" /> 
        </button>

        <img
            src={currentImage.media_url}
            alt={'Instagram Image'}
            loading="lazy"
            className="object-cover w-full h-[400px]"
            style={imageStyle}
        />
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <CaretRight size={28} color="#2E5F9E" weight="bold" /> 
        </button>
      </div>
    );
};

export default InstagramCarousel;
