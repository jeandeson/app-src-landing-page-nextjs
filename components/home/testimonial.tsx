import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/pages/home/testimonial.module.scss";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <section id="testimonials" className={`${styles.testimonialSection}`}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.testimonialText}>
                        <h6>STORY</h6>
                        <h1>Testimonials</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>

                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showIndicators={false}
                    >
                        <div className={styles.carrouselItemContainer}>
                            <div className={styles.carrouselItem}>
                                <h5>This app is very smart and User -Friendly</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    utlaboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitationullamcolaborisnisiutaliquip ex ea commodo consequat.
                                </p>
                                <div className={styles.userRate}>
                                    <img src="/assets/tm-profile-img.png" alt="user" />
                                    <h1>Jean Snow</h1>
                                    <span>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.carrouselItemContainer}>
                            <div className={styles.carrouselItem}>
                                <h5>This app is very smart and User -Friendly</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    utlaboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitationullamcolaborisnisiutaliquip ex ea commodo consequat.
                                </p>
                                <div className={styles.userRate}>
                                    <img src="/assets/tm-profile-img.png" alt="user" />
                                    <h1>Jean Snow</h1>
                                    <span>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.carrouselItemContainer}>
                            <div className={styles.carrouselItem}>
                                <h5>This app is very smart and User -Friendly</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    utlaboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitationullamcolaborisnisiutaliquip ex ea commodo consequat.
                                </p>
                                <div className={styles.userRate}>
                                    <img src="/assets/tm-profile-img.png" alt="user" />
                                    <h1>Jean Snow</h1>
                                    <span>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
