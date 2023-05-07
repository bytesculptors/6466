import React, {useContext} from "react";
import axios from "axios";
import { CarDataContext } from "./CarDataContext";
import { useEffect } from "react";

function CarsData() {
    const { setCarData } = useContext(CarDataContext);

    const fetchData = () => {
      axios.post('http://localhost:8082/dashboard', "get car data")
        .then(res => {
          setCarData(res.data);
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
      }, [])
  
    return (
      <></>
    );
}

export default CarsData
