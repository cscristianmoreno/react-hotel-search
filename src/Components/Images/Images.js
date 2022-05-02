
import { useState, useRef, useEffect } from "react";
import "./Images.css";
import hotel_1 from "./Images/hotel_1.png";
import hotel_2 from "./Images/hotel_2.png";
import hotel_3 from "./Images/hotel_3.png";

const Images = () => {
    const [arrayImage, setArrayImage] = useState(0);
    const [timer, setTimer] = useState([]);

    const ARRAY_HEADER = [
        { title: "RESERVA", subtitle_first: "SIMPLIFICAMOS TU BÚSQUEDA", subtitle_second: "Emprendé hacia tu rumbo y busca tu lugar ideal", image: hotel_1 },
        { title: "ACCESIBILIDAD", subtitle_first: "PRECIOS ACCESIBLES", subtitle_second: "Disfrutá de los mejores hoteles al mejor precio", image: hotel_2 },
        { title: "COMODIDAD", subtitle_first: "DISFRUTÁ DE TUS VACACIONES", subtitle_second: "Disfrutá de las mejores comodidades", image: hotel_3 },
    ]

    const imagePrevios = () => {
        if (arrayImage <= 0) {
            setArrayImage(ARRAY_HEADER.length - 1);
            return;
        }

        setArrayImage(arrayImage - 1);
    }

    const imageNext = () => {
        if (arrayImage >= ARRAY_HEADER.length - 1) {
            setArrayImage(0);
            return;
        }

        setArrayImage(arrayImage + 1);
    }

    useEffect(() => {
        if (timer.length > 0) {
            timer.forEach((str) => {
                clearTimeout(str);
            })

            timer.length = "";
        }

        timer.push(
            setTimeout(() => {
                if (arrayImage >= ARRAY_HEADER.length - 1) {
                    setArrayImage(0);
                }
                else {
                    setArrayImage(arrayImage + 1);
                }
            }, 5000)
        );
    }, [arrayImage]);

    const imageRef = useRef();

    return (
        <div className="class_images_container">
            <div className="class_images_arrow">
                <div onClick={() => imagePrevios()} className="class_images_arrow_container">
                    <i className="fas fa-angle-left"></i>
                </div>
                
                <div onClick={() => imageNext()} className="class_images_arrow_container">
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
            
            <div className="class_image">
                <img className="class_images_transition" src={ARRAY_HEADER[arrayImage].image}/>
            </div>

            <div className="class_images_title_container">
                <span className="class_images_subtitle">{ARRAY_HEADER[arrayImage].subtitle_first}</span>
                <span className="class_images_title_main">{ARRAY_HEADER[arrayImage].title}</span>

                <span className="class_images_subtitle">{ARRAY_HEADER[arrayImage].subtitle_second}</span>

                <div className="class_image_button_container">
                    <a href={process.env.PUBLIC_URL + "/#/list"}>SOLICITAR LISTA</a>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
    );
}

export default Images;