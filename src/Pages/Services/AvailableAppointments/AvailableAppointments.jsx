import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";
import { format } from "date-fns/format";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  const date = format(selectedDate, "PP");
  const [option, setOption] = useState({});

  const {data:appointmentOptions=[],isLoading,refetch} = useQuery({
    queryKey: ["appointmentOptions",date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="my-20 px-4 md:px-29">
      <div className="text-center mb-10">
        <h1 className="text-2xl">
          Available Date on: <span className="text-primary">{date}</span>
        </h1>
        <h3 className="mt-3  text-primary">Select your Service</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions?.map((service) => (
          <AppointmentOptions
            service={service}
            key={service._id}
            setOption={setOption}
          ></AppointmentOptions>
        ))}
      </div>

      {option && (
        <BookingModal
          option={option}
          setOption={setOption}
          date={date}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
