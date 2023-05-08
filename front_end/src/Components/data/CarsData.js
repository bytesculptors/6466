import React, { useContext } from "react";
import axios from "axios";
import { CarDataContext } from "./CarDataContext";
import { useEffect } from "react";

function CarsData() {
  const { carData, setCarData } = useContext(CarDataContext);
  // const {totalCar, setTotalCar} = useContext(CarDataContext);

  const fetchData = () => {
    axios.post('http://localhost:8082/dashboard', "get Car Data")
      .then(res => {
        setCarData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  // const fetchTotal = () => {
  //   axios.post('http://localhost:8082/dashboard', "get total Car")
  // }
  useEffect(() => {
    fetchData();
    window.addEventListener('load', fetchData);

    return () => {
      window.removeEventListener('load', fetchData);
    };
  }, [])

  return (
    <></>
  );
}

export default CarsData
