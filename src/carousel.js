import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="p-4">
                    <div className="border border-[#d6dae0] p-8 rounded-[8px] bg-[#ffffff]">
                        <div className="flex items-center justify-start text-[gold] mb-5">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="text-[#60697b] text-[18px] font-medium leading-8 mb-5">Lorem ipsum dolor sit amet,  elit. Exercitationem, temporibus.</div>
                        <div className="text-[#343f52] text-[18px] font-bold  leading-[32px] ">prashant</div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="border border-[#d6dae0] p-8 rounded-[8px] bg-[#ffffff]">
                        <div className="flex items-center justify-start text-[gold] mb-5">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="text-[#60697b] text-[18px] font-medium leading-8 mb-5">Lorem ipsum dolor sit amet,  elit. Exercitationem, temporibus.</div>
                        <div className="text-[#343f52] text-[18px] font-bold  leading-[32px] ">Enola</div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="border border-[#d6dae0] p-8 rounded-[8px] bg-[#ffffff]">
                        <div className="flex items-center justify-start text-[gold] mb-5">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="text-[#60697b] text-[18px] font-medium leading-8 mb-5">Lorem ipsum dolor sit amet,  elit. Exercitationem, temporibus.</div>
                        <div className="text-[#343f52] text-[18px] font-bold  leading-[32px] ">Enola</div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="border border-[#d6dae0] p-8 rounded-[8px] bg-[#ffffff]">
                        <div className="flex items-center justify-start text-[gold] mb-5">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="text-[#60697b] text-[18px] font-medium leading-8 mb-5">Lorem ipsum dolor sit amet,  elit. Exercitationem, temporibus.</div>
                        <div className="text-[#343f52] text-[18px] font-bold  leading-[32px] ">Enola</div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="border border-[#d6dae0] p-8 rounded-[8px] bg-[#ffffff]">
                        <div className="flex items-center justify-start text-[gold] mb-5">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="text-[#60697b] text-[18px] font-medium leading-8 mb-5">Lorem ipsum dolor sit amet,  elit. Exercitationem, temporibus.</div>
                        <div className="text-[#343f52] text-[18px] font-bold  leading-[32px] ">Enola</div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="border border-[#d6dae0] p-8 rounded-[8px] bg-[#ffffff]">
                        <div className="flex items-center justify-start text-[gold] mb-5">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="text-[#60697b] text-[18px] font-medium leading-8 mb-5">Lorem ipsum dolor sit amet,  elit. Exercitationem, temporibus.</div>
                        <div className="text-[#343f52] text-[18px] font-bold  leading-[32px] ">Enola</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel
