import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "http://localhost:5005/phones"

const ListPhones = () => {
    const[fetching, setFetching] = useState(true)
    const[phones, setPhones] = useState([])


    useEffect(()=> {
        axios.get(apiURL).then((response) => {
            setPhones(response.data);
            console.log(response.data)
            setFetching(false);
        });
    }, []);

    return (
        <div>
        {fetching && <p>Loading Phones...</p>}
            <ul className="phoneList">
                {phones.map((phone) => {
                    return(
                        <Link to={`/phones/${phone.id}`} key={phone.id}>
                            <li>{phone.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListPhones;