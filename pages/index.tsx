import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Download from "../components/home/download";
import Features from "../components/home/features";
import Footer from "../components/home/footer";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Newsletter from "../components/home/newsletter";
import Pricing from "../components/home/pricing";
import Social from "../components/home/social";
import Testimonial from "../components/home/testimonial";
import VideoArea from "../components/home/videoArea";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>AppSrc</title>
                <meta name="description" content="AppSrc Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <Hero />
                <Social />
                <Features />
                <VideoArea />
                <Pricing />
                <Testimonial />
                <Download />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
