import React, { useEffect, useState } from "react";
import { GetDataSimple } from "../../services";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import PaginationCard from "../../components/Pagination";

const AllNews = () => {
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, []);

    useEffect(() => {
        GetDataSimple(
            `news/v1/?is_four_menu_news=true&page=${currentPage}`
        ).then((res) => {
            const itemsPerPage = res.results.length; // or a fixed value if it's known, e.g., 10
            const totalPages = Math.ceil(res.count / itemsPerPage);
            setTotalPages(totalPages);
            setData(res);
        });
    }, [currentPage]);

    const getTitle = (translations) => {
        if (language === "uz") return translations?.uz?.title;
        if (language === "ru") return translations?.ru?.title;
        if (language === "en") return translations?.en?.title;
        return translations?.uz?.title;
    };

    return (
        <div className="container mx-auto px-5 md:px-0 py-10">
            <h1 className="text-[30px] text-[#fe6803] mb-10">
                {language === "uz"
                    ? "Barcha yangiliklar"
                    : language === "ru"
                    ? "Все новости"
                    : language === "en"
                    ? "All news"
                    : "Barcha yangiliklar"}
            </h1>
            <div className="flex flex-wrap justify-start gap-3">
                {data?.results?.map((item, index) => (
                    <Link
                        to={`/news-detail/${item.id}`}
                        key={item.id}
                        className="w-full md:w-[24%] h-[250px] bg-red-900 rounded-md relative new-item p"
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
            <div className="w-full flex justify-center mt-10">
                <PaginationCard
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default AllNews;
