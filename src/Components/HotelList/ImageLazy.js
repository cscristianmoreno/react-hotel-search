import { useEffect, useRef, useContext } from "react";

import ImageContext from "./ImageContext";

const ImageLazy = ({img}) => {

    const { setImage } = useContext(ImageContext);

    const imageRef = useRef();
    const spinnerRef = useRef();

    useEffect(() => {
        imageRef.current.style.display = "none";
        spinnerRef.current.style.display = "block";
    }, []);

    const handleLoadImage = () => {
        imageRef.current.style.display = "block";
        spinnerRef.current.style.display = "none";
    }

    const handleOpenModal = (img) => {
        setImage(img);
    }

    return (
        <>
            <span className="spinner-border" ref={spinnerRef} style={{color: "#2e82ff"}} />
            <img onClick={() => handleOpenModal(img)} onLoad={handleLoadImage} className="class_image_shadow" ref={imageRef} src={img}/>
        </>
    )
}

export default ImageLazy;