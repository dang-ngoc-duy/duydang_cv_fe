import { ReactNode } from "react"

export interface ICarouselProps {
    variant: 'fill' | 'nofill';
    itemList: ReactNode[];
}

const Carousel: React.FC<ICarouselProps> = (props) => {
    const { variant, itemList } = props;

    const renderFillCarousel = () => (
        <div className="swiper-container js-carousel-review">
            <div className="swiper-wrapper">
                {itemList.map((item, idx) => (
                    <div key={idx} className="swiper-slide review-item">
                        {item}
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
    const renderNoFillCarousel = () => (
        <div className="swiper-container js-carousel-clients">
            <div className="swiper-wrapper">
                {itemList.map((item, idx) => (
                    <div key={idx} className="swiper-slide">
                        {item}
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );

    return (<>{(variant === 'fill') ? renderFillCarousel() : renderNoFillCarousel()}</>)
}

export default Carousel
