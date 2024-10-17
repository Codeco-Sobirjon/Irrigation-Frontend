import React, { useState, useEffect } from "react";
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { MdKeyboardArrowRight } from "react-icons/md";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

import { GetDataSimple } from "../services";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";

const Header = () => {
    const [headerCategory, setHeaderCategory] = useState([]);
    const [dataheader, setDataheader] = useState([]);
    const [data, setData] = useState([]);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, [language]);

    useEffect(() => {
        GetDataSimple("menu/v1/categories").then((data) => {
            setDataheader(data);
            console.log(data);
        });
    }, []);
    useEffect(() => {
        GetDataSimple("main/part/v1/about").then((data) => {
            setData(data);
        });
    }, []);

    const getTitle = (translations) => {
        if (language === "uz") return translations?.uz?.name;
        if (language === "ru") return translations?.ru?.name;
        if (language === "en") return translations?.en?.name;
        return translations?.uz?.title;
    };

    return (
        <header>
            <div className="container mx-auto text-center mt-5 ">
                <h2 className="text-primary  font-semibold">
                    {language === "uz"
                        ? data[0]?.translations?.uz?.name
                        : language === "ru"
                        ? data[0]?.translations?.ru?.name
                        : language === "en"
                        ? data[0]?.translations?.en?.name
                        : data[0]?.translations?.uz?.name}
                </h2>
            </div>
            <nav className="container gap-5 md:gap-0 mx-auto flex px-5 md:px-0 justify-between items-center py-5">
                <Link to={"/"} className="w-2/4">
                    <img
                        src={data[0]?.logo}
                        alt="Logo"
                        className="h-24 object-contain"
                    />
                </Link>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex items-center gap-2">
                        <HiOutlinePhoneArrowDownLeft className="text-2xl text-primary" />
                        <div>
                            <h3 className="uppercase font-semibold text-primary">
                                {language === "uz"
                                    ? "Telefon raqam"
                                    : language === "ru"
                                    ? "Номер телефона"
                                    : language === "en"
                                    ? "Phone number"
                                    : "Telefon raqam"}
                            </h3>
                            <a
                                href="tel:+998 (65) 228-94-24"
                                className="text-sm text-primary"
                            >
                                +998 (65) 228-94-24
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <HiOutlinePhoneArrowDownLeft className="text-2xl text-primary" />
                        <div>
                            <h3 className="uppercase  font-semibold text-primary">
                                {language === "uz"
                                    ? "Elektron pochta"
                                    : language === "ru"
                                    ? "Электронная почта"
                                    : language === "en"
                                    ? "E-mail"
                                    : "Elektron pochta"}
                            </h3>
                            <a
                                href="mailto:tiimbfuz@umail.uz"
                                className="text-sm text-primary"
                            >
                                tiimbfuz@umail.uz
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                        <HiOutlinePhoneArrowDownLeft className="text-2xl" />
                        <div>
                            <h3 className="uppercase font-semibold text-primary">
                                {language === "uz"
                                    ? "Manzil"
                                    : language === "ru"
                                    ? "Адрес"
                                    : language === "en"
                                    ? "Address"
                                    : "Manzil"}
                            </h3>
                            <a href="#" className="text-sm text-primary">
                                {language === "uz"
                                    ? "Buxoro shahri, Gazli shoh ko‘chasi 32-uy"
                                    : language === "ru"
                                    ? "Бухара район, Газли шох квартира 32-а"
                                    : language === "en"
                                    ? "Buxoro district, Gazli st. 32-uy"
                                    : "Buxoro shahri, Gazli shoh ko‘chasi 32-uy"}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bg-primary text-white py-3">
                <ul className="container mx-auto flex justify-start gap-8 w-full overflow-x-scroll lg:overflow-visible">
                    <li>
                        <Link to="/">
                            {language === "uz"
                                ? "Bosh sahifa"
                                : language === "en"
                                ? "Home"
                                : language === "ru"
                                ? "Главная"
                                : "Bosh sahifa"}
                        </Link>
                    </li>

                    {dataheader.length > 0 &&
                        dataheader.map((item) => (
                            <Menu
                                menuButton={
                                    <MenuButton>
                                        {getTitle(item?.translations)}
                                    </MenuButton>
                                }
                            >
                                {item?.subcategories?.map((i) => (
                                    <>
                                        {i.tertiary_categories.length > 0 ? (
                                            <SubMenu
                                                label={
                                                    i?.translations?.ru?.name
                                                }
                                            >
                                                {i.tertiary_categories?.map(
                                                    (titem) => (
                                                        <MenuItem>
                                                            <Link
                                                                to={`${
                                                                    titem.is_staff
                                                                        ? "main-detail/"
                                                                        : titem.is_news
                                                                        ? "all-detail/"
                                                                        : titem.is_contact
                                                                        ? "contact/"
                                                                        : !titem.is_contact &&
                                                                          !titem.is_news &&
                                                                          !titem.is_staff &&
                                                                          "template-detail/"
                                                                }${titem.id}`}
                                                            >
                                                                {
                                                                    titem
                                                                        ?.translations
                                                                        ?.ru
                                                                        ?.name
                                                                }
                                                            </Link>
                                                        </MenuItem>
                                                    )
                                                )}
                                            </SubMenu>
                                        ) : (
                                            <MenuItem>
                                                <Link
                                                    to={`${
                                                        i.is_staff
                                                            ? "main-detail/"
                                                            : i.is_news
                                                            ? "all-detail/"
                                                            : i.is_contact
                                                            ? "contact/"
                                                            : !i.is_contact &&
                                                              !i.is_news &&
                                                              !i.is_staff &&
                                                              "template-detail/"
                                                    }${i.id}`}
                                                >
                                                    {i?.translations?.ru?.name}
                                                </Link>
                                            </MenuItem>
                                        )}
                                    </>
                                ))}
                            </Menu>
                        ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;

{
    /* <Link
className="outline-none hover:bg-primary hover:text-white p-2 rounded-sm w-full "
to={`${
    i.is_staff
        ? "main-detail/"
        : i.is_news
        ? "all-detail/"
        : i.is_contact
        ? "contact/"
        : !i.is_contact &&
          !i.is_news &&
          !i.is_staff &&
          "template-detail/"
}${i.id}`}
>
{
    i.translations.ru
        ?.name
}
</Link> */
}
