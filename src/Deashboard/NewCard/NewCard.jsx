import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
const image_key = import.meta.env.VITE_imgdb_key;
const image_link = `https://api.imgbb.com/1/upload?key=${image_key}`;
import { useForm } from "react-hook-form";

const NewCard = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imagefile = { image: data.image[0] };
    // console.log(imagefile);
    const res = await axiosPublic.post(image_link, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const image = res.data.data.display_url;
    console.log(res);
    if (res.data.success) {
      const cards = {
        image1: image,
        title: data.heading,
        headingdescription: data.description,
      };
      const res = await axiosPublic.post("/cards", cards);
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `“Added Your New Card`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    // console.log(data);
  };
  return (
    <div className="bg-[#f8f8f8]">
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className=" space-y-5">
          <input
            type="text"
            placeholder="Heading"
            {...register("heading", { required: true })}
            aria-invalid={errors.heading ? "true" : "false"}
            className="py-2 px-2 w-full  border border-[#ffb300] rounded-lg"
          />
          {errors.heading?.type === "required" && (
            <p role="alert" className="text-yellow-500">
              Heading name is required
            </p>
          )}
        </div>
        <div className=" my-5 ">
          <textarea
            name=""
            {...register("description", { required: true })}
            aria-invalid={errors.description ? "true" : "false"}
            className="textarea border w-full p-2 border-[#ffb300] rounded-lg"
            placeholder="Description"
            id=""
            rows="4"
          ></textarea>
          {errors.description?.type === "required" && (
            <p role="alert" className="text-yellow-500">
              description is required
            </p>
          )}
        </div>

        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input my-3 file-input-bordered w-full "
        />
        {errors.image?.type === "required" && (
          <p role="alert" className="text-yellow-500">
            description is required
          </p>
        )}
        <button
          type="submit"
          className="w-full border-[#ffb300] text-2xl py-2 my-5 rounded-lg  bg-[#ffb300] text-white  "
        >
          {" "}
          Add Card
        </button>
      </form>
    </div>
  );
};

export default NewCard;
