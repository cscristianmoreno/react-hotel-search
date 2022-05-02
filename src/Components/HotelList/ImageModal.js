import { useContext, useRef, useEffect } from "react";

import ImageContext from "./ImageContext.js";

const ImageModal = () => {
    const { image } = useContext(ImageContext);

    const hotelModalImageRef = useRef();
    const spinnerRef = useRef();
    const imageRef = useRef();

    useEffect(() => {
        if (image === null) {
            return;
        }

        hotelModalImageRef.current.classList.toggle("class_hotel_modal_container_display");
        spinnerRef.current.style.display = "block";
        imageRef.current.style.display = "none";
    }, [image]);

    const handleModalExit = (ref) => {
        ref.current.classList.toggle("class_hotel_modal_container_display");
    }

    const handleModalImageLoad = () => {
        spinnerRef.current.style.display = "none";
        imageRef.current.style.display = "flex";
    }

    return (
        <div ref={hotelModalImageRef} className="class_hotel_modal_container">

            <span ref={spinnerRef} className="spinner-border" style={{color: "#2e82ff"}} />
            
            <div ref={imageRef} className="class_hotel_modal">

                <div className="class_modal_exit_container">
                    <span onClick={() => handleModalExit(hotelModalImageRef)} className="class_hotel_modal_exit">&times;</span>
                </div>
                
                <img onLoad={handleModalImageLoad} className="class_hotel_modal_image" src={image}/>
            </div>
        </div>
    )
}

export default ImageModal;