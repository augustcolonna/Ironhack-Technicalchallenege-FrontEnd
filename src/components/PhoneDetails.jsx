import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PhoneDetails() {
  const [fetching, setFetching] = useState(true);
  const [phones, setPhones] = useState([]);
  const { phonesId } = useParams();

  const apiURL = `http://localhost:5005/phones/${phonesId}`;

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setPhones(response.data);
      console.log(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      {fetching && <p>Loading Phones...</p>}
      <h1 className="phoneList">{phones.name}</h1>
      <h2>{phones.description}</h2>
      <h2>{phones.imageFileName}</h2>
    </div>
  );
}

export default PhoneDetails;
