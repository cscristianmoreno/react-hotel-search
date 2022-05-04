import "./App.css";
import Menu from "./Components/Menu/Menu.js";
import Body from "./Components/Body/Body.js"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import FeaturesDescription from "./Components/FeaturesDescription/FeaturesDescription.js";
import SubFooter from "./Components/SubFooter/SubFooter.js";
import HotelList from "./Components/HotelList/HotelList.js";
import ImageLazy from "./Components/HotelList/ImageLazy.js";
import Project from "./Components/Project/Project.js";

import { HotelInfoProvider } from "./Components/Context/HotelInfoContext.js";
import { ImageProvider } from "./Components/HotelList/ImageContext.js";

import hotel_1 from "./Components/Features/images/hotel_1.jpg";
import hotel_2 from "./Components/Features/images/hotel_2.jpg";
import hotel_3 from "./Components/Features/images/hotel_3.jpg";
import hotel_4 from "./Components/Features/images/hotel_4.jpg";
import hotel_5 from "./Components/Features/images/hotel_5.jpg";
import hotel_6 from "./Components/Features/images/hotel_6.jpg";
import hotel_7 from "./Components/Features/images/hotel_7.jpg";
import hotel_8 from "./Components/Features/images/hotel_8.jpg";
import hotel_9 from "./Components/Features/images/hotel_9.jpg";

const App = () => {
    return(
        <div className="class_main_container">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="features1" element={<Features1/>}/>
                    <Route path="features2" element={<Features2/>}/>
                    <Route path="features3" element={<Features3/>}/>
                    <Route path="features4" element={<Features4/>}/>
                    <Route path="features5" element={<Features5/>}/>
                    <Route path="features6" element={<Features6/>}/>
                    <Route path="features7" element={<Features7/>}/>
                    <Route path="features8" element={<Features8/>}/>
                    <Route path="features9" element={<Features9/>}/>
                    <Route path="list" element={<List/>}/>
                    <Route path="project" element={<ProjectAbout/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

const Inicio = () => {
    return(
        <>
            <Menu/>
            <Body/>
        </>
    )
} 

const Features1 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-search"
                Title="BUSCÁ TU HOTEL"
                Text="Buscá y encontrá el hotel que tanto quieres al mejor precio, con los mejores beneficios."
                Items={[
                    "Encontrá los mejores hoteles en los mejores lugares",
                    "Encontrá los precios más accesibles sin perder su calidad",
                    "Encontrá los hoteles con mejor reputación",
                    "Disfrutá los mejores destinos para pasar tus vacaciones"
                ]}
                Image={hotel_1}
            />
            <SubFooter/>
        </>
    );
}

const Features2 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-calendar-check"
                Title="RESERVAS ONLINE"
                Text="Reservá tus viajes con anticipación, mirá todos los lugares disponibles y disfrutá esas vacaciones que tanto querés con nuestro sistema de reservas"
                Items={[
                    "Reservá tu destino en el momento que más quieras",
                    "Reservá al mejor precio disponible.",
                    "Reservá con nuestro sistema de reservas online."
                ]}
                Image={hotel_2}
            />
            <SubFooter/>
        </>
    );
}

const Features3 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-chart-line"
                Title="MEJORES OFERTAS"
                Text="Gestioná todas las ofertas disponibles en todos los hoteles"
                Items={[
                    "Posibilidad de asignación de precios sobre planes de clientes, que permite hacer seguimiento de cobros y deudas.",
                    "Pagos parciales y distintas formas de pago.",
                    "Manejo de proveedores y su cuenta corriente.",
                    "Precios históricos, actuales y futuros.",
                ]}
                Image={hotel_3}
            />
            <SubFooter/>
        </>
    );
}

const Features4 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-chart-bar"
                Title="AHORRÁ EN TUS VIAJES"
                Text="Ahorrá en todo momento, disfrutá de los mejores hoteles, de las mejores vacaciones, todo y más cuidando tu bolsillo. Accedé a imperdibles ofertas
                derivadas de hoteles. Pagá menos y disfrutá más."
                Items={[]}
                Image={hotel_4}
            />
            <SubFooter/>
        </>
    );
}

const Features5 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-layer-group"
                Title="LO HACEMOS NOSOTROS"
                Text="Nosotros nos encargamos de todo. Desde la comodidad de tu casa, utilizando tu celular o computadora conectadas a Internet, tendrás acceso a 
                todas las novedades de hoteles, fechas, días disponibles, y mucho más.."
                Items={[]}
                Image={hotel_5}
            />
            <SubFooter/>
        </>
    );
}

const Features6 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-dollar-sign"
                Title="CUIDAMOS TU BOLSILLO"
                Text="No hará falta pagar de más, cuidamos tu bolsillo de la mejor forma posible, controlá todas tus reservaciones y cancelá en cualquier momento, tan solo con un click y al alcance de tu mano."
                Items={[]}
                Image={hotel_6}
            />
            <SubFooter/>
        </>
    );
}

const Features7 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-bullhorn"
                Title="ANUNCIO DE OFERTAS"
                Text="Tendrás toda la información acerca de anuncios de ofertas de diferentes, descuentos, y diversidad de beneficios de hoteles
                en todo momento."
                Items={[]}
                Image={hotel_7}
            />
            <SubFooter/>
        </>
    );
}

const Features8 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-bullhorn"
                Title="PRÉSTAMOS"
                Text="Podrás acceder a diferentes variedades de hoteles que brindan préstamos a sus huéspedes con tan solo tu documento. Además
                brindan diferentes métodos de pagos."
                Items={[]}
                Image={hotel_8}
            />
            <SubFooter/>
        </>
    );
}

const Features9 = () => {

    return(
        <>
            <Menu/>
            <FeaturesDescription
                Icon="fas fa-ellipsis-h"
                Title="MÁS FUNCIONALIDADES"
                Text="Todas las funcionalidades son configurables y adaptables a tu negocio."
                Items={[
                    "Working calendar o calendario interno de trabajo: Mantenete en contacto con tu equipo de trabajo, administrá vencimientos recurrentes y tareas que precisen tu intervención o la de algún integrante de tu equipo.",
                    "Feriados y días no laborables: bloqueos parciales o diarios.",
                    "Posibilidad de envío de mensajes a todas las personas que tengan reservas sobre una clase o especialidad.",
                    "Manejo de ficha médica y pacientes por obras sociales o prepagas.",
                    "Información de Marketing.",
                    "Cupones de descuento y promociones especiales.",
                    "Alertas automáticas de vencimiento de planes a todos tus clientes.",
                    "Toda la información relevante a tu negocio totalmente integrada y a tu disposición en todo momento."
                ]}
                Image={hotel_9}
            />
            <SubFooter/>
        </>
    );
}

const List = () => {
    return (
        <>
            <HotelInfoProvider>
                <ImageProvider>
                    <Menu/>
                    <HotelList/>
                    <SubFooter/>
              </ImageProvider>
            </HotelInfoProvider>
        </>
    )
}

const ProjectAbout = () => {
    return(
        <>
            <Menu/>
            <Project/>
            <SubFooter/>
        </>
    )
}

export default App;