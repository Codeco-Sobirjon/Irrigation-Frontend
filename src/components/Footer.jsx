import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faTelegram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Screen1 from "../assets/images/screenshot1.png";
import Screen2 from "../assets/images/screenshot2.png";
import Screen3 from "../assets/images/screenshot3.png";

const Footer = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [lang, setLang] = useState("uz");
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }
    }, [language]);

    const sendComment = (e) => {
        e.preventDefault();
        // Handle comment submission logic
    };

    return (
        <footer className="bg-primary w-full py-12 px-5 md:px-0">
            <div className="container mx-auto">
                <p className="text-[#fe6803] text-[24px] md:text-[40px] mb-5">
                    {language === "uz"
                        ? "Bog'lanish"
                        : language === "ru"
                        ? "Связь"
                        : language === "en"
                        ? "Contact"
                        : "Bog'lanish"}
                </p>
                <div className="flex flex-col md:flex-row justify-between items-start gap-3 border-b border-blue-800 mb-20">
                    <div className="w-1/2 md:w-[25%]">
                        <p className=" text-[10px] md:text-[18px] mb-5 text-[#fe6803] font-bold">
                            {language === "uz"
                                ? "Manzil:"
                                : language === "ru"
                                ? "Адрес:"
                                : language === "en"
                                ? "Adres:"
                                : "Manzil:"}
                        </p>
                        <p className="text-white text-[8px] md:text-[14px] mb-5 font-thin">
                            {language === "uz" ? (
                                <>
                                    <span className="text-[10px] md:text-[16px]">
                                        «Sherbudin» Savdo majmuasi.
                                        Transportlar: 72, 236-avtobuslar
                                        yo`nalish taksilari. Buxoro shahri,
                                        Gazli shoh ko‘chasi 32-uy
                                    </span>
                                </>
                            ) : language === "ru" ? (
                                <>
                                    <span className="text-[10px] md:text-[16px]">
                                        Торговый комплекс «Шербудин». Транспорт:
                                        72, 236 автобусов, маршрутные такси.
                                        Город Бухара, улица Газли шох, дом 32
                                    </span>
                                </>
                            ) : language === "en" ? (
                                <>
                                    <span className="text-[10px] md:text-[16px]">
                                        "Sherbudin" Trade Complex. Transport:
                                        72, 236 buses, route taxis. Bukhara
                                        city, Gazli Shoh street, house 32
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="text-[10px] md:text-[16px]">
                                        «Sherbudin» Savdo majmuasi.
                                        Transportlar: 72, 236-avtobuslar
                                        yo`nalish taksilari. Buxoro shahri,
                                        Gazli shoh ko‘chasi 32-uy
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                    <div className="w-1/2 md:w-[30%] flex justify-between">
                        <div className="w-1/2">
                            <p className="text-[10px] md:text-[18px] mb-5 text-[#fe6803] font-bold">
                                {language === "uz"
                                    ? "Telefon:"
                                    : language === "ru"
                                    ? "Телефон:"
                                    : language === "en"
                                    ? "Phone:"
                                    : "Telefon:"}
                            </p>
                            <a
                                onClick={() =>
                                    alert(
                                        language === "uz"
                                            ? "shu raqamga qo'ng'iroq qiling"
                                            : language === "ru"
                                            ? "позвоните на этот номер"
                                            : language === "en"
                                            ? "please call this number"
                                            : "shu raqamga qo'ng'iroq qiling"
                                    )
                                }
                                className="text-white text-[8px] md:text-[16px] mb-5"
                            >
                                +998 (65) 228-94-24
                            </a>
                        </div>
                        <div className="w-1/2">
                            <p className="text-[10px] md:text-[18px] mb-5 text-[#fe6803] font-bold">
                                {language === "uz"
                                    ? "Faks:"
                                    : language === "ru"
                                    ? "Факс:"
                                    : language === "en"
                                    ? "Fax:"
                                    : "Faks:"}
                            </p>
                            <a className="text-white text-[8px] md:text-[16px] mb-5">
                                {language === "uz"
                                    ? "Faks:0(365) 228-94-24"
                                    : language === "ru"
                                    ? "Факс: 0(365) 228-94-24"
                                    : language === "en"
                                    ? "Fax: 0(365) 228-94-24"
                                    : "Faks: 0(365) 228-94-24"}
                            </a>
                        </div>
                    </div>

                    <div className="w-1/2 md:w-[25%]">
                        <p className="text-[10px] md:text-[18px] mb-5 text-[#fe6803] font-bold">
                            {language === "uz"
                                ? "Email:"
                                : language === "ru"
                                ? "Эл. адрес:"
                                : language === "en"
                                ? "Email:"
                                : "Email:"}
                        </p>
                        <p className="text-white text-[8px] md:text-[14px] mb-5">
                            tiimbfuz@umail.uz, buxtimi@mail.ru, info@tiiamebb.uz
                        </p>
                    </div>
                    <div className="w-full md:w-[15%]">
                        <p className="text-[10px] md:text-[18px] mb-5 text-[#fe6803] font-bold">
                            {language === "uz"
                                ? "Ijtimoiy tarmoqlar:"
                                : language === "ru"
                                ? "Социальные сети:"
                                : language === "en"
                                ? "Social networks:"
                                : "Ijtimoiy tarmoqlar:"}
                        </p>
                        <div className="flex gap-3">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/tiiame.uz/"
                            >
                                <FaFacebook className="text-white hover:text-blue-400" />
                            </a>
                            <a
                                target="_blank"
                                href="https://x.com/tiiameofficial?lang=en"
                            >
                                <FaTwitter className="text-white hover:text-blue-400" />
                            </a>
                            <a
                                target="_blank"
                                href="https://t.me/TIQXMMIBuxoro"
                            >
                                <FaTelegram className="text-white hover:text-blue-400" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UCR2v5fa2y7-fjoDWyEMU0Sg"
                            >
                                <FaYoutube className="text-white hover:text-blue-400" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">
                    <div className="w-full md:w-5/6 h-[330px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6133.057335824391!2d64.4581287!3d39.7726897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500593eb541ad1%3A0xba79947337de01c8!2sBukharskiy%20Filial%20Tashkentskogo%20Instituta%20injinerov%20Irrigatsiy%20i%20mexanizatsiy%20sellskogo%20xozaystvo!5e0!3m2!1sen!2s!4v1677563769836!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            title="mapUniversity"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="w-full md:w-1/6 flex flex-col gap-1">
                        <p className="text-[#fe6803] text-[18px]">
                            {language === "uz"
                                ? "Ish kunlari:"
                                : language === "ru"
                                ? "Рабочие дни:"
                                : language === "en"
                                ? "Working days:"
                                : "Ish kunlari:"}
                        </p>
                        <div className="border-l border-dotted border-[#fe6803] py-2 px-2">
                            <p className="text-white text-[18px]">
                                {language === "uz"
                                    ? "Du-Pa: 9:00 - 18:00"
                                    : language === "ru"
                                    ? "Пн-Пт: 9:00 - 18:00"
                                    : language === "en"
                                    ? "Mon-Fri: 9:00 - 18:00"
                                    : "Du-Pa: 9:00 - 18:00"}
                            </p>
                        </div>
                        <div className="border-l border-dotted border-[#fe6803] py-2 px-2">
                            <p className="text-white text-[18px]">
                                {language === "uz"
                                    ? "Tushlik: 13:00 - 14:00"
                                    : language === "ru"
                                    ? "Обед: 13:00 - 14:00"
                                    : language === "en"
                                    ? "Lunch: 13:00 - 14:00"
                                    : "Tushlik: 13:00 - 14:00"}
                            </p>
                        </div>
                        <p className="text-[#fe6803] text-[18px]">
                            {language === "uz"
                                ? "Bog'lanish uchun:"
                                : language === "ru"
                                ? "Для связи:"
                                : language === "en"
                                ? "For contact:"
                                : "Bog'lanish uchun:"}
                        </p>
                        <div
                            onClick={() =>
                                alert(
                                    language === "uz"
                                        ? "shu raqamga qo'ng'iroq qiling"
                                        : language === "ru"
                                        ? "позвоните на этот номер"
                                        : language === "en"
                                        ? "please call this number"
                                        : "shu raqamga qo'ng'iroq qiling"
                                )
                            }
                            className="border-l border-dotted border-[#fe6803] py-2 px-2"
                        >
                            <p className="text-white text-[18px]">
                                +998 (65) 228-94-24
                            </p>
                        </div>
                        <div className="border-l border-dotted border-[#fe6803] py-2 px-2">
                            <p className="text-white text-[16px]">
                                {language === "uz"
                                    ? "Rektorga murojaat"
                                    : language === "ru"
                                    ? "Обращение к ректору"
                                    : language === "en"
                                    ? "Appeal to the Rector"
                                    : "Rektorga murojaat"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
                    <p className="text-white text-[14px]">
                        {language === "uz"
                            ? "© 2024 Barcha huquqlar himoyalangan"
                            : language === "ru"
                            ? "© 2024 Все права защищены"
                            : language === "en"
                            ? "© 2024 All rights reserved"
                            : "© 2024 Barcha huquqlar himoyalangan"}
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://www.uz/ru/res/visitor/index?id=40798"
                            target="_top"
                        >
                            <img
                                src={Screen1}
                                width="88"
                                height="31"
                                border="0"
                                alt={
                                    language === "uz"
                                        ? "Топ рейтинг www.uz"
                                        : language === "ru"
                                        ? "Топ рейтинг www.uz"
                                        : language === "en"
                                        ? "Top rating www.uz"
                                        : "Топ рейтинг www.uz"
                                }
                            />
                        </a>
                        <a
                            href="https://www.uz/ru/res/visitor/index?id=45016"
                            target="_top"
                        >
                            <img
                                src={Screen2}
                                width="88"
                                height="31"
                                border="0"
                                alt={
                                    language === "uz"
                                        ? "Топ рейтинг www.uz"
                                        : language === "ru"
                                        ? "Топ рейтинг www.uz"
                                        : language === "en"
                                        ? "Top rating www.uz"
                                        : "Топ рейтинг www.uz"
                                }
                            />
                        </a>
                        <a
                            href="https://www.uz/ru/res/visitor/index?id=46787"
                            target="_top"
                        >
                            <img
                                src={Screen3}
                                width="88"
                                height="31"
                                border="0"
                                alt={
                                    language === "uz"
                                        ? "Топ рейтинг www.uz"
                                        : language === "ru"
                                        ? "Топ рейтинг www.uz"
                                        : language === "en"
                                        ? "Top rating www.uz"
                                        : "Топ рейтинг www.uz"
                                }
                            />
                        </a>
                    </div>
                    <a href="" className="text-white text-[14px]">
                        {language === "uz"
                            ? "Sayt yaratuvchisi : CODECO DEVELOPMENT"
                            : language === "ru"
                            ? "Создатель сайта: CODECO DEVELOPMENT"
                            : language === "en"
                            ? "Site creator: CODECO DEVELOPMENT"
                            : "Sayt yaratuvchisi : CODECO DEVELOPMENT"}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
