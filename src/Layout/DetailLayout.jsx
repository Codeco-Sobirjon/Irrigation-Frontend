import React from "react";

const DetailLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row container mx-auto gap-5  py-10 px-5 md:px-0">
            <div className="w-full md:w-[70%]">{children}</div>
            <div className="w-full md:w-[30%]">
                <div className="w-full rounded-md shadow-md border border-gray-100 p-5">
                    <p className="text-[24px] text-primary mb-4">Tuzilma:</p>
                    <p className="text-[18px] px-3 mb-3 hover:text-[#fe6803]">
                        Rahbariyat
                    </p>
                    <p className="text-[18px] px-3 mb-3 hover:text-[#fe6803]">
                        Fakultetlar
                    </p>
                    <p className="text-[18px] px-3 mb-3 hover:text-[#fe6803]">
                        Kafedralar
                    </p>
                    <p className="text-[18px] px-3 mb-3 hover:text-[#fe6803]">
                        Markaz va bo'limlar
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailLayout;
