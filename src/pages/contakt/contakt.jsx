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

const Contakt = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [language, setLanguage] = useState(null);
    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, [language]);

    useEffect(() => {
        GetDataSimple(
            `menu/v1/category/${id}/?is_news=true&is_staff=true&is_contact=true`
        ).then((res) => {
            setData(res);
        });
    }, []);

    return (
        <DetailLayout>
            <div className="w-full">
                <div className="rounded-md shadow-lg p-5 flex items-center gap-5 mb-5">
                    <div>
                        <p className="text-[#fe6803] text-[30px] mb-10">
                            {language === "uz"
                                ? "Biz bilan bog'laning"
                                : language === "en"
                                ? "Contact us"
                                : language === "ru"
                                ? "Biz bilan bog'laning"
                                : "Biz bilan bog'laning"}
                        </p>
                        <p className="flex items-center gap-2 text-[18px] text-primary mb-2">
                            <FaBookBookmark
                                size={20}
                                className="text-blue-500"
                            />
                            {data[0]?.translations?.ru?.faks}
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
                    </div>
                </div>
            </div>
        </DetailLayout>
    );
};

export default Contakt;
