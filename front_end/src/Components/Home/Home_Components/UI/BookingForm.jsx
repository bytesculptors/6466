import React, { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = (props) => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const { car_id, price } = props.item;

  const [bookingInfo, setBookingInfo] = useState({
    pRice: price,
    carId: car_id,
    userId: userData.user_id,
    startDate: "",
    endDate: ""

  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newBookingInfo = {
      ...bookingInfo,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value
    }

    axios.post('/new_booking', newBookingInfo)
      .then(res => {
        console.log(res);
        if (res && res.data) {
          window.location.reload();
          alert('Đặt hàng thành công!');
        } else {
          console.log('Response data is null');
        }
      })
      .catch(error => {
        console.log(error);
        console.log(newBookingInfo);
      });

  };


  return (
    <div className="d-flex flex-column align-items-start mb-5">
      <Form className="d-flex" onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h6>Ngày nhận</h6>
          <input type="date" name="startDate" value={bookingInfo.startDate} onChange={handleInputChange} placeholder="Ngày nhận" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h6>Ngày trả</h6>
          <input type="date" name="endDate" value={bookingInfo.endDate} onChange={handleInputChange} placeholder="Ngày trả" />
        </FormGroup>
      </Form>
      <div className="payment text-end mt-5">
        <button onClick={() => console.log(bookingInfo)}>Thuê ngay</button>
      </div>
    </div>
  );
};

export default BookingForm;
