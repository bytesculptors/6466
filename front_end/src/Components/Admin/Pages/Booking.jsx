import React, { useEffect } from 'react'
import { UserContext } from '../../data/UserContext'
import { BookingContext } from '../../data/BookingContext'

function Booking() {
  const {bookingData} = UserContext(BookingContext);
  useEffect( () => {
    console.log("booking", bookingData);
  }, [bookingData]);
  return (
    <div>
      Booking
    </div>
  )
}

export default Booking
