import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/pages/home/videoArea.module.scss";

const VideoArea = () => {
    const [showIframe, setShowIframe] = useState(false);

    function handleShowIframe() {
        if (showIframe) {
            document.body.style.overflow = "visible";
            setShowIframe(false);
        } else if (!showIframe) {
            document.body.style.overflow = "hidden";
            setShowIframe(true);
        }
    }
    return (
        <section id="iframeContainer" className={`${styles.section}`}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.videoAreaText}>
                        <p># App Video Intro</p>
                        <h1>Discover The New App</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                        <p>
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
                        </p>
                        <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div onClick={() => handleShowIframe()} className={styles.videoAreaImage}>
                        <a href="#iframeContainer"></a>
                    </div>
                </div>
            </div>
            {showIframe && (
                <div
                    onClick={() => handleShowIframe()}
                    className={`${styles.iframeContainer} ${showIframe && styles.isScrollLock}`}
                >
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
            )}
        </section>
    );
};

export default VideoArea;
