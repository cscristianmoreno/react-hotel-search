import { useState, useEffect, useContext } from "react";
import HotelInfoContext from "../Context/HotelInfoContext.js";

const HotelPages = () => {
    const { hotelInfoState, setHotelPage, hotelPerPage, imageLoaded, setImageLoaded, search } = useContext(HotelInfoContext);

    const [page, setPage] = useState(1);
    const [arrayPage, setArrayPage] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const [pageRow, setPageRow] = useState(0);

    useEffect(() => {
        if (hotelInfoState.length === 0) {
            return;
        }

        let arrayHotels = hotelInfoState;

        if (search.length > 0) {
            arrayHotels = arrayHotels.filter((str) => str.address.country === search);
        }

        const pages = arrayHotels.length / hotelPerPage;
        let max_pages = parseInt(pages);

        if (Number.isInteger(pages) === false) {
            max_pages += 1;
        }

        setPage(1);
        setMaxPage(max_pages);
    }, [hotelInfoState, search]);

    useEffect(() => {
        if (hotelInfoState.length === 0) {
            return;
        }

        const array_page = [];
        
        for (let i = 1, j = 1 + (hotelPerPage * pageRow); i <= maxPage; i++, j++) {
            if (i > hotelPerPage || j > maxPage) {
                break;
            }

            array_page.push(j);
        }
        
        setArrayPage(array_page);
    }, [page, pageRow, hotelInfoState, maxPage, search]);

    useEffect(() => {
        setPageRow(0);
    }, [search]);

    const handledClickItem = (str) => {
        if (str === page) {
            return;
        }

        setPage(str);
        setHotelPage(str);
        setImageLoaded(0);
    }

    const handledNextRow = () => {
        if (arrayPage.includes(maxPage) === true) {
            return;
        }

        setPageRow(pageRow + 1);
    }

    const handledBackRow = () => {
        if (pageRow === 0) {
            return;
        }

        setPageRow(pageRow - 1);
    }
    
    return(
        <ul className="pagination">
            <li className="page-item">
                <span className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </span>
            </li>

            <li onClick={() => handledBackRow()} className="page-item">
                <span className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&lsaquo;</span>
                </span>
            </li>

            {
                arrayPage.map((str, num) => {
                    return <li key={num} className={(str === page) ?"page-item active" : ""} onClick={() => handledClickItem(str)}><span className="page-link">{str}</span></li>
                })
            }

            <li onClick={() => handledNextRow()} RowclassName="page-item">
                <span className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&rsaquo;</span>
                </span>
            </li>
            
            <li className="page-item">
                <span className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </span>
            </li>
        </ul>
    )
}

export default HotelPages;