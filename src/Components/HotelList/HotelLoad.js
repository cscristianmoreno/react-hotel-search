import { useState, useEffect, useRef, useContext } from "react";

import HotelInfoContext from "../Context/HotelInfoContext.js";

const HotelLoad = () => {
    const { hotelInfoState, hotelPerPage, imageLoaded, error } = useContext(HotelInfoContext);

    useEffect(() => {
        if (hotelModalLoadRef.current.classList.contains("class_hotel_modal_container_display") === false) {
            hotelModalLoadRef.current.classList.add("class_hotel_modal_container_display");
        }
        
        if (imageLoaded >= hotelPerPage) {
            hotelModalLoadRef.current.classList.remove("class_hotel_modal_container_display");
        }
    }, [imageLoaded]);

    useEffect(() => {
        console.log(error);
    }, [error]);

    if (error) {
        return (
            <div ref={hotelModalLoadRef} className="class_hotel_modal_container">
                <span className="class_hotel_modal_load_text">¡Vaya!, al parecer la consulta a demorado demasiado</span>
                <span className="class_hotel_modal_load_text">{(hotelPerPage > 0) ? parseInt((imageLoaded * 100) / hotelPerPage) : 0}%</span>
                <br/>
                <span style={{color: "white"}} className="spinner-border" role="status"/>
            </div>
        )
    }
    else {
        return (
            <div ref={hotelModalLoadRef} className="class_hotel_modal_container">
                <span className="class_hotel_modal_load_text">Cargando hoteles...</span>
                <span className="class_hotel_modal_load_text">{(hotelPerPage > 0) ? parseInt((imageLoaded * 100) / hotelPerPage) : 0}%</span>
                <br/>
                <span style={{color: "white"}} className="spinner-border" role="status"/>
            </div>
        )
    }
}

export default HotelLoad;