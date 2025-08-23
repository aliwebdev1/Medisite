import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const ManageExperts = () => {
  const {
    data: experts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["experts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/experts");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>My Appointments {experts.length}</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-secondary ">
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {experts.map((expert, i) => (
              <tr key={expert._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    className="w-10 rounded-full"
                    src={`data:image/png;base64,${expert.image}`}
                    alt=""
                  />
                </td>
                <td>{expert.name}</td>
                <td>{expert.email}</td>

                <td>
                  <button className="btn btn-sm btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageExperts;
