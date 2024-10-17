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
                <div className="shadow-lg rounded-md p-5">
                    <p className="text-[#fe6803] text-[24px] mb-10">
                        {data[0]?.translations?.ru?.title}
                    </p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data[0]?.translations?.ru?.description,
                        }}
                    />
                </div>
            </div>
        </DetailLayout>
    );
};

export default MainDetail;
