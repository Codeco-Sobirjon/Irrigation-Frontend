import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GetDataSimple } from "../../services";

const Videos = () => {
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, []);

    useEffect(() => {
        GetDataSimple("main/part/v1/videos").then((data) => {
            setData(data);
        });
    }, []);

    // Function to convert YouTube watch URL to embed URL
    function changeUrl(url) {
        const isVideo = url.indexOf("watch") > 0;
        const isShort = url.indexOf("short") > 0;
        let readyUrl = url;

        if (isVideo) {
            const index = url.indexOf("&");
            if (index > 0) {
                const a = url.slice(0, index);
                return (readyUrl = a.replace(
                    "youtube.com/watch?v=",
                    "youtube.com/embed/"
                ));
            } else {
                return (readyUrl = url.replace(
                    "youtube.com/watch?v=",
                    "youtube.com/embed/"
                ));
            }
        } else if (isShort) {
            const index = url.indexOf("&");
            if (index > 0) {
                const a = url.slice(0, index);
                return (readyUrl = a.replace(
                    "youtube.com/shorts",
                    "youtube.com/embed"
                ));
            } else {
                return (readyUrl = url.replace(
                    "youtube.com/shorts",
                    "youtube.com/embed"
                ));
            }
        }

        return readyUrl;
    }

    return (
        <div className="container mx-auto mb-10 px-5 md:px-0">
            <div className="container">
                <h1 className="text-3xl lg:text-4xl text-secondary text-[#fe6803] mb-10">
                    {language === "uz"
                        ? "Videolar"
                        : language === "ru"
                        ? "Видеоролики"
                        : language === "en"
                        ? "Videos"
                        : "Videolar"}
                </h1>
            </div>
            <div className="container relative">
                <Swiper
                    navigation={{
                        prevEl: ".custom-prev-video",
                        nextEl: ".custom-next-video",
                    }}
                    modules={[Navigation]}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        568: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="videoslider"
                >
                    {data.map((item) => (
                        <SwiperSlide
                            data-aos="zoom-in"
                            key={item.id}
                            className="flex items-center justify-center"
                        >
                            <iframe
                                width="1053"
                                height="200"
                                src={changeUrl(item?.url_video)}
                                title="Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="custom-prev-video absolute z-50 top-20 transform -translate-x-1/2 bg-[#fe6803] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                    <FaArrowLeft color="white" />
                </button>
                <button className="custom-next-video absolute right-0 z-50 top-20 transform translate-x-1/2 bg-[#fe6803] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                    <FaArrowRight color="white" />
                </button>
            </div>
        </div>
    );
};

export default Videos;
