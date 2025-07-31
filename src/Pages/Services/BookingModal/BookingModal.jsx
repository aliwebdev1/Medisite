import React from "react";

const BookingModal = ({ option, setOption, date }) => {
  const { name, slots } = option;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.select.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const number = form.number.value;

    const booking = {
      service: name,
      slot: slot,
      appointmentDate: date,
      patient: patientName,
      email: email,
      number: number,
    };
    console.log(booking);
    // post in database

    // setOption(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{name}</h3>
            <label
              htmlFor="booking_modal"
              className="btn rounded-full bg-primary text-white font-semibold"
            >
              X
            </label>
          </div>

          <form onSubmit={handleBooking}>
            <select name="select" className="select w-full mt-5 my-3">
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Date"
              defaultValue={date}
              readOnly
              className="input w-full my-3"
            />

            <input
              name="name"
              type="text"
              placeholder="Name here"
              className="input w-full my-3"
            />

            <input
              name="email"
              type="email"
              placeholder="email here"
              className="input w-full my-3"
            />
            <input
              name="number"
              type="number"
              placeholder="phone number"
              className="input w-full my-3"
            />
            <button type="submit" className="btn btn-primary w-full  my-3">
              Submit Here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
