import React, { useContext, useEffect } from 'react'
import { BookingContext } from '../../data/BookingContext'
import './Styles/Booking.css'
function Booking() {
  const { bookingData } = useContext(BookingContext);
  console.log(bookingData);
  useEffect(() => {
    console.log("booking", bookingData);
  }, [bookingData]);

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
          {bookingData && bookingData.map(booking => (
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
