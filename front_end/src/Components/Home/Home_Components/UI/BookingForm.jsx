import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="d-flex flex-column align-items-start mb-5">
      <Form className="d-flex" onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h6>Ngày nhận</h6>
          <input type="date" placeholder="Ngày nhận" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h6>Ngày trả</h6>
          <input type="date" placeholder="Ngày trả" />
        </FormGroup>
      </Form>
      <div className="payment text-end mt-5">
        <button>Thuê ngay</button>
      </div>
    </div>
  );
};

export default BookingForm;