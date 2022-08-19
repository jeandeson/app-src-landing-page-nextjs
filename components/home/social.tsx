import styles from "../../styles/pages/home/social.module.scss";
const Social = (): JSX.Element => {
    return (
        <div className={styles.socialSection}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <div>
                            <h6>USERS</h6>
                        </div>
                        <div>
                            <p>1600</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h6>DOWNLOAD</h6>
                        </div>
                        <div>
                            <p>600</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h6>PREMIUM</h6>
                        </div>
                        <div>
                            <p>1200</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h6>SHARE</h6>
                        </div>
                        <div>
                            <p>25000</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Social;
