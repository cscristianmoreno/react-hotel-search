import "./AnnouncementSearch.css";

import hotel_reservation from "./images/hotel_reservation.png";

const AnnouncementSearch = () => {
    return(
        <div className="class_announcement_search_container">
            <div className="class_announcement_title">
               <div className="class_title class_title_border">BUSCÁ TU <span className="class_title_color">HOTEL</span></div>
               <p className="class_announcement_text">
                    Accedé a toda información relevante de los hoteles en forma online.
                    El control y administración de tus viajes al alcance de tu mano, sin importar dónde estés.
                </p>
            </div>

            <div className="class_announcement_image_container">
                <img className="class_announcement_image" src={hotel_reservation}/>
            </div>
        </div>
    );
}

export default AnnouncementSearch;