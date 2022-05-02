import { useState, createContext, useEffect } from "react";
import ImageModal from "./ImageModal.js";

const ImageContext = createContext();

const ImageProvider = ({children}) => {
    const [image, setImage] = useState(null);

    return(
        <ImageContext.Provider value={{image, setImage}}>
            {children}
            <ImageModal/>
        </ImageContext.Provider>

    )
}

export default ImageContext;
export { ImageProvider };