import React, { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../../data/BookingContext'
import { useDispatch, useSelector } from 'react-redux'
import './Styles/main.css'

function Booking() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const { bookingData } = useContext(BookingContext);
  const user_email = userData.user_email;

  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    console.log("booking", bookingData);
    if (bookingData) {
      const filtered = bookingData.filter(item => item.user_email === user_email);
      setFilteredArray(filtered);
      console.log(filtered);
    }
  }, [bookingData, user_email]);

  return (
    <div className='booking_content'>
      <h1>Booking Data</h1>
      <table className='table table-striped table-info table-hover'>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Price</th>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>User Name</th>
            <th>User Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray && filteredArray.map(booking => (
            <tr key={booking.booking_id}>
              <td>{booking.start_date}</td>
              <td>{booking.end_date}</td>
              <td>{booking.total_price}</td>
              <td>{booking.brand}</td>
              <td>{booking.model}</td>
              <td>{booking.full_name}</td>
              <td>{booking.user_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Booking
