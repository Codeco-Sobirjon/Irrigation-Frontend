import React, { useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { GetDataSimple } from "../../services";

const MainCarousel = () => {
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, []);

    useEffect(() => {
        GetDataSimple("main/part/v1/sliders").then((data) => {
            setData(data);
        });
    }, []);
    return (
        <div>
            <Carousel
                loop={true}
                className="h-[700px]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? "w-8 bg-white"
                                        : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {data?.map((item, index) => (
                    <div className="relative w-full h-full">
                        <div className="bg-black w-full h-full absolute">
                            <img
                                src={item?.slider_image}
                                alt="image 1"
                                className="absolute h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-full h-full absolute flex justify-center items-center ">
                            <h1 className="absolute z-[999] text-center text-[#fe6803]  w-4/6 md:w-5/6">
                                {language === "uz"
                                    ? item?.translations?.uz?.name
                                    : language === "ru"
                                    ? item?.translations?.ru?.name
                                    : language === "en"
                                    ? item?.translations?.en?.name
                                    : item?.translations?.uz?.name}
                            </h1>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MainCarousel;
