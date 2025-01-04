import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
    var settings = {

        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Slider {...settings}>
                <div>
                   <img className="rounded-2xl w-full object-cover h-[400px]" src="https://cdn.pixabay.com/photo/2024/02/22/03/05/information-8589031_640.png" alt=""/>
                </div>
                <div>
                <img className="rounded-2xl w-full object-cover h-[400px]" src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" alt=""/>
                </div>
                <div>
                <img className="rounded-2xl w-full object-cover h-[400px]" src="https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087393_640.jpg" alt=""/>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;