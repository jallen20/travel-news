"use client";
import {ArrowLeft} from "react-bootstrap-icons";
import {useRouter} from "next/navigation";
import styles from "./BackButton.module.scss";

const BackButton = () => {
    const router = useRouter();
    return (
        <button className={styles["back-button"]} onClick={() => router.back()}>
            <ArrowLeft/>
        </button>
    )
};
export default BackButton;
