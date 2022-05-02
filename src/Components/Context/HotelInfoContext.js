import axios from "axios";
import { useState, useEffect, createContext } from "react";


const HotelInfoContext = createContext();

export const HotelInfoProvider = ({children}) => {
    const [hotelInfoState, setHotelInfoState] = useState([]);
    const [hotelPage, setHotelPage] = useState(1);
    const [fullHotel, setFullHotel] = useState([]);
    const [hotelPerPage, setHotelPerPage] = useState(7);
    const [imageLoaded, setImageLoaded] = useState(0);
    const [search, setSearch] = useState("");
    const [statusCode, setStatusCode] = useState(0);

    useEffect(() => {
        if (statusCode !== 0) {
            return;
        }

        const controller = new AbortController();

        axios({
            method: "POST",
            url: "/api",
            params: {
                "size": 300,
                "offset": 0
            },
            signal: controller.signal
        })
        .then((res) => {
            if (typeof res.data.status !== "undefined" && res.data.status !== 200) {
                setStatusCode(res.data.status);
                return;
            }

            // console.log(res.data.status);
            setHotelInfoState(res.data);
        })
        .catch((err) => {
            setStatusCode(500);
        })

        setTimeout(() => {
            controller.abort();
        }, 30000);

    }, [search, statusCode]);

    // useEffect(async () => {
    //     const response = await axios({
    //         method: "POST",
    //         url: "/api",
    //         params: {
    //             "size": 300
    //         }
    //     })

    //     setFullHotel(response.data);
    // }, []);

    return(
        <>
            <HotelInfoContext.Provider value={{hotelInfoState, hotelPage, setHotelPage, fullHotel, hotelPerPage, imageLoaded, setImageLoaded, search, setSearch, statusCode, setStatusCode}}>
                {children}
            </HotelInfoContext.Provider>
        </>
    );
}

export default HotelInfoContext;
