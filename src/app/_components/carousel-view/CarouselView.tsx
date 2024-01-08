import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MultiMedia} from "@/app/_model";
import {getFullImageUrl} from "@/app/_util";
import {useState} from "react";
import "./bootstrap.override.scss";
import styles from "./CarouselView.module.scss";

interface LocalProps {
    media: MultiMedia[];
    onImageClick: (articleId: string) => void;
}

interface CarouselImageProps {
    src: string;
}

const CarouselImage = ({
    src
}: CarouselImageProps) => (
    <div className={styles["carousel-img-container"]}>
        <div className={styles["img-overlay"]}></div>
        <img className={styles["carousel-view-img"]} src={src} alt="slides" />
    </div>
)

const CarouselView = ({
    media,
    onImageClick,
}: LocalProps) => {
    const [index, setIndex] = useState(0);
    return (
        <Carousel className={styles["carousel-view"]} activeIndex={index} onSelect={(i: number) => setIndex(i)}>
            {media.map((item) => (
                <Carousel.Item className={styles["carousel-content"]} key={item.url} interval={4000}>
                    <CarouselImage src={getFullImageUrl(item.url)}/>
                    <Carousel.Caption>
                        <p className={styles["carousel-item"]}>{item.caption}</p>
                        <button className={`${styles["carousel-item"]} btn btn-danger`} onClick={() => {
                            onImageClick(item.webUrl);
                        }}>View Story</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default CarouselView;
