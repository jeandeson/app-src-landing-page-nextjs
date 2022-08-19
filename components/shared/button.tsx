import React from "react";
import styles from "../../styles/buttons/button.module.scss";

interface ButtonProps {
    type: string;
    children: string;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
    return <button className={styles[type]}>{children}</button>;
};

export default Button;
