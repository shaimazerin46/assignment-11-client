import Slider from "react-slick";


const Comments = () => {

    var settings = {
        infinite: true,
        autoplay: true,
        autoplayspeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-bold py-20">Our Clients Say</h3>
            <div className="background rounded-3xl mb-20">
                <Slider className="w-[700px] h-[300px] mx-auto pt-[150px] font-bold text-xl text-white" {...settings}>
                    <div>
                        <p>"The IT team provided exceptional support and resolved all our technical issues efficiently. Their expertise ensured minimal downtime, and they were always just a call away for assistance. Highly recommend their services!"</p>
                    </div>
                    <div>
                        <p>"We’ve been working with this IT service provider for years, and they consistently exceed expectations. Their proactive approach to identifying potential issues and resolving them before they become problems has been invaluable to our business operations"</p>
                    </div>
                    <div>
                        <p>
                        "The transition to our new IT infrastructure was seamless, thanks to their well-planned and professional execution. They made a complex process feel simple and stress-free"
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Comments;