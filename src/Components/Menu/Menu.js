import { useEffect, useRef } from "react";
import "./Menu.css";
import IconMenu from "./IconMenu.js";
import IconMenuItems from "./IconMenuItems.js";

const Menu = () => {
    const subMenuRef = useRef();
    const subMenuResponsiveRef = useRef();
    const menuRef = useRef();
    const menuResponsiveRef = useRef();
    const menuResponsiveToggle = useRef();


    const homeRef = useRef();
    const aboutRef = useRef();
    const functionRef = useRef();
    const hotelRef = useRef();

    const homeResponsiveRef = useRef();
    const aboutResponsiveRef = useRef();
    const functionResponsiveRef = useRef();
    const hotelResponsiveRef = useRef();

    const featuresRef = useRef([]); 
    const featuresResponsiveRef = useRef([]); 

    const handleOpenSubMenu = () => {
        subMenuRef.current.classList.toggle("class_submenu_display");
    }

    const handleOpenResponsiveSubMenu = () => {
        subMenuResponsiveRef.current.classList.toggle("class_submenu_display");
    }

    useEffect(() => {
        const path = window.location.href.split("/").pop();

        if (path.includes("features")) {
            const item = parseInt(path.substring(path.length - 1)) - 1;

            featuresRef.current[item].classList.add("class_menu_items_position");
            featuresResponsiveRef.current[item].classList.add("class_menu_items_position");

            functionRef.current.classList.add("class_menu_items_position");
            functionResponsiveRef.current.classList.add("class_menu_items_position");
        }
        else {
            switch(path)
            {
                case 'project': {
                    aboutRef.current.classList.add("class_menu_items_position");
                    aboutResponsiveRef.current.classList.add("class_menu_items_position");
                    break;
                }
                case 'list':{
                    hotelRef.current.classList.add("class_menu_items_position");
                    hotelResponsiveRef.current.classList.add("class_menu_items_position");
                    break; 
                }
                default: {
                    homeRef.current.classList.add("class_menu_items_position");
                    homeResponsiveRef.current.classList.add("class_menu_items_position");
                    break;
                }
            }
        }

        window.scrollTo(0, 0);
    });

    const addFeaturesRef = (ev) => {
        if (ev && featuresRef.current.includes(ev) === false) {
            featuresRef.current.push(ev);
        }
    }

    const addFeaturesResponsiveRef = (ev) => {
        if (ev && featuresResponsiveRef.current.includes(ev) === false) {
            featuresResponsiveRef.current.push(ev);
        }
    }

    const handleOpenMenuResponsive = () => {
        menuResponsiveToggle.current.classList.toggle("class_menu_toggle");
    }

    return(
        <>
            <div className="class_menu_fake">
            </div>

            <div ref={menuRef} className="class_main_menu class_menu_normal">
                <div className="class_menu">
                    <a href={process.env.PUBLIC_URL + "/#"} className="class_menu_title"><IconMenu /></a>

                    <div className="class_menu_items">
                        <a ref={homeRef} href={process.env.PUBLIC_URL + "/#"}>Inicio</a>
                        <a ref={functionRef} href="javascript:;" onClick={() => handleOpenSubMenu()}>
                            Funcionalidades

                            <div ref={subMenuRef} className="class_submenu_container">
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features1"}><i className="fas fa-search"/>BUSCÁ TU HOTEL</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features2"}><i className="far fa-calendar-check"/>RESERVAS ONLINE</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features3"}><i className="fas fa-chart-line"/>MEJORES OFERTAS</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features4"}><i className="fas fa-chart-bar"/>AHORRÁ EN TUS VIAJES</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features5"}><i className="fas fa-layer-group"/>LO HACEMOS NOSOTROS</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features6"}><i className="fas fa-dollar-sign"/>CUIDAMOS TU BOLSILLO</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features7"}><i className="fas fa-bullhorn"/>ANUNCIO DE OFERTAS</a>
                                <a ref={addFeaturesRef} href={process.env.PUBLIC_URL + "/#/features8"}><i className="fas fa-money-bill-wave"/>PRÉSTAMOS</a>
                            </div>
                        </a>
                        <a ref={aboutRef} href={process.env.PUBLIC_URL + "/#/project"}>Acerca del proyecto</a>
                        <a ref={hotelRef} href={process.env.PUBLIC_URL + "/#/list"}>Hoteles</a>
                    </div>
                </div>
            </div>

            <div ref={menuResponsiveRef} className="class_main_menu class_menu_responsive">
                <div className="class_menu">
                    <a href={process.env.PUBLIC_URL + "/#"} className="class_menu_title"><IconMenu /></a>
                    <i onClick={() => handleOpenMenuResponsive()} className="fas fa-bars"/>
                </div>
            </div>

            <div ref={menuResponsiveToggle} className="class_menu_vertical class_menu_responsive">
                <div className="class_menu_items">
                        <a href={process.env.PUBLIC_URL + "/#"} className="class_menu_title"><IconMenu /></a>

                        <a ref={homeResponsiveRef} href={process.env.PUBLIC_URL + "#"}>Inicio</a>
                        <a ref={functionResponsiveRef} href="javascript:;" onClick={() => handleOpenResponsiveSubMenu()}>Funcionalidades</a>
                        
                        <div ref={subMenuResponsiveRef} className="class_submenu_container">
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features1"}><i className="fas fa-search"/>BUSCÁ TU HOTEL</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features2"}><i className="far fa-calendar-check"/>RESERVAS ONLINE</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features3"}><i className="fas fa-chart-line"/>MEJORES OFERTAS</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features4"}><i className="fas fa-chart-bar"/>AHORRÁ EN TUS VIAJES</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features5"}><i className="fas fa-layer-group"/>LO HACEMOS NOSOTROS</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features6"}><i className="fas fa-dollar-sign"/>CUIDAMOS TU BOLSILLO</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features7"}><i className="fas fa-bullhorn"/>ANUNCIO DE OFERTAS</a>
                            <a ref={addFeaturesResponsiveRef} href={process.env.PUBLIC_URL + "/#/features8"}><i className="fas fa-money-bill-wave"/>PRÉSTAMOS</a>
                        </div>

                        <a ref={aboutResponsiveRef} href={process.env.PUBLIC_URL + "/#/project"}>Acerca del proyecto</a>
                        <a ref={hotelResponsiveRef} href={process.env.PUBLIC_URL + "/#/list"}>Hoteles</a>
                    </div>
            </div>
        </>
    );
}

export default Menu;