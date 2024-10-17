import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import { GetDataSimple } from "../../services";

const SubCarousel = () => {
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, []);

    useEffect(() => {
        GetDataSimple("main/part/v1/partners").then((data) => {
            setData(data);
        });
    }, []);
    return (
        <div className="bg-primary">
            <div className="container mx-auto bg-primary">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay config
                    modules={[Pagination, Autoplay]} // Include Autoplay and Pagination
                    className="mySwiper bg-primary"
                    breakpoints={{
                        // when window width is >= 1024px (desktop)
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        // when window width is >= 768px (tablet)
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is < 768px (mobile)
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {data?.map((item, index) => (
                        <SwiperSlide className="py-5 bg-primary">
                            <div className="h-[80px] bg-primary w-full border-r border-dotted border-white px-10 flex justify-between items-center gap-3">
                                <div className="w-[90px] h-[80px] object-cover">
                                    <img
                                        src={item?.logo}
                                        className="w-full h-full object-contain"
                                        alt=""
                                    />
                                </div>
                                <div className="w-[90%]">
                                    <p className="text-white text-[18px] text-center">
                                        {language === "uz"
                                            ? item?.translations?.uz?.name
                                            : language === "ru"
                                            ? item?.translations?.ru?.name
                                            : language === "en"
                                            ? item?.translations?.en?.name
                                            : item?.translations?.uz?.name}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SubCarousel;
