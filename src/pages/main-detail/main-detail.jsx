import React, { useEffect, useState } from "react";
import DetailLayout from "../../Layout/DetailLayout";
import { FaBookBookmark, FaUserTie } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { GetDataSimple } from "../../services";
import { useParams } from "react-router-dom";

const MainDetail = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        GetDataSimple(
            `menu/v1/category/${id}/?is_news=true&is_staff=true&is_contact=true`
        ).then((res) => {
            setData(res), console.log(res);
        });
    }, []);
    return (
        <DetailLayout>
            <div className="w-full">
                <div className="rounded-md shadow-lg p-5 flex flex-col md:flex-row items-start md:items-center gap-5 mb-5">
                    <img
                        src={data[0]?.image}
                        className="w-full md:w-[200px] h-[290px] object-cover rounded-md shadow-md"
                        alt="no any img"
                    />
                    <div className="">
                        <p className="text-[30px] text-black mb-5">
                            {data[0]?.position?.translations?.ru?.name}
                        </p>
                        <p className="flex items-center gap-2 text-[20px] text-primary mb-2">
                            <FaUserTie size={20} className="text-blue-500" />
                            {data[0]?.translations?.ru?.full_name}
                        </p>

                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <IoTime size={20} className="text-blue-500" />
                            {data[0]?.translations?.ru?.work_date}
                        </p>
                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <FaBookBookmark
                                size={20}
                                className="text-blue-500"
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data[0]?.translations?.ru
                                        ?.scientific_activity,
                                }}
                            />
                        </p>
                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <GiRotaryPhone
                                size={20}
                                className="text-blue-500"
                            />
                            {data[0]?.translations?.ru?.comapany_phone}
                        </p>
                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <FaLocationDot
                                size={20}
                                className="text-blue-500"
                            />
                            {data[0]?.translations?.ru?.adress}
                        </p>
                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <MdAttachEmail
                                size={20}
                                className="text-blue-500"
                            />
                            {data[0]?.translations?.ru?.email}
                        </p>
                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <FaSquarePhone
                                size={20}
                                className="text-blue-500"
                            />
                            {data[0]?.translations?.ru?.private_phone}
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded-md p-5">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data[0]?.translations?.ru?.work_activity,
                        }}
                    />
                </div>
            </div>
        </DetailLayout>
    );
};

export default MainDetail;
