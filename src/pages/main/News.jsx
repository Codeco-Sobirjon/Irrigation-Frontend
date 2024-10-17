import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import icons from react-icons (FontAwesome in this case)
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import "./../../index.css";
import { GetDataSimple } from "../../services";
import { Link } from "react-router-dom";

const News = () => {
    const [datamain, setDatamain] = useState([]);
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, [language]);

    useEffect(() => {
        GetDataSimple("news/v1/").then((data) => {
            setDatamain(data);
        });
    }, []);

    useEffect(() => {
        GetDataSimple("news/v1/?is_four_menu_news=true").then((data) => {
            setData(data);
        });
    }, []);

    const getTitle = (translations) => {
        if (language === "uz") return translations?.uz?.title;
        if (language === "ru") return translations?.ru?.title;
        if (language === "en") return translations?.en?.title;
        return translations?.uz?.title;
    };

    return (
        <div className="container mx-auto mb-20">
            <div className="flex px-5 md:px-0 w-full justify-between py-10 items-center">
                <p className="text-[#fe6803] font-bold">
                    <h1>
                        {language === "uz"
                            ? "Yangiliklar"
                            : language === "ru"
                            ? "Новости"
                            : language === "en"
                            ? "News"
                            : "Yangiliklar"}
                    </h1>
                </p>
                <Link to={"/all-news"} className="text-primary ">
                    <h1>
                        {language === "uz"
                            ? "Barcha yangiliklar"
                            : language === "ru"
                            ? "Все новости"
                            : language === "en"
                            ? "All news"
                            : "Barcha yangiliklar"}
                    </h1>
                </Link>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
                <div
                    data-aos="fade-up"
                    className="container mx-auto relative px-5 w-full md:w-1/2"
                >
                    <Swiper
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        modules={[Pagination, Navigation]}
                        className="newsSwiper rounded-md"
                    >
                        {datamain?.results?.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <Link
                                    to={`/news-detail/${item.id}`}
                                    className="w-full h-full rounded-md relative new-item"
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-md absolute img"
                                        src={item?.images_list[0]?.image}
                                        alt=""
                                    />
                                    <div className="w-full h-full absolute shtor  flex flex-col justify-end items-start p-5">
                                        <p className="text-white text-[10px] md:text-[14px] flex items-center gap-2">
                                            {item?.created_at} <FaEye />{" "}
                                            {item?.viewers}
                                        </p>
                                        <p className="text-white text-[12px] md:text-[18px]">
                                            {getTitle(item?.translations)}
                                        </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons with React Icons */}
                    <div className="custom-prev absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-2 z-[999] bg-[#fe6803] text-white rounded-md cursor-pointer">
                        <FaArrowLeft size={15} />
                    </div>
                    <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-2 z-[999] bg-[#fe6803] text-white rounded-md cursor-pointer">
                        <FaArrowRight size={15} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-[500px] px-5 md:px-0 flex flex-wrap justify-between items-center">
                    {data?.results?.map((item, index) => (
                        <Link
                            data-aos="zoom-in"
                            to={`/news-detail/${item.id}`}
                            key={item.id}
                            className="w-[49%] h-[47%] bg-red-900 rounded-md relative new-item"
                        >
                            <div className="w-full h-full absolute shtor z-[999] flex flex-col justify-end items-start p-5">
                                <p className="text-white text-[10px] md:text-[14px] flex items-center gap-2">
                                    {item?.created_at} <FaEye /> {item?.viewers}
                                </p>
                                <p className="text-white text-[12px] md:text-[18px]">
                                    {getTitle(item?.translations)}
                                </p>
                            </div>
                            <img
                                className="w-full h-full object-cover rounded-md absolute img"
                                src={item?.images_list[0]?.image}
                                alt=""
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
