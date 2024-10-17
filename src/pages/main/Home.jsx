import React from "react";
import Topbar from "../../components/Topbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainCarousel from "./MainCarousel";
import SubCarousel from "./SubCarousel";
import News from "./News";
import { Announcement, Prizes, Videos } from "../data";

const Home = () => {
    return (
        <div>

            <MainCarousel />
            <SubCarousel />
            <News />
            <Announcement />
            <Prizes />
            <Videos />

        </div>
    );
};

export default Home;
