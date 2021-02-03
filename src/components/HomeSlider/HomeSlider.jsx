import { useHistory } from "react-router-dom"
import Slider from "react-slick";
import Zonas from "../../assets/zonas.png"
import Chips from "../../assets/chips.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeSlider.css"


const HomeSlider = () => {
    const history = useHistory();
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
                    <img src={Zonas} className="slider-imgs" />
                </div>
                <div>
                    <img src={Chips} className="slider-imgs" />
                </div>

            </Slider>
        </div>
    )
}

export default HomeSlider