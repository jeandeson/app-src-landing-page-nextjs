import styles from "../../styles/pages/home/footer.module.scss";

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.author}>
                        <span>
                            © Apprat 2018 Designed by <a href="#">Jeandeson</a>
                        </span>
                    </div>
                    <ul>
                        <li>
                            <a>Terms and Conditions</a>
                        </li>
                        <li>
                            <a>Privacy and Policy</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
