import "./Body.css";

import Icons from "../Icons/Icons.js";
import Hotel from "./Images/Hotel.js";
import Features from "../Features/Features.js";
import Suscribe from "../Suscribe/Suscribe.js";
import SubFooter from "../SubFooter/SubFooter.js";
import Images from "../Images/Images.js";

import AnnouncementSearch from "../AnnouncementSearch/AnnouncementSearch.js";

const Body = () => {
    return(
        <div className="class_body_container"> 
            <Images/>
            {/* <Hotel/> */}

             <div className="class_title">
                 Bienvenido a <span className="class_title_color">Hotelerías</span>!
             </div>

             <br/>

             <div className="class_subtitle">
                 <span>Reservá los mejores hoteles al mejor precio!</span>
                 <span>Consultá la disponibilidad y reservas del mismo!</span>
             </div>

             <Icons/>
             <AnnouncementSearch/>
             <Features/>
             <Suscribe/>
             <SubFooter/>
        </div>
    );
}

export default Body;