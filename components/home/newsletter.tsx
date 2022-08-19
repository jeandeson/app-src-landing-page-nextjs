import React from "react";
import styles from "../../styles/pages/home/newsletter.module.scss";
import Button from "../shared/button";

const Newsletter = () => {
    return (
        <section className={`${styles.newsletterSection}`}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.newsletterText}>
                        <h1>Subscribe our Newsletter!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. usmod
                            temporincididunt.
                        </p>
                        <form action="#">
                            <input type="email" name="email" placeholder="Your e-mail" />
                            <Button type="btnDefault">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
