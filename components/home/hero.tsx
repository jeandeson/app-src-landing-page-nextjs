import Image from "next/image";
import styles from "../../styles/pages/home/hero.module.scss";
import Button from "../shared/button";

const Hero = () => {
    return (
        <div id="hero" className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroWrapper}>
                    <div>
                        <p># App Landing Page</p>
                        <h1>The Best Landing Page for your App</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <div>
                            <Button type="btnInverse">Get App Now</Button>
                            <Button type="btnDefault">Discover More</Button>
                        </div>
                    </div>
                    <div className={styles.imageHero}>
                        <Image src={"/assets/hero_area_img.jpg"} width={440} height={660} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
