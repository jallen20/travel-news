import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
    return <div className={styles["nav-bar"]}>
        <img src={"/travel-news.png"} className={styles["nav-logo"]} />
        <div className={styles["nav-section"]}>
            <Link href={"/"}>Home</Link>
            <Link href={"/search"}>Search</Link>
        </div>
    </div>
}
export default NavBar;
