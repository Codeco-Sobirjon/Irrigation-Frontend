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

const NewsDetail = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        GetDataSimple(`/news/v1/news/details/${id}/`).then((res) => {
            setData(res);
            console.log(res);
        });
    }, []);
    return (
        <DetailLayout>
            <div className="w-full">
                <div className="rounded-md shadow-lg p-5 flex flex-col items-start gap-5 mb-5">
                    <p className="text-[#fe6803] text-[20px]">{data?.translations?.ru?.title}</p>
                    <div className="w-full flex flex-wrap justify-start items-center">
                        {data?.images_list?.map((i) => (
                            <img
                                src={i?.image}
                                alt=""
                                className="w-[200px] h-[200px] object-cover rounded-md"
                            />
                        ))}
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.translations?.ru?.description,
                        }}
                    />
                </div>
            </div>
        </DetailLayout>
    );
};

export default NewsDetail;
