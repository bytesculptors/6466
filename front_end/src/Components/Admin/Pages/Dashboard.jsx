import React, { useContext } from 'react'
import axios from 'axios'
import { CarDataContext } from '../../data/CarDataContext'
import "./Styles/Dashboard.css"
function Dashboard() {

  const { carData } = useContext(CarDataContext);
  console.log("car", carData && carData);
  return (
    <div>
      <div className="table_content">
        <h2>Total Cars: </h2>
        <table className='table_position table table-primary'>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Transmission</th>
              <th>Number of Seats</th>
              <th>Fuel Type</th>
              <th>Price per Day</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {carData && carData.map((car) => (
              <tr key={car.car_id}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.tranmission}</td>
                <td>{car.num_seats}</td>
                <td>{car.fuel_type}</td>
                <td>{car.price_per_day}</td>
                {/* <td><img src={car.image} alt={car.brand} /></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
