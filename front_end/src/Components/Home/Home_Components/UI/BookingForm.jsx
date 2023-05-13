import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Form className="d-flex" onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h4>Ngày nhận</h4>
          <input type="date" placeholder="Ngày nhận" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h4>Ngày trả</h4>
          <input type="date" placeholder="Ngày trả" />
        </FormGroup>
      </Form>
      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </div>
  );
};

export default BookingForm;