import React, {useRef} from 'react'
import { Carousel } from 'antd';
import exportImg from '../exportAssets/imageExport'

export default function Carousels() {

    const carouselRef = useRef(null);

    const goToSlide = (slideNumber, dontAnimate) => {
        carouselRef.current.goTo(slideNumber, dontAnimate);
        setSlideNum(slideNumber);
    };
    
    const [slideNum, setSlideNum] = React.useState(0);



    return (
        <div className='carousel-container'>

            <Carousel autoplay={false} dots={true} ref={carouselRef}>
                <div className='image-container'>
                    <img src={exportImg.image2} alt='' className='carousel-Image' />
                    <h2 className='image-describe'>3UM Open’s $50M Series A, Eyes Token Sale</h2>
                </div>

                <div className='image-container'>
                    <img src={exportImg.image2} alt='' className='carousel-Image' />
                    <h2 className='image-describe'>What’s Happening Locally: Must-See Community Events & New Developments</h2>
                </div>

                <div className='image-container'>
                    <img src={exportImg.image2} alt='' className='carousel-Image' />
                    <h2 className='image-describe'>What’s Happening Locally: Must-See Community Events & New Developments</h2>
                </div>


            </Carousel>
            <div className='jump-button'>
                <div onClick={() => goToSlide(0, false)} style={{cursor: 'pointer',  opacity: slideNum===0? 1 : 0.5}}>Inside Our World</div>
                <div onClick={() => goToSlide(1, false)} style={{cursor: 'pointer',  opacity: slideNum===1? 1 : 0.5}}>Around Our Community</div>
                <div onClick={() => goToSlide(2, false)} style={{cursor: 'pointer',  opacity: slideNum===2? 1 : 0.5}}>The Academic Ledger</div>
            </div>
        </div>
    )
}
