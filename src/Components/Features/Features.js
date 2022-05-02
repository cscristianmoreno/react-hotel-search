import "./Features.css";

import hotel_1 from "./images/hotel_1.jpg";
import hotel_2 from "./images/hotel_2.jpg";
import hotel_3 from "./images/hotel_3.jpg";
import hotel_4 from "./images/hotel_4.jpg";
import hotel_5 from "./images/hotel_5.jpg";
import hotel_6 from "./images/hotel_6.jpg";
import hotel_7 from "./images/hotel_7.jpg";
import hotel_8 from "./images/hotel_8.jpg";

const Features = () => {
    return(
        <div className="class_features_container">
            <span className="class_title">FUNCIONALIDADES</span>

            <span className="class_features_subtitle">Principales Características</span>

            <div className="class_features_image_container">
                <div className="class_features_image">
                    <img src={hotel_1}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-search"/>
                            Busca tu hotel
                        </span>

                        <span className="class_features_description_subtitle">Buscá el hotel que tanto te gusta</span>
                    </div>
                </div>

                <div className="class_features_image">
                    <img src={hotel_2}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="far fa-calendar-check"/>
                            Reservas Online
                        </span>

                        <span className="class_features_description_subtitle">Accedé a la reserva de tu hotel favorito</span>
                    </div>
                </div>

                <div className="class_features_image">
                    <img src={hotel_3}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-chart-line"/>
                            Mejores ofertas
                        </span>

                        <span className="class_features_description_subtitle">Mirá las mejores ofertas</span>
                    </div>
                </div>
                
                <div className="class_features_image">
                    <img src={hotel_4}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-chart-bar"/>
                            Ahorrá en tus viajes
                        </span>

                        <span className="class_features_description_subtitle">Planeá tus vacaciones con anticipación</span>
                    </div>
                </div>

                <div className="class_features_image">
                    <img src={hotel_5}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-layer-group"/>
                            Lo hacemos nosotros
                        </span>

                        <span className="class_features_description_subtitle">Aventúrate en estos maravillosos destinos</span>
                    </div>
                </div>
                
                <div className="class_features_image">
                    <img src={hotel_6}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-dollar-sign"/>
                            Cuidamos tu bolsillo
                        </span>

                        <span className="class_features_description_subtitle">Mejores precios, mejores descuentos</span>
                    </div>
                </div>

                <div className="class_features_image">
                    <img src={hotel_7}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-bullhorn"/>
                            Anuncios de ofertas
                        </span>

                        <span className="class_features_description_subtitle">Buscamos las mejores promociones</span>
                    </div>
                </div>
                
                <div className="class_features_image">
                    <img src={hotel_8}/>

                    <div className="class_features_image_description">
                        <span className="class_features_description_title">
                            <i className="fas fa-money-bill-wave"/>
                            Préstamos
                        </span>

                        <span className="class_features_description_subtitle">Préstamos con pocos requisitos</span>
                    </div>
                </div>
            </div>

            <div className="class_features_footer">
                <span>...y muchas más funcionalidades.</span>
            </div>
        </div>
    );
}

export default Features;