import React, { useContext, useEffect, useState } from 'react';
import { BookingContext } from '../../data/BookingContext';
import './Styles/Booking.css';
import { useSelector } from 'react-redux';

function MyBooking() {
  const { bookingData, setBookingData } = useContext(BookingContext);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const user = useSelector(state => state.user);

  useEffect(() => {
    setFilteredBookings(
      bookingData.filter(booking => booking.user_id === user.user_id)
    );
  }, [bookingData, user]);

  useEffect(() => {
    fetch(`/api/bookings?user_id=${user.user_id}`)
      .then(response => response.json())
      .then(data => setBookingData(data))
      .catch(error => console.error(error));
  }, [setBookingData, user]);

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
          {filteredBookings.map(booking => (
            <tr key={booking.booking_id}>
              <td>{booking.start_date}</td>
              <td>{booking.end_date}</td>
              <td>{booking.total_price}</td>
              <td>{booking.brand}</td>
              <td>{booking.model}</td>
              <td>{booking.full_name}</td>
              <td>{booking.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyBooking;
