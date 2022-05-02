import "./HotelList.css";
import { useState, useEffect, useRef, useContext, useReducer, Suspense, lazy } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import CountryList from "./CountryList.js";
import HotelInfoContext from "../Context/HotelInfoContext.js";
import IconHotel from "./images/IconHotel.js";
import IconHotelInformation from "./images/IconHotelInformation.js";
import IconHotelImages from "./images/IconHotelImages.js";
import IconMenu from "../Menu/IconMenu.js";

import axios from "axios";

import ImageNotFount from "./images/ImageNotFound.jpg";
import HotelPages from "./HotelPages.js";
import ImageLazy from "./ImageLazy.js";

const HotelList = () => {
    const { hotelInfoState, hotelPage, hotelPerPage, imageLoaded, setImageLoaded, search, statusCode, setStatusCode } = useContext(HotelInfoContext);

    const [hotel, setHotel] = useState([]);
    const [hotelId, setHotelId] = useState(0);
    const [arrayImage, setArrayImage] = useState([]);
    
    const { register, handleSubmit, formState: { errors } }  = useForm();

    const controller = new AbortController();
    
    const calendarStart = useRef();
    const calendarEnd = useRef();
    const imageRef = useRef([]);
    const hotelListLoad = useRef();
    const hotelListPreLoad = useRef();
    const hotelInfoRef = useRef([]);
    const hotelFormRef = useRef();
    const hotelInfoDisplay = useRef([]);
    const hotelGalleryDisplay = useRef([]);
    const hotelModalLoadRef = useRef(); 

    useEffect(() => {
        const max_hotels = [];

        let arrayHotels = hotelInfoState;

        if (search.length > 0) {
            arrayHotels = arrayHotels.filter((str) => str.address.country === search);
        }


        for (let i = (hotelPage - 1) * hotelPerPage, j = 0; j < hotelPerPage; i++, j++) {
            if (i >= arrayHotels.length) {
                break;
            }

            max_hotels.push(arrayHotels[i]);
        }

        removeHotelInfoDisplay();

        controller.abort();

        hotelInfoRef.current = [];
        hotelInfoDisplay.current = [];
        hotelGalleryDisplay.current = [];

        setHotel(max_hotels);
    }, [hotelInfoState, hotelPage, search]);

    useEffect(() => {
        if (hotelModalLoadRef.current.classList.contains("class_hotel_modal_container_display") === false) {
            hotelModalLoadRef.current.classList.add("class_hotel_modal_container_display");
        }

        if (hotelInfoState.length === 0) {
            return;
        }
        
        if (imageLoaded >= hotel.length) {
            hotelModalLoadRef.current.classList.remove("class_hotel_modal_container_display");

            hotelListPreLoad.current.style.display = "none";
        }
    }, [imageLoaded]);

    const removeHotelInfoDisplay = () => {
        hotelInfoRef.current.forEach((str, num) => {
            if (str.classList.contains("class_hotel_information_display") === true) {
                str.classList.remove("class_hotel_information_display");
            }
        })
    }

    const openInfo = (ev) => {
        // removeHotelInfoDisplay();

        showHotelInformation(ev);

        hotelInfoRef.current[ev].classList.toggle("class_hotel_information_display");
    }

    const addRef = (ev) => {
        if (ev && !hotelInfoRef.current.includes(ev)) {
            hotelInfoRef.current.push(ev);
        }
    }

    const addRefImages = (ev) => {
        if (ev && !hotelGalleryDisplay.current.includes(ev)) {
            hotelGalleryDisplay.current.push(ev);
        }
    }

    const addRefInformation = (ev) => {
        if (ev && !hotelInfoDisplay.current.includes(ev)) {
            hotelInfoDisplay.current.push(ev);
        }
    }

    const openContract = (hotelId) => {
        // const response = await axios({
        //     method: "POST",
        //     url: "/search_hotel",
        //     params: {
        //         "hotelId": hotelId
        //     }
        // })

        // console.log(response);

        setHotelId(hotelId);
        hotelFormRef.current.classList.toggle("class_hotel_modal_container_display");
    }

    const handleOnSubmit = async (data) => {
        const response = await axios({
            method: "POST",
            url: "/reservation",
            params: data
        })
    }

    const showHotelImages = (ev) => {

        if (hotel[ev].images.length === 0) {
            return;
        }

        if (hotelInfoDisplay.current[ev].classList.contains("class_hotel_display")) {
            hotelInfoDisplay.current[ev].classList.remove("class_hotel_display");
        }
        
        if (!hotelGalleryDisplay.current[ev].classList.contains("class_hotel_display")) {
            hotelGalleryDisplay.current[ev].classList.add("class_hotel_display");

            const images = [];

            hotel[ev].images.forEach((str) => {
                images.push(str.url);
            })

            setArrayImage(images);
        }
    }

    const showHotelInformation = (ev) => {

        if (!hotelInfoDisplay.current[ev].classList.contains("class_hotel_display")) {
            hotelInfoDisplay.current[ev].classList.add("class_hotel_display");
        }
        
        if (hotelGalleryDisplay.current[ev].classList.contains("class_hotel_display")) {
            hotelGalleryDisplay.current[ev].classList.remove("class_hotel_display");
        }

        setArrayImage([]);
    }

    const handleModalExit = (ref) => {
        ref.current.classList.toggle("class_hotel_modal_container_display");
    }

    const checkForm = () => {
        if (hotel.length === 0) {
            return;
        }

        return(
            <>
                <form className="class_hotel_form" onSubmit={handleSubmit(handleOnSubmit)}>
                    <span className="class_hotel_form_title">Reservar este hotel ({hotel[hotelId].name.replace(" [SANDBOX]", "")})</span>

                    <br/>
                    <br/>

                    <div className="class_hotel_form_control">
                        <Form.Label>Nombre</Form.Label>

                        <Form.Control
                            type="text"
                            { 
                                ...register("name", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Este campo requiere al menos 3 carácteres"
                                    }
                                })
                            }
                        />

                        <span className="class_hotel_form_error">{errors?.name?.message}</span>
                    </div>

                    <div className="class_hotel_form_control">
                        <Form.Label>Apellido</Form.Label>

                        <Form.Control
                            type="text"
                            { 
                                ...register("surname", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Este campo requiere al menos 3 carácteres"
                                    }
                                })
                            }
                        />

                        <span className="class_hotel_form_error">{errors?.surname?.message}</span>
                    </div>

                    <div className="class_hotel_form_control">
                        <Form.Label>Correo electrónico</Form.Label>

                        <Form.Control
                            type="email"
                            { 
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Este campo requiere al menos 3 carácteres"
                                    }
                                })
                            }
                        />

                        <span className="class_hotel_form_error">{errors?.surname?.message}</span>
                    </div>

                    <div className="class_hotel_form_control">
                        <Form.Label>Entrada</Form.Label>

                        <Form.Control
                            type="date"
                            { 
                                ...register("start", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    valueAsDate: true
                                })
                            }
                        />

                        <span className="class_hotel_form_error">{errors?.start?.message}</span>
                    </div>

                    <div className="class_hotel_form_control">
                        <Form.Label>Salida</Form.Label>

                        <Form.Control
                            type="date"
                            { 
                                ...register("end", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    valueAsDate: true
                                })
                            }
                        />

                        <span className="class_hotel_form_error">{errors?.end?.message}</span>
                    </div>

                    <div className="class_hotel_form_control">
                        <Form.Label>Habitaciones</Form.Label>

                        <Form.Select { ...register("rooms")}>
                        {
                            
                            hotel[hotelId].roomTypes.map((str, num) => {
                                return <option value={num}>{num}</option>
                            })
                        }
                        </Form.Select>
                    </div>

                    <button type="submit" className="class_button class_button_primary">Crear reservación</button>
                </form>
            </>
        )
    }

    const checkImageLoaded = (ev) => {
        setImageLoaded(imageLoaded + 1);
    }

    const hotelReloads = () => {
        setStatusCode(0);
    }

    const LoadHotels = (error) => {

        if (error > 200) {
            return( 
                <div ref={hotelModalLoadRef} className="class_hotel_modal_container">
                    <span className="class_hotel_modal_load_text">¡Vaya! Parece que ocurrió un error...</span>
                    <br/>
                    <button onClick={() => hotelReloads()} className="btn btn-danger"><i className="fas fa-sync"/>&nbsp;&nbsp;&nbsp;Cargar nuevamente</button>
                    <br/>
                    <a href={process.env.PUBLIC_URL + "/#"} className="btn btn-primary"><i className="fas fa-home"/>&nbsp;&nbsp;&nbsp;Ir a la página principal</a>
                </div>
            )
        }
        else {
            
            return( 
                <div ref={hotelModalLoadRef} className="class_hotel_modal_container">
                    <span className="class_hotel_modal_load_text">Cargando hoteles...</span>
                    <span className="class_hotel_modal_load_text">{(hotelPerPage > 0) ? parseInt((imageLoaded * 100) / hotelPerPage) : 0}%</span>
                    <br/>
                    <br/>
                    <span style={{color: "white"}} className="spinner-border" role="status"/>
                </div>
            )
       }
    }

    return(
        <div className="class_hotel_list_main">

            {(statusCode > 200) ? LoadHotels(statusCode) : LoadHotels(0)}
            
            <div ref={hotelFormRef} className="class_hotel_modal_container">
                <div className="class_hotel_modal class_hotel_modal_form">
                    <div className="class_modal_exit_container">
                        <span onClick={() => handleModalExit(hotelFormRef)} className="class_hotel_modal_exit">&times;</span>
                    </div>

                    {checkForm()}
                </div>
            </div>

            <span className="class_hotel_list_title">Lista de hoteles</span>

            <div className="class_hotel_main">
                 <CountryList/>

                <div ref={hotelListPreLoad} className="class_hotel_list_container">
                {
                    [...Array(hotelPerPage)].map(() => {
                        return(
                            <div className="class_hotel">
                                <div className="class_hotel_image_container">
                                    <img src={ImageNotFount}/>
                                </div>

                                <div className="class_hotel_description_container">
                                    <div className="class_hotel_subtitle_container class_hotel_description_fake" />

                                    <div className="class_hotel_rating">
                                        {[...Array(5)].map((str, num) => {
                                            return <i style={{color: "#d1d1d1"}} className="fas fa-star"/>;
                                        })}
                                    </div>

                                    <br/>
                                    <br/>

                                    <div className="class_hotel_subtitle_container class_hotel_description_fake" />
                                    <br/>
                                    <div className="class_hotel_subtitle_container class_hotel_description_fake" />
                                    <br/>
                                    <div className="class_hotel_subtitle_container class_hotel_description_fake" />
                                    <br/>
                                    <div className="class_hotel_subtitle_container class_hotel_description_fake" />
                                    
                                    <br/>
                                    
                                    <br/>

                                    <button style={{backgroundColor: "#d1d1d1"}} className="class_button class_button_primary">Detalles</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div ref={hotelListLoad} className="class_hotel_list_container">
                {
                    hotel.map((str, num) => {
                        return (
                            <>
                                <div key={num} className="class_hotel">
                                    <div className="class_hotel_image_container">
                                         <img onLoad={checkImageLoaded} src={(str.images.length === 0) ? ImageNotFount : str.images[0].url}/>
                                    </div>

                                    <div className="class_hotel_description_container">
                                        <div className="class_hotel_title">
                                            <IconHotel />
                                            <span>{str.name.replace("[SANDBOX]", "")}</span>
                                        </div>
                                        <div className="class_hotel_rating">
                                        {[...Array(str.starRating)].map((str, num) => {
                                                return <i className="fas fa-star"/>;
                                        })}
                                        </div>

                                        <br/>
                                        <br/>
                                        

                                        <div className="class_hotel_subtitle_container">
                                            <span>Localidad:</span>
                                            <span style={{marginLeft: "10px"}}>
                                                {str.address.city}
                                            </span>
                                        </div>

                                        <div className="class_hotel_subtitle_container">
                                            <span>Teléfono:</span>
                                            <span style={{marginLeft: "10px"}}>{str.phoneNumbers[0]}</span>
                                        </div>

                                        <div className="class_hotel_subtitle_container">
                                            <span>Habitaciones:</span>
                                            <span style={{marginLeft: "10px"}}>{str.roomCount}</span>
                                        </div>

                                        <div className="class_hotel_subtitle_container">
                                            <span>Contratable en el hotel:</span>
                                            <i className={(str.contractable === true) ? "fas fa-check-circle class_hotel_icon_success" : "fas fa-times-circle class_hotel_icon_failure"} style={{marginLeft: "10px"}}/>
                                        </div> 
                                        
                                        <br/>
                                        
                                        <br/>

                                        <button onClick={() => openInfo(num)} className="class_button btn btn-primary">Detalles</button>
                                    </div>
                                </div>

                                <div ref={addRef} className="class_hotel_information_container">
                                    <div className="class_hotel_information_menu">
                                        <div onClick={() => showHotelInformation(num)} className="class_hotel_information_icon_container">
                                            <IconHotelInformation />
                                        </div>
                                        <div onClick={() => showHotelImages(num)} className="class_hotel_information_icon_container">
                                            <IconHotelImages />
                                        </div>
                                    </div>

                                    <div ref={addRefInformation} className="class_hotel_information_general class_hotel_display">
                                        
                                        <span className="class_hotel_title">
                                            <i style={{color: "orange", marginRight: "5px"}} className="fas fa-clipboard"/> 
                                            DESCRIPCIÓN
                                        </span>
                                        
                                        <br/>

                                        <span>{str.description.short}</span>
                                        
                                        <br/>
                                        
                                        <span className="class_hotel_title">
                                            <i style={{color: "orange", marginRight: "5px"}} className="fas fa-clipboard"/> 
                                            TIPO DE HABITACIONES: {str.roomTypes.length}
                                        </span>

                                        <br/>

                                        <div className="class_hotel_amenities">
                                        {
                                            str.roomTypes.map((str2) => {
                                                return (
                                                    <>
                                                        <span><i className="fas fa-door-open"/>{str2.name}</span>
                                                    </>
                                                );
                                            })
                                        }
                                        </div>
                                        
                                        <br/>

                                        <span className="class_hotel_title">
                                            <i style={{color: "orange", marginRight: "5px"}} className="fas fa-clipboard"/> 
                                            COMODIDADES
                                        </span>

                                        <br/>

                                        <div className="class_hotel_amenities">
                                        {
                                            str.amenities.map((str2) => {
                                            return <span><i className="fas fa-check-circle"/>{str2.formatted}</span>;
                                            })
                                        }
                                        </div>

                                        <br/>

                                        <button onClick={() => openContract(num)} className="class_button btn btn-success" disabled>Reservar</button>
                                        
                                        <br/>
                                    </div>

                                    <div ref={addRefImages} className="class_hotel_information_general">

                                        <span className="class_hotel_title">
                                            <i style={{color: "orange", marginRight: "5px"}} className="fas fa-images"/>
                                            IMÁGENES
                                        </span>
                                        
                                        <div className="class_hotel_information_image_container">
                                        {
                                            arrayImage.map((str2) => {
                                                return(
                                                    <div className="class_hotel_image">
                                                        <ImageLazy img={str2}/>
                                                    </div>
                                                )
                                                
                                            })
                                        }
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>

                <HotelPages/>
            </div>
        </div>
    )
}

export default HotelList;