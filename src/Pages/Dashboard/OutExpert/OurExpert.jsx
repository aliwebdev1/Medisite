import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const OurExpert = () => {
  const {
    data: specialties = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/specialties");
      const data = await res.json();
      return data;
    },
  });

  const handleAddExpert = (event) => {
    event.preventDefault();
    const form = event.target;
    const specialty = form.select.value;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];

    if (!image) {
      return toast.error("Image in not Selected");
    }

    const formDate = new FormData();
    formDate.append("specialist", specialty);
    formDate.append("name", name);
    formDate.append("email", email);
    formDate.append("image", image);

    fetch("http://localhost:3000/add-expert", {
      method: "POST",
      body: formDate,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Expert Successfully Added😊😊😊👍😁❤️");
        }
        form.reset();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>Add Our Expert</h2>
      <form
        onSubmit={handleAddExpert}
        className="w-2/4 shadow-2xl rounded-3xl p-5 mt-5"
      >
        <select name="select" className="select w-full mt-5 my-3">
          <option disabled={true}>Specialty</option>

          {specialties?.map((specialty, i) => (
            <option value={specialty.name} key={i}>
              {specialty.name}
            </option>
          ))}
        </select>

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
          type="file"
          name="image"
          className="file-input input w-full my-3"
        />

        <button type="submit" className="btn btn-primary w-full  my-3">
          Add Expert
        </button>
      </form>
    </div>
  );
};

export default OurExpert;
