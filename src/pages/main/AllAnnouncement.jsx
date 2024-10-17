import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Globe from "../../assets/images/globe.png";
import { FaArrowRight } from "react-icons/fa6";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import "./../../index.css";
import { Link } from "react-router-dom";
import { GetDataSimple } from "../../services";
import PaginationCard from "../../components/Pagination";

const AllAnnouncement = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, [language]);

    useEffect(() => {
        GetDataSimple(`main/part/v1/announcement?page=${currentPage}`).then((data) => {
            setData(data?.results);
            const itemsPerPage = data.results.length; // or a fixed value if it's known, e.g., 10
            const totalPages = Math.ceil(data.count / itemsPerPage);
            setTotalPages(totalPages);
        });
    }, [currentPage]);

    const handleOpen = (img, title) => {
        setOpen(!open);
        setImg(img);
        setTitle(title);
    };

    return (
        <div className="container mx-auto mb-20 px-5 md:px-0">
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>
                    {language === "uz"
                        ? "Shu e'lon haqida batafsil"
                        : language === "ru"
                        ? "Подробно об этом объявлении"
                        : language === "en"
                        ? "More about this announcement"
                        : "Shu e'lon haqida batafsil"}
                </DialogHeader>
                <DialogBody className="h-[400px] overflow-y-scroll">
                    <img
                        src={img}
                        className="w-[250px] h-[250px] object-cover"
                        alt=""
                    />
                    <p>{title}</p>
                </DialogBody>
                <DialogFooter>
                    <Button
                        className="outline-none"
                        variant="gradient"
                        color="red"
                        onClick={handleOpen}
                    >
                        <span>
                            {language === "uz"
                                ? "Orqaga"
                                : language === "ru"
                                ? "Назад"
                                : language === "en"
                                ? "Back"
                                : "Orqaga"}
                        </span>
                    </Button>
                </DialogFooter>
            </Dialog>
            <div className="flex w-full justify-between py-10 items-center">
                <h1 className="text-[#fe6803] ">
                    {language === "uz"
                        ? "E'lonlar"
                        : language === "ru"
                        ? "Объявления"
                        : language === "en"
                        ? "Announcements"
                        : "E'lonlar"}
                </h1>
            </div>
            <div className="flex flex-wrap justify-between items-center py-10">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className="card relative w-full md:w-[32%] h-[300px] rounded-[10px] bg-gray-100 flex flex-col cursor-pointer mb-6 shadow-lg"
                    >
                        <img
                            className="absolute rounded-[10px] z-10  h-full w-full"
                            src={item.logo}
                            alt=""
                        />
                        <p className="absolute z-20 top-[190px]  px-5 py-2 rounded-r-md bg-white">
                            {language === "uz"
                                ? item?.translations?.uz?.name
                                : language === "ru"
                                ? item?.translations?.ru?.name
                                : language === "en"
                                ? item?.translations?.en?.name
                                : item?.translations?.uz?.name}
                        </p>
                        <div
                            onClick={() =>
                                handleOpen(
                                    item.logo,
                                    language === "uz"
                                        ? item?.translations?.uz?.name
                                        : language === "ru"
                                        ? item?.translations?.ru?.name
                                        : language === "en"
                                        ? item?.translations?.en?.name
                                        : item?.translations?.uz?.name
                                )
                            }
                            className="absolute z-20 top-[240px] right-[30px] flex items-center gap-2 text-[#fe6803]"
                        >
                            {language === "uz"
                                ? "Batafsil"
                                : language === "ru"
                                ? "Подробнее"
                                : language === "en"
                                ? "More"
                                : "Batafsil"}
                            <FaArrowRight />
                        </div>
                    </div>
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

export default AllAnnouncement;
