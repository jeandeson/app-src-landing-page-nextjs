import styles from "../../styles/pages/home/download.module.scss";
import Button from "../shared/button";
const Download = (): JSX.Element => {
    return (
        <div className={styles.downloadSection}>
            <div className={styles.container}>
                <h1>Apprat is the best landing page For your App</h1>
                <Button type="btnHeader">Download Trial Version</Button>
            </div>
        </div>
    );
};

export default Download;
