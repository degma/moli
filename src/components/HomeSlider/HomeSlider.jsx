import Slider from "react-slick";
import Zonas from "../../assets/zonas.png"
import Chips from "../../assets/chips.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeSlider.css"


const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true

    };
    return (
        <div className="slider">
            <Slider {...settings}>
                <div>
                    <img src={Zonas} className="slider-imgs" alt="Banner compra online y recibilo en tu casa"/>
                </div>
                <div>
                    <img src={Chips} className="slider-imgs" alt="Banner proba los nuevos chips y pancitos integrales" />
                </div>

            </Slider>
        </div>
    )
}

export default HomeSlider