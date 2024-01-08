"use client";
import {ArrowLeft} from "react-bootstrap-icons";
import {useRouter} from "next/navigation";
import styles from "./BackButton.module.scss";

interface LocalProps {
    width?: number;
    height?: number;
}
const BackButton = ({
    width,
    height,
}: LocalProps) => {
    const router = useRouter();
    return (
        <button className={styles["back-button"]} onClick={() => router.back()}>
            <ArrowLeft width={width} height={height}/>
        </button>
    )
};
export default BackButton;
