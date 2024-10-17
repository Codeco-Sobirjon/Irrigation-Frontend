import React, { useEffect, useState } from "react";
import { GetDataSimple } from "../../services";

const Prizes = () => {
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, []);

    useEffect(() => {
        GetDataSimple("news/v1/achievement/quality").then((data) => {
            setData(data);
        });
    }, []);

    return (
        <div className="container mx-auto mb-20 px-5 md:px-0">
            <h1 className="text-[#fe6803] text-[24px] md:text-[40px] text-start">
                {language === "uz"
                    ? "Yutuqlar"
                    : language === "ru"
                    ? "Достижения"
                    : language === "en"
                    ? "Achievements"
                    : "Yutuqlar"}
            </h1>
            {data?.map((item, index) => (
                <React.Fragment key={index}>
                    <h1
                        data-aos="zoom-in"
                        className="text-primary text-[24px] md:text-[40px] text-center mb-5"
                    >
                        {item?.translations?.[language]?.name ||
                            item?.translations?.uz?.name}
                    </h1>
                    <div className="w-full flex flex-wrap justify-center mb-5">
                        {item?.qualities?.map((i) => (
                            <div
                                data-aos="zoom-in"
                                key={i.level}
                                className="w-full md:w-1/4 h-[250px] p-3 flex flex-col justify-center items-center"
                            >
                                <h1
                                    className={`text-[70px] ${
                                        index === 0
                                            ? "text-[#fe6803]"
                                            : index === 1
                                            ? "text-primary"
                                            : index === 2
                                            ? "text-blue-400"
                                            : index === 3
                                            ? "text-red-400"
                                            : index === 4
                                            ? "text-green-400"
                                            : ""
                                    }  font-bold`}
                                >
                                    {i?.level}
                                </h1>
                                <h3 className="text-center text-[20px]">
                                    {i?.translations?.[language]?.title ||
                                        i?.translations?.uz?.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Prizes;
