import styles from "../../styles/pages/home/features.module.scss";
import Image from "next/image";
const Features = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.featuresWrapper}>
                    <p>WHAT WE DO</p>
                    <h1>Awesome Features</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. usmod
                        temporincididunt.
                    </p>
                </div>
                <div className={styles.featuresDetails}>
                    <div>
                        <div className={styles.singleFeatureItem}>
                            <h5>Unique Code</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className={styles.singleFeatureItem}>
                            <h5>Unique Code</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className={styles.singleFeatureItem}>
                            <h5>Unique Code</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className={styles.singleFeatureItemCenter}>
                        <div>
                            <div className={styles.imageWrapper}>
                                <Image src={"/assets/features-img2.jpg"} width={280} height={520} />
                            </div>
                            <div className={styles.lineOne}>
                                <div className={styles.dots}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles.lineTwo}>
                                <div className={styles.dots}>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles.lineTree}></div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.singleFeatureItem}>
                            <h5>Unique Code</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className={styles.singleFeatureItem}>
                            <h5>Unique Code</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className={styles.singleFeatureItem}>
                            <h5>Unique Code</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
