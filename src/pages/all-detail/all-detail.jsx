import React, { useEffect, useState } from "react";
import DetailLayout from "../../Layout/DetailLayout";
import { FaUserTie } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import "../../index.css";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import { GetDataSimple } from "../../services";
import { FaEye } from "react-icons/fa";
import PaginationCard from "../../components/Pagination";

const AllDetail = () => {
    const [active, setActive] = useState(1);
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        GetDataSimple(
            `menu/v1/category/${id}/?is_news=true&is_staff=true&is_contact=true`
        ).then((res) => {
            const itemsPerPage = res.results.length; // or a fixed value if it's known, e.g., 10
            const totalPages = Math.ceil(res.count / itemsPerPage);
            setTotalPages(totalPages);
            setData(res.results);
        });
    }, []);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    return (
        <div className="container mx-auto px-5 md:px-0">
            <div className="w-full py-10">
                <p className="text-[40px] text-[#fe6803] mb-10">Barchasi</p>
                <div className="flex flex-wrap items-center mb-10">
                    {data.map((item) => (
                        <Link
                            to={`/news-detail/${item.id}`}
                            className="w-full md:w-1/4 p-2 h-[250px]"
                        >
                            <div className="w-full h-full rounded-md relative new-item">
                                <div className="w-full h-full absolute  z-[999] flex flex-col justify-end items-start p-5">
                                    <div className="w-full h-full absolute   flex flex-col justify-end items-start ">
                                        <p className="text-white text-[10px] md:text-[14px] flex  items-center gap-2">
                                            {item?.created_at} <FaEye />{" "}
                                            {item?.viewers}
                                        </p>
                                        <p className="text-white text-[12px] md:text-[18px]">
                                            {item?.translations?.ru?.title}
                                        </p>
                                    </div>
                                    <p className="text-white text-[12px] md:text-[18px]">
                                        {item?.translations?.ru?.title}
                                    </p>
                                </div>
                                <img
                                    className="w-full h-full object-cover rounded-md absolute img"
                                    src={item?.images_list[0]?.image}
                                    alt=""
                                />
                            </div>
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
        </div>
    );
};

export default AllDetail;
