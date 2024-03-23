import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const CardDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(details);
  useEffect(() => {
    axiosPublic(`/cards/${id}`).then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
  }, [axiosPublic, id]);

  const { image1, title, description } = details;
  return (
    <div className="w-5/6 mx-auto space-y-5 bg-[#f8f8f8]">
      <img src={image1} alt="" className="w-[600px] h-[400px]" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mr-5">{description}</p>

      <Link to="/myproject">
        <button className="btn border-[#ffb300]  py-2 my-5 rounded-lg  bg-[#ffb300] text-white">
          Back
        </button>
      </Link>
    </div>
  );
};

export default CardDetails;
