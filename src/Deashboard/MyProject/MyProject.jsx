import { Link } from "react-router-dom";
import useCards from "../../Hooks/useCards/useCards";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const MyProject = () => {
  const [cards, refetch] = useCards();
  console.log(cards);
  const axiosPublic = useAxiosPublic();

  const HandleDelete = async (id) => {
    // console.log("click me", wishlist);
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete? This`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/cards/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `You has been delteted`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className=" py-5 bg-[#f8f8f8]">
      <h1 className="text-5xl font-bold">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-5 ">
        {cards.map((card) => (
          <div key={card._id}>
            <img
              src={card.image1}
              alt=""
              className="md:w-[340px] h-[280px] my-3"
            />
            <h1>{card.title}</h1>

            <div className="md:flex gap-4">
              <Link to={`/carddetails/${card._id}`}>
                {" "}
                <button className=" border-[#ffb300]  w-full py-1 px-5 my-5 rounded-lg  bg-[#ffb300] text-white  ">
                  view
                </button>
              </Link>

              <Link to={`/updatecards/${card._id}`}>
                {" "}
                <button className="w-full border-[#ffb300]  py-1 px-5 my-5 rounded-lg  bg-[#ffb300] text-white  ">
                  Update
                </button>
              </Link>
              <button
                onClick={() => HandleDelete(card._id)}
                className=" border-[#ffb300] w-full  py-1 px-5 my-5 rounded-lg  bg-[#ffb300] text-white  "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
