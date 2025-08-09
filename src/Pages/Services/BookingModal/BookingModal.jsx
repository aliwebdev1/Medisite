import React, { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import toast from "react-hot-toast";

const BookingModal = ({ option, setOption, date }) => {
  console.log(date);

  const { name, slots } = option;
  const { user } = useContext(AuthContext);

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
    // console.log(booking);
    // post in database
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          toast.success("Booking Confirmed");
        }
        if (data.message) {
          toast.error(data.message);
        }
      });

    setOption(null);
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
              value={date}
              className="input w-full my-3"
            />

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Name here"
              className="input w-full my-3"
            />

            <input
              name="email"
              type="email"
              defaultValue={user?.email}
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
