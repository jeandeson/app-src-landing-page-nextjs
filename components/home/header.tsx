import styles from "../../styles/pages/home/header.module.scss";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Button from "../shared/button";

const getMenuList = (isMobile: boolean) => {
    return (
        <ul className={isMobile ? styles.menuListMobile : styles.menuList}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#features">Features</a>
            </li>
            <li>
                <a href="#pricing">Price Plan</a>
            </li>
            <li>
                <a href="#testimonials">Review</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <Button type="btnHeaderInverse">Get Now</Button>
            </li>
        </ul>
    );
};

const Header = (): JSX.Element => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    function handleWithMobileMenu() {
        setShowMenuMobile(!showMenuMobile);
    }
    return (
        <div className={`${styles.headerStickWrapper}`}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.logo}>
                            <Image src="/assets/home_page_logo.png" alt="logo" width={128} height={28} />
                        </div>
                        <div onClick={() => handleWithMobileMenu()} className={styles.menuMobileShow}>
                            <GiHamburgerMenu />
                        </div>
                        {getMenuList(false)}
                        {showMenuMobile && getMenuList(true)}
                        <div>
                            <Button type="btnHeader">Get Now</Button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
