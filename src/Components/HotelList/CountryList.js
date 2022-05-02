import { useState, useEffect, useContext, useRef } from "react";

import HotelInfoContext from "../Context/HotelInfoContext.js"; 

const CountryList = () => {
    const [country, setCountry] = useState([]);
    const [countryName, setCountryName] = useState([]);
    const [countrySelected, setCountrySelected] = useState("");

    const { hotelInfoState, search, setSearch, setImageLoaded, setHotelPage } = useContext(HotelInfoContext);

    const searchOptionRef = useRef();

    useEffect(() => {
        const countrys = [];
        const countrysName = [];

        hotelInfoState.forEach((str) => {
            if (!countrys.includes(str.address.country)) {
                countrys.push(str.address.country);
                countrysName.push(str.address.countryName);
            }
        })
        
        setCountry(countrys);
        setCountryName(countrysName);
        
    }, [hotelInfoState]);

    const searchHotel = () => {
        if (search === countrySelected) {
            return;
        }

        setSearch(countrySelected);
        setImageLoaded(0);
        setHotelPage(1);
    }

    const searchCheckOption = (ev) => {
        setCountrySelected(ev.currentTarget.options[ev.currentTarget.selectedIndex].value);
    }

    return(
        <div className="class_hotel_search_container">
            <span className="class_hotel_search_title">Buscar hoteles en</span>
                
            <div className="class_hotel_search">
                <select onChange={searchCheckOption} ref={searchOptionRef} className="form-control">
                    <option value="" selected={true}>All</option>
                    {
                        country.map((str, num) => {
                            return <option value={str} key={num}>{countryName[num]}</option>
                        })
                    }
                </select>

                <button style={{marginLeft: "10px"}} onClick={() => searchHotel()} className="btn btn-primary">Buscar</button>
            </div>

        </div>
    )
}

export default CountryList;