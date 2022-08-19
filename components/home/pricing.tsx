import styles from "../../styles/pages/home/pricing.module.scss";
import Button from "../shared/button";

const Pricing = () => {
    return (
        <section className={styles.pricingSection}>
            <div className={styles.container}>
                <div className={styles.pricingWrapper}>
                    <div className={styles.pricingDetails}>
                        <h6>OUR PRICING</h6>
                        <h1>Choose Price Plan</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. usmod
                            temporincididunt.
                        </p>
                    </div>
                    <div className={styles.plans}>
                        <div className={styles.pricingContainer}>
                            <div className={styles.headSpacing}></div>
                            <div className={styles.pricingHead}>
                                <h4>BASIC</h4>
                                <p>
                                    $20<sub>/mo</sub>
                                </p>
                            </div>
                            <ul>
                                <li>Up to five users</li>
                                <li>Up to Fifteen Messages</li>
                                <li>Unlimited Queries and</li>
                                <li>Reservation</li>
                                <li>No per Booking Charge</li>
                                <li>
                                    <Button type="btnDefault">Buy Now</Button>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.pricingContainer} ${styles.centerPrice}`}>
                            <div className={styles.headSpacing}>
                                <h4>Most Popular</h4>
                            </div>
                            <div className={`${styles.pricingHead}`}>
                                <h4>ADVANCED</h4>
                                <p>
                                    $60<sub>/mo</sub>
                                </p>
                            </div>
                            <ul>
                                <li>Up to five users</li>
                                <li>Up to Fifteen Messages</li>
                                <li>Unlimited Queries and</li>
                                <li>Reservation</li>
                                <li>No per Booking Charge</li>
                                <li>
                                    <Button type="btnDefault">Buy Now</Button>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.pricingContainer}>
                            <div className={styles.headSpacing}></div>
                            <div className={styles.pricingHead}>
                                <h4>PREMIUM</h4>
                                <p>
                                    $90<sub>/mo</sub>
                                </p>
                            </div>
                            <ul>
                                <li>Up to five users</li>
                                <li>Up to Fifteen Messages</li>
                                <li>Unlimited Queries and</li>
                                <li>Reservation</li>
                                <li>No per Booking Charge</li>
                                <li>
                                    <Button type="btnDefault">Buy Now</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
